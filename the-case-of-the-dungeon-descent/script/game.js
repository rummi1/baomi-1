// Debug
const UNLOCK_EVERYTHING = false;
const START_WITH = null; //["Fireball", "Amulet", "Brammek", "Imbue", "Zil", "Strength"];
const TUTORIAL_START_WITH = ["Fireball", "Kara", "Brammek", "Imbue", "Zil", "Strength", "Kobold", "Entrance"];
const AUTO_DISCOVER_BUTTON = false;
const AUTO_FILTER = false;

const sortedSpells = SPELLS.sort((a, b) => a.localeCompare(b));
const allCategories = [[CHARACTERS, 'character'], [sortedSpells, 'spell'], [roomsInOrder, 'room']];

const scale = 4;
const bannerWidth = 128;
const bannerHeight = 32;
const coordinateWidth = 14;
const coordinateHeight = 26;

let scenes = {};

let cachedSearchResults = {};
let previousSearchIndexes = {};

let discoveredScenes = {};
let discoveredKeywords = {"character": {}, "spell": {}, "room": {}};

let history = [];
let historyIndex = -1;
let currentSceneId;

const scryState = { character: null, spell: null, room: null };

let isTutorial = true;
let isEndgame = false;

const SAVE_KEY = "dungeon-descent-save";
const TESTER_SAVE_KEY = "dungeon-descent-tester";
let autoSave = true;
let playMusic = true;
let playSounds = true;

function startGame()
{
    parseScenes();
    preloadImages();
    isTutorial = !UNLOCK_EVERYTHING;

    const startSceneId = loadGame();
    const startScene = scenes[startSceneId];

    const introScene = createCastleScene(INTRO_TEXT, 'intro');
    executeAndRecord("intro", displayScene.bind(this, "intro", introScene, true));

    // We always include the castle scenes in the history
    if (!isTutorial) {
        displayPostTutorialScene();
    }
    if (isEndgame) {
        completeGame();
    }

    if (UNLOCK_EVERYTHING) {
        unlockFromList();
    }
    else if (START_WITH?.length) {
        unlockFromList(START_WITH);
    }

    initializeTesters();
    initSettings();
    initSounds();

    if (!isTutorial && !discoveredKeywords.character["Felicity"]) {
        // Just in case - if we don't have Felicity yet we need to see intro2
        displayPostTutorialScene();
    }
    else if (startScene) {
        //console.log(`Starting game with scene: ${startSceneId}`);
        executeAndRecord(startScene.id, displayScene.bind(this, startScene.id, startScene, true));
    }
}

function completeTutorial()
{
    resetScrySelection();
    isTutorial = false;
    checkClearHint("intro2");
    initializeTesters();
    toggleTesterPopup(true);
    displayPostTutorialScene();
}

function displayPostTutorialScene() {
    const introScene2 = createCastleScene(INTRO_2, 'intro2');
    executeAndRecord("intro2", displayScene.bind(this, "intro2", introScene2, true, "intro"));
}

function handleScry()
{
    let keywords = Object.values(scryState).filter(keyword => keyword);

    // Sanity check - all scry slots should match the expected keywords
    for (let category of Object.keys(scryState)) {
        const slotElem = document.getElementById(`scry-${category}`);
        const selected = slotElem.dataset.selected;
        const expected = scryState[category];
        if (!selected && !!expected) {
            console.warn(`Scry slot ${category} is expected to have ${expected} but is empty.`);
            showKeywordInSlot(expected, category);
        }
        else if (selected) {
            const [_cat, selectedKeyword] = selected.split(':');
            if (!expected && !!selectedKeyword) {
                console.warn(`Scry slot ${category} has ${selectedKeyword} but expected to be empty.`);
                emptySlot(category);
                showKeywordInTray(selectedKeyword, category);
            }
            else if (selectedKeyword !== expected) {
                console.warn(`Scry slot ${category} has ${selectedKeyword} but expected ${expected}.`);
                showKeywordInSlot(expected, category);
                showKeywordInTray(selectedKeyword, category);
            }
        }
    }

    if (keywords.length) {
        performScry(keywords);
    }
}

async function resetScrySelection() {
    const animations = [];
    document.querySelectorAll('#scry-slots .token').forEach(elem => {
        if (!elem.dataset.selected) return;
        [category, keyword] = elem.dataset.selected.split(':');
        animations.push(moveKeywordFromScrySlot(keyword, category));
    });
    await Promise.all(animations);
    updateNavButtons();
}

function performScry(keywords)
{
    let results = getSearchResults(keywords);

    //console.log(keywords, results);

    if (results.length == 0)
    {
        displayNoResults(keywords);
        recordHistory("no results");
    }
    else
    {
        executeAndRecord("scry:" + results.join(), displayOptions.bind(this, keywords, results));
    }
}

function updateScryedKeywords(keywords)
{
    const friendlyKeywords = keywords.map(keyword => {
        const category = getCategory(keyword);
        if (category == 'character') {
            return `the ${characterClassLookup[keyword]}`; // Don't want to give away their name...
        }
        else if (category == 'room') {
            return `the ${displayNameLookup[keyword] || keyword}`;
        }
        return displayNameLookup[keyword] || keyword;
    });
    document.querySelectorAll(".content .keywords").forEach(elem => elem.textContent = friendlyKeywords.join(" + "));
}

function displayNoResults(keywords)
{
    updateScryedKeywords(keywords);
    document.querySelectorAll('.content').forEach((elem) => elem.style.display = elem.id == "no-result-text" ? "block" : "none");
}

function displayCleared()
{
    document.querySelectorAll('.content').forEach((elem) => elem.style.display = elem.id == "cleared-text" ? "block" : "none");
}

function discoverScene(sceneId)
{
    discoveredScenes[sceneId] = true;
    checkClearHint(sceneId);
    updateDiscoveredCounts();

    // Just for fun
    if (sceneId === 'epilogue') {
        updateKarasFate();
    }
}

function displayScene(sceneId, scene, isFirstView, imageKey)
{
    document.querySelectorAll('.content').forEach((elem) => elem.style.display = elem.classList.contains("scene") ? "flex" : "none");

    currentSceneId = sceneId;
    //console.log(sceneId);

    if (!(sceneId in discoveredScenes)) {
        discoverScene(sceneId);
    }

    scene = scene || scenes[sceneId];
    
    const img = `scene${imageKey ?? sceneId.replaceAll('.', '-')}`;
    document.getElementById("banner").src = `images/${img}.gif`;

    // Set up banner snapshot which is the unlockable element for the room (rather than just the room's peek)
    // This would be if we want to force people to collect the room first
    // const bannerSnapshot = document.getElementById("banner-snapshot");
    // const room = ROOMS[sceneId.split('.')[1]];
    // bannerSnapshot.dataset.name = room ?? '';

    // Add "peeks" that are clickable to unlock keywords
    let peeks = getPeeks(sceneId, Object.keys(scene.unlocks), img, true);
    document.getElementById("banner-peeks").innerHTML = peeks;

    const output = document.querySelector('.output');
    output.dataset.scene = sceneId;
    output.dataset.party = scene.party;
    output.classList.toggle("first-view", isFirstView);

    let outputElem = document.getElementById("scene-output");
    outputElem.innerHTML = scene.displayTitle ? `<h3>${scene.displayTitle}</h3>` : '';

    for (let line of scene.lines)
    {
        if (line.speaker) {
            let keyword = line.speaker;
            if (line.speaker == "Revenant") keyword = "Vane";
            else if (line.speaker == "Lich") keyword = "Felicity";

            let unlockableClass = CHARACTERS.includes(keyword) ? "unlockable highlight" : "";
            if (line.speaker == "Revenant") unlockableClass += " revenant";
            outputElem.innerHTML += `<div class="dialog"><img class="${unlockableClass}" data-name=${keyword} src="images/portrait_${line.speaker.toLowerCase()}.gif"><div>
                                    <span class="${unlockableClass} speaker" data-name=${keyword}>${line.speaker}:</span>
                                    ${line.text}</div></div>`;
        }
        else {
            outputElem.innerHTML += `<div class="narration">${line.text}</div>`;
        }
    }

    if (AUTO_DISCOVER_BUTTON) {
        displayNewKeywords(scene);
    }

    updateUnlockableKeywords();

    outputElem.parentElement.parentElement.scrollTop = 0;

    // Reset scry on accessing a scene
    //resetScrySelection();

    // if (sceneId == ENDING_SCENE) {
    //     outputElem.innerHTML += `<div class="footer"><div id="end-text">THE END</div></div>`;
    //     //outputElem.innerHTML += `<div class="footer"><button id="end-button" onclick="handleEndButton()">Complete investigation</button></div>`;
    // }

    // If this is 3.1, add a tutorial note
    if (sceneId == "3.1") {
        outputElem.insertAdjacentHTML('beforeend', `<div class="note">Click Record Fates when you can answer the King's question.</div>`);
    }
}

function displayOptions(keywords, results)
{
    const isSingleResult = results.length == 1;

    // Hide no result text, display results with appropriate text
    document.querySelectorAll('.content').forEach((elem) => elem.style.display = elem.classList.contains("scry") ? "block" : "none");
    document.querySelectorAll('#multiple-result-text')[0].style.display = isSingleResult ? "none" : "block";
    document.querySelectorAll('#single-result-text')[0].style.display = isSingleResult ? "block" : "none";
    updateScryedKeywords(keywords);

    let outputElem = document.getElementById("scry-options");
    outputElem.innerHTML = "";

    let hintsShown = false;
    for (let sceneId of results)
    {
        let discovered = sceneId in discoveredScenes;
        let fullyVisible = discovered || isSingleResult;
        if (!fullyVisible) hintsShown = true;

        let img = "scene" + sceneId.replaceAll('.', '-');
        let backgroundImg = fullyVisible ? `<img src="images/${img}.gif" />` : "";
        let onClick = (discovered || isSingleResult) ? ` onclick="handleOption('${sceneId}', ${!discovered})"` : "";
        let className = fullyVisible ? "seen" : "unseen";

        let scryButton = "";
        if (!discovered && isSingleResult) {
            // No onclick on the button since clicking the scene at all will discover/display it
            scryButton = `<button class="reveal-button">Reveal</button>`;
        }

        // Peek at the targets
        let peeks = '';
        if (!fullyVisible) {
            peeks = getPeeks(sceneId, keywords, img);
        }

        // New keyword hint for unlocked scenes that have not yet collected everything...
        let newKeywordsHint = "";
        if (discovered) {
            const allKeywords = Object.keys(scenes[sceneId].unlocks);
            const newKeywords = allKeywords.filter(keyword => !(keyword in discoveredKeywords[getCategory(keyword)]));
            if (newKeywords.length > 0) {
                newKeywordsHint = `<div class="new-keyword-hint">
                    <div class="new-keyword-counter token">${allKeywords.length - newKeywords.length}/${allKeywords.length}</div>
                    </div>`;
            }
        }

        outputElem.innerHTML += `<div class="hint ${className}" data-party="${sceneId[0]}" ${onClick}>
            ${backgroundImg}
            ${peeks}
            ${scryButton}
            ${newKeywordsHint}
        </div>`;
    }

    document.querySelectorAll('#multiple-result-text .to-reveal')[0].style.display = hintsShown ? "inline" : "none";

    // Scroll to top
    document.querySelector(".scry.content").scrollTop = 0;
}

function handleOption(sceneId, isJustDiscovered)
{
    executeAndRecord("option:" + sceneId, displayScene.bind(this, sceneId, undefined, isJustDiscovered));
}

// Instead of clicking on words in the text, display the keywords at the bottom
function displayNewKeywords(scene) {
    let elem = document.getElementById("new-keywords");
    elem.innerHTML = "";
    let discoveredAnything = false;

    const getKeywordItem = (keyword, category, discovered) => {
        if (discovered) {
            return '';
        }
        
        discoveredAnything = true;
        let className = discovered ? "" : "new";
        let content;
        let title = displayNameLookup[keyword] ?? keyword;
        if (category === 'character') {
            content = `<img src="images/portrait_${keyword.toLowerCase()}.gif" />`;
        } else {
            content = `<div class="keyword">${title}</div>`;
        }

        return `<span class="unlockable ${category} ${className}" data-name="${keyword}" onclick="recordNewKeyword(this)">${content}</span>`;
    }

    const itemsByType = { 'room': [], 'character': [], 'spell': [] };

    for (let keyword in scene.unlocks) {
        let category = getCategory(keyword);
        let discovered = keyword in discoveredKeywords[category];

        const keywordSpan = getKeywordItem(keyword, category, discovered);
        itemsByType[category].push(keywordSpan);
    }

    if (!discoveredAnything) {
        document.getElementById("new-keywords-container").style.display = "none";
        return;
    } else {
        document.getElementById("new-keywords-container").style.display = "flex";
    }

    for (let category in itemsByType) {
        if (itemsByType[category].length > 0) {
            elem.innerHTML += `<div class="${category}s">${itemsByType[category].join(' ')}</div>`;
        }
    }
}

function recordKeyword(keyword, category)
{
    if (category in discoveredKeywords && keyword in discoveredKeywords[category])
    {
        return;
    }

    //console.log("record", keyword, category);

    discoveredKeywords[category][keyword] = true;

    // Add token to the known keywords section
    let tray = document.querySelector(`#known-keywords .${category}.tray`);
    let token = getKeywordToken(category, keyword);
    tray.appendChild(token);

    // Sort room tokens by floor when we add a new one
    if (category == "room")
    {
        [...tray.children]
            .sort((a, b) => a.querySelector('img').src > b.querySelector('img').src ? 1 : -1)
            .forEach(node => tray.appendChild(node));
    }

    // let id = category+":"+keyword;
    // let elem = document.getElementById(id);
    // if (elem) elem.classList.remove('empty');

    // elem?.scrollIntoView({ behavior: "smooth", block: "center" });

    // Do this after the animation of collecting the token
    //updateUnlockableKeywords();

    // Add to tester list
    if (category === 'room') {
        updateLocationSelects(keyword);
    }
    else if (category === 'spell') {
        updateSpellSelects(keyword);
    }
    else if (category === 'character') {
        revealTesterPortrait(keyword);
    }
}

// aka a keyword from the New Keywords section
// DEPRECATED: use recordKeyword instead
function recordNewKeyword(keywordElem) {
    // TODO put the category in an attribute like we do elsewhere
    const keyword = keywordElem.dataset.name;
    const category = keywordElem.classList.contains('character') ? 'character' :
        keywordElem.classList.contains('spell') ? 'spell' : 'room';

    hideTooltip(keyword);
    recordKeyword(keyword, category);
    keywordElem.style.display = 'none';
}

async function recordAllNewKeywords()
{
    const newKeywordsElem = document.getElementById("new-keywords");
    for (let child of newKeywordsElem.children) {
        for (let keywordElem of child.children) {
            recordNewKeyword(keywordElem);
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }

    // TODO this could have a nice transition or whatever
    document.getElementById("new-keywords-container").style.display = "none";
}

/** Handles clicking a keyword anywhere (unlocking from the text, adding to scry, etc) */
async function handleClickKeyword(keyword, category, elem)
{    
    startMusic();

    // Already discovered - toggle the keyword input for scry
    if (category in discoveredKeywords && keyword in discoveredKeywords[category])
    {
        hideTooltip(); // just in case

        toggleKeywordForScry(keyword, category);

        if (AUTO_FILTER) {
            handleScry();
        }
    }
    // New - unlock it
    else {
        recordKeyword(keyword, category);
        let slot = document.getElementById(`${category}:${keyword}`);
        slot.classList.add('new'); // don't show it there yet
        hideTooltip(keyword);

        const source = getTooltipPosition(elem, category);
        await animateNewTokenToTray(keyword, category, source);

        slot.classList.remove('new');
        updateUnlockableKeywords();

        saveGame();
    }
}

async function toggleKeywordForScry(keyword, category) {
    const currentScryKeyword = scryState[category];
    //console.log(`Toggling keyword ${keyword} for scry in category ${category}. Current scry keyword: ${currentScryKeyword}`);

    // From scry slot to tray
    if (currentScryKeyword === keyword) {
        await moveKeywordFromScrySlot(keyword, category);
    }
    // To scry slot
    else {
        const updates = [moveKeywordToScrySlot(keyword, category)];
        if (currentScryKeyword) {
            updates.push(moveKeywordFromScrySlot(currentScryKeyword, category));
        }
        await Promise.all(updates);
    }

    updateNavButtons();
    //elem.scrollIntoView({ behavior: "smooth", block: "center" });
}

function addAllKeywordInputs()
{
    for (let category of allCategories)
    {
        let elem = document.querySelector(`#known-keywords .${category[1]}.list`);

        for (let i = 0; i < category[0].length; i++)
        {
            let keyword = category[0][i];
            if (!keyword) continue;

            let id = category[1] + ":" + keyword;
            let content = getKeywordInputContent(category[1], keyword);
            let remainingCountCheck = ''; //`<span class="count"></span><span class="check">&#10004;</span>`;
            
            elem.innerHTML += `<button id="${id}" class="empty" onclick="handleKeywordButton(this)">${content}
                            ${remainingCountCheck}</button>`;
        }
    }
}

function getKeywordInputContent(category, keyword) {
    let content;
    let title = displayNameLookup[keyword] || keyword;
    switch (category)
    {
        case 'character':
            content = `<img src="images/portrait_${keyword.toLowerCase()}.gif" />`;
            break;
        case 'room':
            const index = roomsInOrder.indexOf(keyword) + 1;
            content = `<img src="images/floortile${index}.gif" />`;
            break;
        default:
            content = `<span>${title}</span>`;
            break;
    }

    return content;
}

function getKeywordTokenButton(category, keyword) {
    const content = getKeywordInputContent(category, keyword);
    const button = document.createElement('button');
    button.id = `${category}:${keyword}`;
    button.className = `${category} token`;
    button.innerHTML = content;
    return button;
}

function getKeywordToken(category, keyword) {
    const content = getKeywordTokenButton(category, keyword);
    content.onclick = (event) => handleKeywordButton(event.currentTarget, event);
    const div = document.createElement('div');
    div.className = `slot ${category}`;
    div.appendChild(content);
    return div;
}

function handleKeywordButton(elem, event)
{
    event?.stopPropagation();
    if (elem.classList.contains('empty')) return;

    const [category, keyword] = elem.id.split(':');
    handleClickKeyword(keyword, category);
}

function handleScrySlotButton(elem)
{
    if (elem.classList.contains('empty')) return;

    const [category, keyword] = elem.dataset.selected.split(':');
    handleClickKeyword(keyword, category); // clears it
}

function updateDiscoveredCounts()
{
    /* // Skip for now
    for (let category of allCategories)
    {
        for (let keyword of category[0])
        {
            if (!keyword) continue;

            let results = getSearchResults([keyword]);
            let seenCount = 0;
            for (let sceneId of results)
            {
                if (sceneId in discoveredScenes) seenCount ++;
            }

            let id = category[1]+":"+keyword;
            let elem = document.getElementById(id);
            elem.querySelector(".count").textContent = `(${seenCount}/${results.length})`;

            let remaining = results.length - seenCount;
            elem.querySelector('.check').innerHTML = remaining ? remaining : '&#10004;';
        }
    }
    */
}

function updateUnlockableKeywords() {
    let unlockableElements = document.querySelectorAll(".unlockable");
    let keywordsInScene = new Set();
    let remainingNewKeywords = new Set();
    for (let elem of unlockableElements) {
        let keyword = elem.dataset.name;
        if (!keyword) continue;

        let category = getCategory(keyword);
        let recorded = keyword in discoveredKeywords[category];
        elem.classList.toggle("new", !recorded);

        // Attach onclicks here
        if (!recorded) {
            elem.onclick = () => handleClickKeyword(keyword, category, elem);
            elem.onmouseover = () => onHoverKeyword(elem, keyword, category, true);
            elem.onmouseout = () => onHoverKeyword(elem, keyword, category, false);
        }
        else {
            elem.onclick = null;
            elem.onmouseover = null;
            elem.onmouseout = null;
        }

        keywordsInScene.add(keyword);
        if (!recorded) remainingNewKeywords.add(keyword);
    }

    document.getElementById('new-keyword-count').textContent = keywordsInScene.size - remainingNewKeywords.size;
    document.getElementById('total-keyword-count').textContent = keywordsInScene.size;
    document.getElementById('new-keyword-hint').classList.toggle("complete", remainingNewKeywords.size == 0);
    document.getElementById('all-keywords-hint').classList.toggle("complete", remainingNewKeywords.size == 0);
}

function onHoverKeyword(elem, keyword, category, hovering) {
    // Add .hovering to every unlockable element with this keyword
    // This would be if we want to emphasize there's different ways to unlock something
    // let unlockableElements = document.querySelectorAll(`.unlockable[data-name="${keyword}"]`);
    // for (let elem of unlockableElements) {
    //     elem.classList.toggle("hovering", hovering);
    // }
    elem.classList.toggle("hovering", hovering);

    // Display the token for this keyword as a tooltip
    if (hovering) {
        addTooltip(elem, keyword, category);
    } else {
        hideTooltip(keyword);
    }
}

function addTooltip(elem, keyword, category) {
    const tooltip = document.getElementById("keyword-tooltip");

    const content = getKeywordInputContent(category, keyword);
    const tokenContent = `<div class="slot ${category}"><button class="${category} token">${content}</button></div>`;
    tooltip.innerHTML = tokenContent;
    
    // Store keyword and category data in the tooltip for accessibility
    tooltip.dataset.keyword = keyword;
    tooltip.dataset.category = category;
    
    tooltip.style.display = "block";
    const pos = getTooltipPosition(elem, category);
    tooltip.style.left = pos.x + 'px';
    tooltip.style.top = pos.y + 'px';
}

function hideTooltip(ifKeywordIs) {
    tooltip = document.getElementById("keyword-tooltip");
    if (!ifKeywordIs || tooltip.dataset.keyword === ifKeywordIs) {
        tooltip.style.display = "none";
    }
}

function getTooltipPosition(element, category) {
    // Check the slot size for this category as that will be the tooltip size
    const slot = document.querySelector(`#scry-slots .${category}.slot`);
    const slotRect = slot.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    let x, y;
    //Position on top of the element
    y = elementRect.top - slotRect.height + elementRect.height/3;
    x = elementRect.left + elementRect.width/2 - slotRect.width/2;
    if (category === 'room') {
        y = elementRect.top - slotRect.height + 10;
    }
    else if (element.classList.contains('peek')) {
        // Base it on the actual coordinates, since the peek element is expanded to full height
        const coordinates = COORDINATES.scenes[currentSceneId]?.keywords[element.dataset.name];
        if (coordinates) {
            y = elementRect.top + coordinates.top * scale - slotRect.height + 20;
        }
    }
    
    return { x, y };
}

async function animateToken(keyword, category, source, dest, additionalClass = '') {
    return new Promise((resolve) => {
        // Create a new flying token element
        const flyingTokenElem = document.createElement('div');
        flyingTokenElem.className = `flying-token ${additionalClass}`;
        
        // Create the token content
        const content = getKeywordInputContent(category, keyword);
        const tokenContent = `<div class="slot ${category}"><button class="${category} token">${content}</button></div>`;
        flyingTokenElem.innerHTML = tokenContent;
        
        // Position at the source coordinates
        flyingTokenElem.style.left = source.x + 'px';
        flyingTokenElem.style.top = source.y + 'px';
        
        // Add to the DOM
        document.body.appendChild(flyingTokenElem);
        
        // Force a reflow to ensure initial position is set before transition
        flyingTokenElem.offsetHeight;
        
        // Start the animation by setting the destination
        setTimeout(() => {
            flyingTokenElem.style.left = dest.x + 'px';
            flyingTokenElem.style.top = dest.y + 'px';
        }, 50);

        // Safety timeout
        setTimeout(() => {
            if (flyingTokenElem.parentNode) {
                console.warn(`Animation for ${keyword} did not complete in time, removing element.`);
                flyingTokenElem.remove();
                resolve();
            }
        }, 1000);
        
        // When animation completes, remove the element and resolve the promise
        flyingTokenElem.addEventListener('transitionend', () => {
            flyingTokenElem.remove();
            resolve();
        });
    });
}

function animateNewTokenToTray(keyword, category, source) {
    const dest = getTrayKeywordPosition(category, keyword);
    return animateToken(keyword, category, source, dest, 'to-tray');
}
        
function animateTokenToFromScrySlot(keyword, category, isSelecting) {
    const keywordPos = getTrayKeywordPosition(category, keyword);
    const scryPos = getScrySlotPosition(category);
    const source = isSelecting ? keywordPos : scryPos;
    const dest = isSelecting ? scryPos : keywordPos;
    return animateToken(keyword, category, source, dest);
}

function getTrayKeywordPosition(category, keyword) {
    const keywordToken = document.getElementById(`${category}:${keyword}`);
    const rect = keywordToken.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;

    // If the slot is offscreen, destination should be the top or bottom of the #known-keywords container
    const knownKeywordsContainer = document.getElementById('known-keywords');
    const containerRect = knownKeywordsContainer.getBoundingClientRect();
    if (y + rect.height < containerRect.top) {
        y = containerRect.top - rect.height - 10;
    }
    else if (y > containerRect.bottom) {
        y = containerRect.bottom + 10;
    }

    return { x, y };
}

function getScrySlotPosition(category) {
    const scrySlot = document.getElementById(`scry-${category}`);
    const scryRect = scrySlot.getBoundingClientRect();
    return {
        x: scryRect.left,
        y: scryRect.top,
    }
}

async function moveKeywordToScrySlot(keyword, category) {
    hideKeywordInTray(keyword, category);

    await animateTokenToFromScrySlot(keyword, category, true);

    // We expect the slot to be empty at this point
    const currentScryKeyword = scryState[category];
    if (currentScryKeyword) {
        //console.warn(`Scry slot for ${category} contains ${currentScryKeyword} when we wanted to add ${keyword}. Removing ${currentScryKeyword}.`);
        showKeywordInTray(currentScryKeyword, category);
    }

    showKeywordInSlot(keyword, category);
    scryState[category] = keyword;
}

async function moveKeywordFromScrySlot(keyword, category) {
    if (!scryState[category] || scryState[category] !== keyword) {
        // Ensure this is showing in the tray instead
        showKeywordInTray(keyword, category);
        return;
    }

    emptySlot(category);
    scryState[category] = null;
    updateNavButtons();

    await animateTokenToFromScrySlot(keyword, category, false);

    showKeywordInTray(keyword, category);
}

function showKeywordInSlot(keyword, category) {
    //console.log(`Showing ${category}:${keyword} in scry slot`);
    const scrySlotElem = document.getElementById(`scry-${category}`);
    scrySlotElem.innerHTML = getKeywordInputContent(category, keyword);
    scrySlotElem.dataset.selected = `${category}:${keyword}`;
    scrySlotElem.classList.remove('empty');
}

function emptySlot(category) {
    //console.log(`Emptying scry slot for ${category}`);
    const scrySlotElem = document.getElementById(`scry-${category}`);
    scrySlotElem.innerHTML = '';
    scrySlotElem.dataset.selected = '';
    scrySlotElem.classList.add('empty');
}

function showKeywordInTray(keyword, category) {
    //console.log(`Showing ${category}:${keyword} in tray`);
    const keywordElem = document.getElementById(`${category}:${keyword}`);
    keywordElem.classList.remove('selected');
}

function hideKeywordInTray(keyword, category) {
    //console.log(`Hiding ${category}:${keyword} in tray`);
    const keywordElem = document.getElementById(`${category}:${keyword}`);
    keywordElem.classList.add('selected');
}

function getSearchResults(keywords)
{
    let key = keywords.join();
    if (!(key in cachedSearchResults))
    {
        const results = [];
        for (let sceneId in scenes)
        {
            if (searchScene(scenes[sceneId], keywords))
            {
                results.push(sceneId);
            }
        }
        
        // Sort results by party number, room display order, then numerically
        results.sort((a, b) => {
            const aParts = a.split('.');
            const bParts = b.split('.');
            // Compare party numbers first
            if (aParts[0] !== bParts[0]) {
                return parseInt(aParts[0]) - parseInt(bParts[0]);
            }
            // Then check room display order
            if (aParts[1] !== bParts[1]) {
                const aRoomDisplayIndex = roomsInOrder.indexOf(ROOMS[aParts[1]]);
                const bRoomDisplayIndex = roomsInOrder.indexOf(ROOMS[bParts[1]]);
                return aRoomDisplayIndex - bRoomDisplayIndex;
            }
            // Finally compare the rest numerically
            return parseInt(aParts.slice(2).join('')) - parseInt(bParts.slice(2).join(''));
        });

        cachedSearchResults[key] = results;
    }
    return cachedSearchResults[key];
}

function searchScene(scene, keywords)
{
    for (let keyword of keywords)
    {
        let found = false;
        for (let tag of scene.tags)
        {
            if (tag == keyword)
            {
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

function updateNavButtons()
{
    document.getElementById("back-button").classList.toggle("disabled", historyIndex <= 0);
    document.getElementById("forward-button").classList.toggle("disabled", historyIndex >= history.length - 1);

    // It's possible to scry if at least one #scry-slots .token is not .empty
    const hasSelection = document.querySelectorAll('#scry-slots .token:not(.empty)').length;
    document.getElementById("clear-button").classList.toggle("disabled", !hasSelection);
    document.getElementById("scry-button").classList.toggle("disabled", !hasSelection);
    document.getElementById("scry-button").dataset.filledSlots = hasSelection;
}

function handleBackButton()
{
    restoreHistory(historyIndex - 1);

    // Remove empty entries (like the "no results" message)
    if (history[historyIndex + 1] && !history[historyIndex + 1].command)
    {
        history.splice(historyIndex + 1, 1);
        updateNavButtons();
    }
}

function handleForwardButton()
{
    restoreHistory(historyIndex + 1);
}

function handleClearButton() {
    resetScrySelection();
    //displayCleared();
}

function executeAndRecord(key, command)
{
    if (!command) return;

    command();
    recordHistory(key, command);
    saveGame();
}

function recordHistory(key, command)
{
    //console.log("record history:", key)
    if (history[historyIndex] && history[historyIndex].key == key)
    {
        //console.log("skipping duplicate");
        return;
    }

    history.splice(historyIndex + 1);
    
    // Remove empty entries (like the "no results" message)
    while (history[historyIndex] && !history[historyIndex].command)
    {
        history.splice(historyIndex);
    }

    history.push({ key: key, command: command });
    historyIndex = history.length - 1;

    updateNavButtons();
}

function restoreHistory(index)
{
    if (index >= 0 && index < history.length)
    {
        //console.log("restore history:", history[index].key, "at index", index, "of", history.length);
        
        historyIndex = index;
        updateNavButtons();

        if (history[index].command)
        {
            history[index].command();
        }
    }
}

function completeGame()
{
    const endScene = createCastleScene(END_TEXT, 'end');
    toggleTesterPopup(true);

    isEndgame = true;
    const epilogue = createEpilogueScene(EPILOGUE);
    scenes['epilogue'] = epilogue;

    executeAndRecord("end", displayScene.bind(this, "end", endScene, true, "intro"));
}

// Returns a list of divs each showing a peek at the scene
// isClickableMode=true means the peek can be clicked to unlock the keyword. False means this is a hint for an undiscovered scene.
function getPeeks(sceneId, keywords, sceneImg, isClickableMode = false)
{
    // Clickable mode: slightly larger than the saved coordinates
    // Hint mode: full height, less width
    const [peekWidth, peekHeight] = isClickableMode ? [26, bannerHeight] : [14, bannerHeight];
    const leftAdjustment = (coordinateWidth - peekWidth) / 2;
    const topAdjustment = (coordinateHeight - peekHeight) / 2;

    let peeks = '';

    const coordinatesByKeyword = COORDINATES.scenes[sceneId]?.keywords || [];
    for (let keyword of keywords) {
        const category = getCategory(keyword);

        const coordinates = coordinatesByKeyword[keyword];
        if (!coordinates) {
            //console.warn(`No coordinates for keyword ${keyword} in scene ${sceneId}`);
            continue;
        }

        const isClickablePeek = isClickableMode && category !== 'spell';
        const className = `peek ${isClickablePeek ? 'unlockable' : ''} ${category}`;

        let left = (coordinates.left + leftAdjustment) * scale;
        let top = (peekHeight >= bannerHeight ? 0 : coordinates.top + topAdjustment) * scale;
        let width = peekWidth * scale;
        let height = peekHeight * scale;

        // Clamp values
        left = Math.max(0, left);
        top = Math.max(0, top);
        width = Math.min(bannerWidth * scale - left, width);
        height = Math.min(bannerHeight * scale - top, height);

        // For the clickable/unlockable room peek, use the full width and height. This will be beneath the others.
        if (isClickablePeek && category === 'room') {
            left = 0;
            top = 0;
            width = bannerWidth * scale;
            height = bannerHeight * scale;
        }

        peeks += getPeek(keyword, sceneImg, className, scale, left, top, width, height);

        if (!isClickableMode) {
            // Add random peeks next to the keyword peek
            const randomPeeks = getRandomPeeksNextTo(left / scale, (left + width) / scale, sceneImg);
            peeks += randomPeeks;
        }
    }

    return peeks;
}

function getPeek(keyword, sceneImg, className, scale, left, top, width, height) {
    const image = `images/${sceneImg}.gif`;
    const peek = `<div class="${className}" data-name="${keyword}"
            style="width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px;
            background-image: url('${image}');
            background-size: ${bannerWidth * scale}px ${bannerHeight * scale}px;
            background-position: -${left}px -${top}px;
            "></div>`;
    return peek;
}

// Height is 32 * 4
// Try shrinking unseen hints to 26 * 4 = 104px

// Randomly adds narrow peeks to make hints more interesting
function getRandomPeeks(sceneImg) {
    const min = 6;
    const max = 8;
    const count = Math.floor(Math.random() * (max - min + 1)) + min;

    const scale = 4;
    const minWidth = 2;
    const maxWidth = 3;
    const minHeight = bannerHeight;
    const maxHeight = bannerHeight;

    let peeks = '';
    for (let i = 0; i < count; i++) {
        const width = (Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth) * scale;
        const height = (Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight) * scale;
        const left = Math.floor(Math.random() * (bannerWidth - width/scale)) * scale;
        const top = Math.floor(Math.random() * (bannerHeight - height/scale)) * scale;

        peeks += getPeek("", sceneImg, "peek", scale, left, top, width, height);
    }

    return peeks;
}

function getRandomPeeksNextTo(hintLeft, hintRight, sceneImg) {
    const min = 12; // per side
    const max = 15;

    const scale = 4;
    const minWidth = 1;
    const maxWidth = 3;
    const minHeight = 1;
    const maxHeight = 1;

    let peeks = '';

    const leftCount = Math.floor(Math.random() * (max - min + 1)) + min;
    const rightCount = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < leftCount; i++) {
        const width = (Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth) * scale;
        const height = (Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight) * scale;
        const left = (hintLeft * scale) - width;
        const top = Math.floor(Math.random() * (bannerHeight - height/scale)) * scale;

        peeks += getPeek("", sceneImg, "peek", scale, left, top, width, height);
    }
    for (let i = 0; i < rightCount; i++) {
        const width = (Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth) * scale;
        const height = (Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight) * scale;
        const left = hintRight * scale;
        const top = Math.floor(Math.random() * (bannerHeight - height/scale)) * scale;
        
        peeks += getPeek("", sceneImg, "peek", scale, left, top, width, height);
    }

    return peeks;
}

function getCategory(keyword) {
    for (let category of allCategories) {
        if (category[0].includes(keyword)) {
            return category[1];
        }
    }
}

function parseScenes()
{
    scenes = {};
    for (let sceneText of SCENES_TEXT.split("\n--- "))
    {
        let lineTexts = sceneText.split("\n");
        if (lineTexts.length <= 1) continue;

        let title = lineTexts.shift().trim();

        if (title in scenes)
        {
            //console.log("Duplicate title:", title);
            continue;
        }
        if (!title) {
            continue;
        }

        let partyId = title.split(".")[0];

        let tags = lineTexts.shift().trim().split(", ");
        if (tags[0] == "none") tags = [];
        for (let tag of tags) {
            if (!CHARACTERS.includes(tag) && !SPELLS.includes(tag) && !ROOMS.includes(tag)) {
                //console.log("Unknown tag:", tag);
            }
        }
        const scene = {
            id: title,
            displayTitle: '',
            lines: [],
            tags: tags,
            unlocks: {}, // everything mentioned, awkward overlap with tags at the moment
            party: partyId,
        };

        // Just get the room from the number eg 1.3.1 is room 3
        let roomIndex = title.split(".")[1];
        let room = ROOMS[roomIndex];
        if (room) {
            tags.push(room);
            scene.unlocks[room] = true;
            scene.displayTitle = `<span class="unlockable highlight room title" data-name="${room}">${displayNameLookup[room]}</span>`;
        }

        scenes[title] = parseSceneText(scene, lineTexts);
    }

    //console.log(scenes);
}

function createCastleScene(sceneText, id)
{
    const scene = {
        displayTitle: '<span class="room title">Castle</span>',
        lines: [],
        tags: [],
        unlocks: {},
        party: "1",
        id,
    }
    let lineTexts = sceneText.split("\n");
    return parseSceneText(scene, lineTexts);
}

function createEpilogueScene(sceneText)
{
    const scene = {
        displayTitle: "<span class='room title'>Lich's Chamber</span>",
        lines: [],
        tags: ['Caspian', 'Lich', 'Orb'],
        unlocks: {},
        party: "1",
    }
    let lineTexts = sceneText.split("\n");
    return parseSceneText(scene, lineTexts);
}

function parseSceneText(scene, lineTexts)
{
    for (let lineText of lineTexts)
    {
        if (!lineText.trim() || lineText.startsWith('//')) continue;

        let parts = lineText.split(": ");
        if (parts.length > 2) {
            //console.log("Malformed line:", lineText);
            continue;
        }

        let speaker;
        if (parts.length == 2) {
            speaker = parts[0].trim();
            lineText = parts[1];
            if (CHARACTERS.includes(speaker)) {
                scene.unlocks[speaker] = true;
            }
            else if (speaker === "Revenant") {
                scene.unlocks['Vane'] = true; // Vane is the Revenant
            }
        }
        
        // Note: use highlight class to highlight the words in the text
        // TODO clean up the logic here vs in displayScene

        // Characters are identifiable by their exact name
        for (let character of CHARACTERS) {
            const charactersClickableInText = false;
            let className = charactersClickableInText ? "unlockable highlight character" : '';
            let replaced = lineText.replaceAll(character, `<span class="${className}" data-name="${character}">${character}</span>`);
            
            if (replaced != lineText) {
                lineText = replaced;
                scene.unlocks[character] = true;
            }
        }

        // Rooms are identifiable by their titles
        for (let room of ROOMS) {
            if (room) {
                let title = displayNameLookup[room];
                let replaced = lineText.replaceAll(title, `<span class="unlockable highlight room" data-name="${room}">${title}</span>`);
                if (replaced != lineText) {
                    lineText = replaced;
                    scene.unlocks[room] = true;
                }
            }
        }

        // Spells appear as {spell name} when cast, [spell name] when mentioned.
        // The spell text might extend the canonical name eg Arcane Amulet = Amulet
        const spellRegex = /[\[\{](.*?)[\]\}]/g;
        for (let match of lineText.matchAll(spellRegex)) {
            const spellMatch = match[1];
            let spellName;
            for (let spell of SPELLS) {
                if (spellMatch.toLowerCase().includes(spell.toLowerCase())) {
                    spellName = spell;
                    break;
                }
            }
            if (spellName) {
                const casting = match[0].startsWith("{");
                const castingClass = casting ? "casting" : "";

                lineText = lineText.replace(match[0], `<span class="unlockable highlight spell ${castingClass}" data-name="${spellName}">${match[1]}</span>`);
                scene.unlocks[spellName] = true;

                // Sanity check - cast spells are in tags
                if (casting && !scene.tags.includes(spellName)) {
                    //console.log("Cast spell not in tags:", match[1], "in scene", scene.id);
                }
            }
            else {
                //console.log("Unknown spell:", match[1]);
            }
        }

        // Very special case for the second castle scene to make it easier to get Felicity
        if (scene.id === "intro2") {
            lineText = lineText.replaceAll(`In the portrait`, `In the <span class="unlockable highlight character" data-name="Felicity">portrait</span>`);
        }
        
        scene.lines.push({
            speaker: speaker,
            text: lineText.trim(),
        });
    }

    // Sanity check - all tags except the location should be mentioned (aka be in unlocks)
    for (let tag of scene.tags) {
        if (!(tag in scene.unlocks)) {
            //console.log("Tag not mentioned:", tag, "in scene", scene.id);
        }
    }

    return scene;
    
}

function saveGame() {
    if (autoSave) {
        const gameState = {
            discoveredScenes,
            discoveredKeywords,
            currentSceneId,
            isTutorial,
            isEndgame,
            playMusic,
            playSounds,
        };
        const stringified = JSON.stringify(gameState);
        localStorage.setItem(SAVE_KEY, stringified);
        //console.log("Game state saved:", gameState);
    }
}

function loadGame() {
    const savedState = localStorage.getItem(SAVE_KEY);
    if (!savedState) {
        return;
    }

    try {
        const gameState = JSON.parse(savedState);
        playMusic = gameState.playMusic ?? true;
        playSounds = gameState.playSounds ?? true;
        isTutorial = gameState.isTutorial ?? true;
        isEndgame = gameState.isEndgame ?? false;

        //console.log("Loading game state from localStorage:", savedState);

        const allDiscovered = Object.keys(gameState.discoveredScenes)
            .concat(...Object.values(gameState.discoveredKeywords).map(obj => Object.keys(obj))
        );
        unlockFromList(allDiscovered);

        return gameState.currentSceneId;
    } catch (error) {
        console.error("Failed to load game state:", error);
        return;
    }
}

function unlockFromList(listToUnlock)
{
    for (let category of allCategories)
    {
        for (let keyword of category[0])
        {
            if (!keyword) continue;
            if (listToUnlock && !listToUnlock.includes(keyword)) continue;
            recordKeyword(keyword, category[1]);
        }
    }
    for (let sceneId in scenes)
    {
        if (listToUnlock && !listToUnlock.includes(sceneId)) continue;
        discoveredScenes[sceneId] = true;
    }
    updateDiscoveredCounts();
}

function startMusic() {
    if (playMusic) {
        document.getElementById('background-music').play();
    }
}

async function preloadImages() {
    const preloader = document.getElementById('preloader');
    const ids = Object.keys(scenes).map(id => `scene${id.replaceAll('.', '-')}`);
    ids.concat(['sceneintro', 'sceneepilogue']);
    for (const id of ids) {
        preloader.src = `images/${id}.gif`;
        await new Promise(resolve => preloader.onload = resolve);
    }
}