const treeScrollContainer = document.getElementById("tree-scroll-container");
const treeContainer = document.getElementById("tree-container");
const treeJumpButton = document.getElementById("tree-jump-button");
const familyKey = document.getElementById("family-key");
const familyProgress = document.getElementById("family-progress");
const validationOverlay = document.getElementById("validation-modal-overlay");
const validationContinueButton = document.getElementById("validation-continue-button");
const validationSlots = Array.from(document.querySelectorAll("#validation-slots .validation-slot"));
const nameOptions = family_members_data.filter(member => !member.hidden).map(member => member.name).sort();
const titleOptions = family_members_data.filter(member => !!member.title && !member.titleLocked).map(member => member.title).sort();
const treeScrollThreshold = 8;
const validationRevealDelayMs = 500;

let familyMembers = {}; // by name
let tree = []; // by generation
let relationships = [];
let treeColumnCount = 0;
let relationshipLayer = null;
let relationshipRenderFrame = null;
let treeResizeObserver = null;
let restoringTreeState = false;
let validationBatchInProgress = false;
let validationRevealTimeouts = [];

function initTree() {
    readTreeData();
    restoreTreeState();
    populateFamilyKey();
    updateFamilyProgress();
    populateTree();
    initRelationshipRender();
    initTreeJumpButton();
}

function populateTree() {
    const layoutElement = createElement(null, "tree-layout");

    for (const generation of tree) {
        const generationElement = createElement(null, "generation");

        for (let columnIndex = 0; columnIndex < treeColumnCount; columnIndex++) {
            const slotElement = createElement(null, "tree-slot");

            const member = generation[columnIndex] || null;
            if (member) {
                const memberElement = createMemberElement(member);
                slotElement.appendChild(memberElement);
            }

            generationElement.appendChild(slotElement);
        }

        layoutElement.appendChild(generationElement);
    }

    relationshipLayer = createElement(null, "relationship-layer");

    treeContainer.appendChild(layoutElement);
    treeContainer.appendChild(relationshipLayer);

    scheduleRelationshipRender();
}

function onClickDebugSolveButton() {
    if (areAllVisibleMembersSolved()) {
        resetAllMembers();
        return;
    }

    solveAllMembers();
}

function areAllVisibleMembersSolved() {
    return Object.values(familyMembers).every(member => member.hidden || member.solved);
}

function solveAllMembers() {
    for (const member of Object.values(familyMembers)) {
        if (!member.hidden) {
            markMemberSolved(member);
            member.element?.classList.toggle("is-crowned", !!member.crowned);
        }
    }

    refreshAvailableInputs();
    updateFamilyProgress();
    persistTreeState();
}

function resetAllMembers() {
    for (const member of Object.values(familyMembers)) {
        member.solved = false;
        member.nameGuess = "";
        member.titleGuess = "";

        member.element?.classList.remove("solved");
        const nameInput = member.element?.querySelector(".name-input");
        const titleInput = member.element?.querySelector(".title-input");
        if (nameInput) {
            nameInput.selectedIndex = 0;
        }
        if (titleInput) {
            titleInput.selectedIndex = 0;
        }
    }

    refreshAvailableInputs();
    updateFamilyProgress();
    persistTreeState();
}

function normalizeGuess(value) {
    return value.trim().toLowerCase();
}

function isMemberCorrect(member) {
    return normalizeGuess(member.nameGuess) === normalizeGuess(member.name)
        && (member.titleLocked ||
            normalizeGuess(member.titleGuess) === normalizeGuess(member.title));
}

function markMemberSolved(member) {
    member.nameGuess = member.name;
    if (member.title && !member.titleLocked) {
        member.titleGuess = member.title;
    }
    member.solved = true;
    member.element?.classList.add("solved");
}

function getVisibleFamilyMembers() {
    return Object.values(familyMembers).filter(member => !member.hidden);
}

function updateFamilyProgress() {
    if (!familyProgress) {
        return false;
    }

    const visibleMembers = getVisibleFamilyMembers();
    const solvedMemberCount = visibleMembers.filter(member => member.solved).length;
    familyProgress.textContent = `Solved: ${solvedMemberCount}/${visibleMembers.length}`;
    const isComplete = solvedMemberCount === visibleMembers.length;

    if (isComplete && !validationBatchInProgress) {
        showEndModal();
    }

    return isComplete;
}

function validateMembers() {
    if (validationBatchInProgress) {
        return;
    }

    const unsolved = Object.values(familyMembers).filter(member => !member.hidden && !member.solved);
    const correct = unsolved.filter(member => isMemberCorrect(member));

    const threshold = Math.min(3, unsolved.length);
    if (correct.length < threshold) {
        return;
    }

    if (threshold > validationSlots.length) {
        console.error(`Mismatch between validation threshold ${threshold} and available slots ${validationSlots.length}`);
    }

    revealValidatedMembers(correct.slice(0, validationSlots.length));
}

function revealValidatedMembers(members) {
    clearValidationRevealTimeouts();
    validationBatchInProgress = true;
    validationContinueButton.disabled = true;
    document.body.classList.add("modal-open");
    validationOverlay.classList.add("is-open");
    resetValidationSlots();

    members.forEach((member, index) => {
        const delay = validationRevealDelayMs * (index + 1);
        const timeoutId = fillValidationSlot(member, index, delay);
        validationRevealTimeouts.push(timeoutId);
    });

    const finalDelay = validationRevealDelayMs * (members.length + 1);
    const finalTimeoutId = window.setTimeout(() => {
        validationContinueButton.disabled = false;
        validationContinueButton.focus();
    }, finalDelay);
    validationRevealTimeouts.push(finalTimeoutId);
}

function completeValidation() {
    validationBatchInProgress = false;
    dismissValidationModal();

    if (updateFamilyProgress()) {
        showEndModal();
    }
    else {
        // Check if there's any more to validate (shouldn't happen)
        validateMembers();
    }

    refreshAvailableInputs();
    persistTreeState();
}

function fillValidationSlot(member, slotIndex, revealDelay) {
    const slot = validationSlots[slotIndex];
    if (!slot || !member.element) {
        return;
    }

    slot.replaceChildren();

    const preview = member.element.cloneNode(true);
    preview.classList.add("solved");
    slot.appendChild(preview);

    return window.setTimeout(() => {
        slot.classList.add("is-revealed");
        markMemberSolved(member);
    }, revealDelay);
}

function resetValidationSlots() {
    for (const slot of validationSlots) {
        slot.classList.remove("is-revealed");
        slot.replaceChildren();
    }
}

function clearValidationRevealTimeouts() {
    for (const timeoutId of validationRevealTimeouts) {
        window.clearTimeout(timeoutId);
    }

    validationRevealTimeouts = [];
}

function dismissValidationModal() {
    if (!validationOverlay || !validationOverlay.classList.contains("is-open")) {
        return;
    }
    clearValidationRevealTimeouts();
    resetValidationSlots();
    validationOverlay.classList.remove("is-open");
    validationContinueButton.disabled = true;
    document.body.classList.remove("modal-open");
}

function createMemberElement(member) {
    const element = createElement(null, "family-member");
    element.classList.toggle("solved", !!member.solved);
    element.classList.toggle("long-title", !!member.title && member.title.length > 15);
    element.classList.toggle("title-locked", !!member.titleLocked);
    element.dataset.name = member.name;
    element.dataset.family = member.family;

    if (member.hidden) {
        element.classList.add("hidden-member");
        member.element = element;
        return element;
    }

    if (member.crowned) {
        const crown = createElement(element, "crown");
        crown.textContent = obsidian_terms[member.crowned] || member.crowned;
        element.classList.toggle("hide-crown", !!member.hideCrowned);
    }

    const portrait = createElement(element, "portrait");
    const portraitImg = createElement(portrait, "", "img");
    const portraitSrcKey = member.portrait?.toLowerCase() || member.name.toLowerCase();
    portraitImg.src = `img/${portraitSrcKey}.png`;

    const nameContainer = createElement(element, "name-container");

    const familyName = createElement(nameContainer, "family-name");
    familyName.innerHTML = families[member.family] || '&nbsp;';
    
    const name = createElement(nameContainer, "name display");
    name.textContent = member.name;
    const nameInput = createElement(nameContainer, "name-input input", "select");
    populateNameOptions(nameInput, member.nameGuess || "");
    nameInput.addEventListener("input", event => {
        member.nameGuess = event.target.value;
        persistTreeState();
        validateMembers();
    });

    if (member.title) {
        const titleContainer = createElement(nameContainer, "title-container");
        const title = createElement(titleContainer, "title display");
        title.textContent = member.title;
        const titleInput = createElement(titleContainer, "title-input input", "select");
        populateTitleOptions(titleInput, member.titleGuess || "");
        titleInput.addEventListener("input", event => {
            member.titleGuess = event.target.value;
            persistTreeState();
            validateMembers();
        });
    }

    member.element = element;

    element.addEventListener("mouseenter", () => {
        toggleRelationshipHighlight(member, true);
    });
    element.addEventListener("mouseleave", () => {
        toggleRelationshipHighlight(member, false);
    });

    return element;
}

function createElement(parent = null, className = "", tag = "div") {
    const element = document.createElement(tag);
    element.className = className;
    parent?.appendChild(element);
    return element;
}

function populateTitleOptions(selectElement, selectedValue = "") {
    selectElement.replaceChildren();

    const placeholderOption = createElement(selectElement, "", "option");
    placeholderOption.value = "";
    placeholderOption.textContent = "";
    placeholderOption.selected = !selectedValue;

    for (const titleOption of getAvailableTitleOptions()) {
        const optionElement = createElement(selectElement, "", "option");
        optionElement.value = titleOption;
        optionElement.textContent = titleOption;
        optionElement.selected = titleOption === selectedValue;
    }

    selectElement.value = selectedValue;
    return selectElement.value;
}

function populateNameOptions(selectElement, selectedValue = "") {
    selectElement.replaceChildren();

    const placeholderOption = createElement(selectElement, "", "option");
    placeholderOption.value = "";
    placeholderOption.textContent = "";
    placeholderOption.selected = !selectedValue;

    for (const nameOption of getAvailableNameOptions()) {
        const optionElement = createElement(selectElement, "", "option");
        optionElement.value = nameOption;
        optionElement.textContent = nameOption;
        optionElement.selected = nameOption === selectedValue;
    }

    selectElement.value = selectedValue;
    return selectElement.value;
}

function getDiscoveredNameOptions() {
    return nameOptions.filter(name => discoveredNames.has(name.toLowerCase()));
}

function getSolvedNameSet() {
    return new Set(
        Object.values(familyMembers)
            .filter(member => member.solved)
            .map(member => member.name)
    );
}

function getAvailableNameOptions() {
    const solvedNames = getSolvedNameSet();
    return getDiscoveredNameOptions().filter(name => !solvedNames.has(name));
}

function getSolvedTitleCounts() {
    const solvedTitleCounts = new Map();

    for (const member of Object.values(familyMembers)) {
        if (!member.solved || !member.title || member.titleLocked) {
            continue;
        }

        solvedTitleCounts.set(member.title, (solvedTitleCounts.get(member.title) || 0) + 1);
    }

    return solvedTitleCounts;
}

function getAvailableTitleOptions() {
    const solvedTitleCounts = getSolvedTitleCounts();

    return titleOptions.filter(title => {
        const remainingSolvedCount = solvedTitleCounts.get(title) || 0;
        if (!remainingSolvedCount) {
            return true;
        }

        solvedTitleCounts.set(title, remainingSolvedCount - 1);
        return false;
    });
}

function refreshAvailableInputs() {
    let didUpdateGuess = false;

    for (const member of Object.values(familyMembers)) {
        if (member.hidden || member.solved) {
            continue;
        }

        const nameInput = member.element?.querySelector(".name-input");
        if (nameInput) {
            const nextNameGuess = populateNameOptions(nameInput, member.nameGuess || "");
            if (nextNameGuess !== (member.nameGuess || "")) {
                member.nameGuess = nextNameGuess;
                didUpdateGuess = true;
            }
        }

        const titleInput = member.element?.querySelector(".title-input");
        if (titleInput) {
            const nextTitleGuess = populateTitleOptions(titleInput, member.titleGuess || "");
            if (nextTitleGuess !== (member.titleGuess || "")) {
                member.titleGuess = nextTitleGuess;
                didUpdateGuess = true;
            }
        }
    }

    if (didUpdateGuess) {
        persistTreeState();
    }
}

function refreshDiscoveredNameInputs() {
    refreshAvailableInputs();
}

function readTreeData() {
    tree = [];
    relationships = [];
    treeColumnCount = 0;

    const relationshipsByPerson = {};
    for (const relationshipArr of relationships_data) {
        const [p1, type, p2] = relationshipArr;
        const relationship = { p1, type, p2 };

        addUniqueToDict(relationshipsByPerson, p1, relationship);
        addUniqueToDict(relationshipsByPerson, p2, relationship);

        relationships.push(relationship);
    }

    familyMembers = {};
    for (const member of family_members_data) {
        if (member.nudgeLines) {
            relationshipsByPerson[member.name]?.forEach(relationship => relationship.nudgeLines = true);
        }
        familyMembers[member.name] = {
            ...member,
            relationships: relationshipsByPerson[member.name] || [],
            nameGuess: "",
            titleGuess: "",
            solved: !!member.solved,
        };
    }

    const rows = generations_data.split("\n");
    for (const row of rows) {
        const members = row.split("|");
        const generation = [];
        for (const memberName of members) {
            const trimmed = memberName.trim();
            if (trimmed) {
                const member = familyMembers[trimmed];
                generation.push(member);
            }
            else {
                generation.push(null);
            }
        }
        if (generation.some(member => member)) {
            tree.push(generation);
            treeColumnCount = Math.max(treeColumnCount, generation.length);
        }
    }
}

function initTreeJumpButton() {
    if (!treeJumpButton || !treeScrollContainer) {
        return;
    }

    treeJumpButton.addEventListener("click", onClickTreeJumpButton);
    treeScrollContainer.addEventListener("scroll", syncTreeJumpButtonState, { passive: true });
    window.addEventListener("resize", syncTreeJumpButtonState);
    syncTreeJumpButtonState();
}

function onClickTreeJumpButton() {
    if (!treeScrollContainer) {
        return;
    }

    const targetTop = isTreeScrolledToBottom()
        ? 0
        : getTreeMaxScrollTop();

    treeScrollContainer.scrollTo({
        top: targetTop,
        behavior: "smooth",
    });
}

function syncTreeJumpButtonState() {
    if (!treeJumpButton || !treeScrollContainer) {
        return;
    }

    const maxScrollTop = getTreeMaxScrollTop();
    const isScrollable = maxScrollTop > treeScrollThreshold;
    treeJumpButton.disabled = !isScrollable;
    const jumpToTop = isTreeScrolledToBottom();
    treeJumpButton.classList.toggle("jump-to-top", jumpToTop);
}

function isTreeScrolledToBottom() {
    if (!treeScrollContainer) {
        return false;
    }

    return treeScrollContainer.scrollTop >= getTreeMaxScrollTop() - treeScrollThreshold;
}

function getTreeMaxScrollTop() {
    if (!treeScrollContainer) {
        return 0;
    }

    return Math.max(treeScrollContainer.scrollHeight - treeScrollContainer.clientHeight, 0);
}

function populateFamilyKey() {
    if (!familyKey) {
        return;
    }

    familyKey.replaceChildren();

    for (const [familyIndex, familyName] of families.entries()) {
        const item = createElement(familyKey, "family-key-item");
        item.dataset.family = familyIndex;

        const indicator = createElement(item, "family-key-indicator");
        indicator.setAttribute("aria-hidden", "true");

        const label = createElement(item, "family-key-label");
        label.textContent = familyName;
    }
}

function debugDiscoverAllNames() {
    for (const name of nameOptions) {
        discoveredNames.add(name.toLowerCase());
    }
    refreshDiscoveredNameInputs();
}

function debugFill(count = 1) {
    debugDiscoverAllNames();
    const unsolvedMembers = Object.values(familyMembers).filter(member => !member.hidden && !isMemberCorrect(member));
    const toFill = unsolvedMembers.slice(0, count);
    for (const member of toFill) {
        member.nameGuess = member.name;
        if (member.title && !member.titleLocked) {
            member.titleGuess = member.title;
        }
        member.element.querySelector(".name-input").value = member.nameGuess;
        member.element.querySelector(".title-input").value = member.titleGuess;
    }
    persistTreeState();

    validateMembers();
}

function getTreeSaveData() {
    const members = {};

    for (const member of Object.values(familyMembers)) {
        if (member.solved) {
            members[member.name] = {
                solved: true,
            };
        }
        else {
            members[member.name] = {
                nameGuess: member.nameGuess,
                titleGuess: member.titleGuess,
            };
        }
    }

    return {
        members
    };
}

function persistTreeState() {
    if (restoringTreeState || !writeTrevosaDataSection) {
        return;
    }

    writeTrevosaDataSection("tree", getTreeSaveData());
}

function restoreTreeState() {
    const savedState = readTrevosaDataSection?.("tree");
    if (!savedState) {
        return false;
    }

    try {
        const savedMembers = savedState.members && typeof savedState.members === "object"
            ? savedState.members
            : {};

        for (const member of Object.values(familyMembers)) {
            const savedMember = savedMembers[member.name];
            if (!savedMember || typeof savedMember !== "object") {
                continue;
            }

            member.solved = savedMember.solved === true;
            if (member.solved) {
                member.nameGuess = member.name;
                if (member.title && !member.titleLocked) {
                    member.titleGuess = member.title;
                }
            }
            else {
                member.nameGuess = typeof savedMember.nameGuess === "string" ? savedMember.nameGuess : "";
                member.titleGuess = typeof savedMember.titleGuess === "string" ? savedMember.titleGuess : "";
            }
        }

        return true;
    }
    catch {
        return false;
    }
}