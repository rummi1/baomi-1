const discoveredContainer = document.getElementById("discovered-container");
const documentTabArchive = document.getElementById("document-tab-archive");
const documentTabNotes = document.getElementById("document-tab-notes");
const documentTabSearch = document.getElementById("document-tab-search");
const documentTabSettings = document.getElementById("document-tab-settings");
const archiveCountToggle = document.getElementById("archive-count-toggle");
const archiveFiltersDetails = document.getElementById("archive-filters");
const archiveFilterInput = document.getElementById("archive-filter-input");
const archiveFilterClearButton = document.getElementById("archive-filter-clear-button");
const archiveFilterStatus = document.getElementById("archive-filter-status");
const archiveBookmarkFilterButtons = Array.from(document.querySelectorAll(".bookmark-filter-button"));
const archiveProgress = document.getElementById("archive-progress");
const notes = document.getElementById("notes");
const notesClearButton = document.getElementById("notes-clear-button");
const resultsContainer = document.getElementById("results-container");
const resultsSection = document.getElementById("results-section");
const clearButton = document.getElementById("clear-button");
const searchSection = document.getElementById("search-section");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const searchLimit = 3;
const bookmarkCount = 3;
const bookmarkFilterLabels = {
    0: "No bookmark",
    1: "Blue",
    2: "Red",
    3: "Green",
};

let db = [];
let byTerm = {};
let docsById = {};
let keyDocs = {};
let searchedTerms = new Set();
let discoveredNames = new Set();
let currentSearchQuery = "";
let currentView = "archive";
let openDocumentId = null;
let archiveFilterState = {
    textQuery: "",
    bookmarkColor: null,
    isExpanded: false,
};
const history = []; // { searchQuery: string; view: string; openDocumentId: string | null }
let historyIndex = -1;

function initDocuments() {
    readData();
    archiveCountToggle.checked = false;
    searchInput.value = "";
    searchInput.addEventListener("input", updateSearchControls);
    searchInput.addEventListener("keydown", onSearchInputKeydown);
    archiveFilterInput.addEventListener("input", onArchiveFilterInput);
    archiveFilterClearButton.addEventListener("click", onClearArchiveFilterText);
    archiveFiltersDetails.addEventListener("toggle", onArchiveFiltersToggle);
    archiveCountToggle.addEventListener("change", onToggleUndiscoveredCounts);
    for (const button of archiveBookmarkFilterButtons) {
        button.addEventListener("click", onClickArchiveBookmarkFilter);
    }
    notes.addEventListener("blur", onNotesBlur);
    updateSearchControls();

    const restored = restoreDocumentState();
    // Always discover the start document
    openDocument(keyDocs.start, true, false);
    closeDocument(true);
    if (!restored) {
        keyDocs.start.bookmarkColor = 1;
    }

    applyArchiveCountToggle();

    renderDocumentViews();
    updateHistoryButtons();
}

function onNotesBlur() {
    persistDocumentState();
}

function onClickSearch() {
    const query = searchInput.value.trim().toLowerCase();
    searchInput.value = query;
    currentSearchQuery = query;
    updateSearchControls();
    currentView = "search";
    openDocumentId = null;
    if (query) {
        searchedTerms.add(query);
    }

    renderDocumentViews();
    addToHistory();
    updateHistoryButtons();
    persistDocumentState();
}

function onSearchInputKeydown(event) {
    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();
    onClickSearch();
}

function onClearSearch() {
    searchInput.value = "";
    currentSearchQuery = "";
    updateSearchControls();
    currentView = "search";

    renderDocumentViews();
    addToHistory();
    updateHistoryButtons();
    persistDocumentState();
}

function onClearNotes() {
    notes.value = "";
    updateNotesControls();
    persistDocumentState();
}

function setDocumentView(view, fromHistory = false) {
    if (currentView === view && !fromHistory) {
        return;
    }

    currentView = view;
    renderDocumentViews();

    if (!fromHistory) {
        addToHistory();
    }
    updateHistoryButtons();
}

function renderDocumentViews() {
    searchSection.dataset.view = currentView;
    updateResultsSectionState();
    documentTabSearch.classList.toggle("active", currentView === "search");
    documentTabArchive.classList.toggle("active", currentView === "archive");
    documentTabNotes.classList.toggle("active", currentView === "notes");
    documentTabSettings.classList.toggle("active", currentView === "settings");

    const archiveDocs = getArchiveDocs();
    renderSearchResults(resultsContainer, getSearchResults());
    renderArchiveFilterControls();
    renderDocumentList(discoveredContainer, getFilteredArchiveDocs(archiveDocs), getArchiveEmptyMessage(archiveDocs));
    updateArchiveProgress();
}

function onArchiveFilterInput() {
    archiveFilterState.textQuery = archiveFilterInput.value;
    renderDocumentViews();
}

function onClearArchiveFilterText() {
    if (!archiveFilterState.textQuery) {
        return;
    }

    archiveFilterState.textQuery = "";
    renderDocumentViews();
    archiveFilterInput.focus();
}

function onArchiveFiltersToggle() {
    archiveFilterState.isExpanded = archiveFiltersDetails.open;

    if (!archiveFiltersDetails.open) {
        clearArchiveFilters();
    }
}

function clearArchiveFilters() {
    archiveFilterState.textQuery = "";
    archiveFilterState.bookmarkColor = null;
    renderDocumentViews();
}

function onClickArchiveBookmarkFilter(event) {
    const value = event.currentTarget.dataset.bookmarkColor;
    const colorValue = value === "" ? null : Number(value);
    if (archiveFilterState.bookmarkColor === colorValue) {
        archiveFilterState.bookmarkColor = null;
    }
    else {
        archiveFilterState.bookmarkColor = colorValue;
    }
    renderDocumentViews();
}

function onToggleUndiscoveredCounts() {
    applyArchiveCountToggle();
    persistDocumentState();
}

function applyArchiveCountToggle() {
    const showCounts = archiveCountToggle.checked;
    document.body.classList.toggle("show-undiscovered-counts", !!showCounts);
}


function renderArchiveFilterControls() {
    archiveFilterInput.value = archiveFilterState.textQuery;
    archiveFilterClearButton.disabled = !archiveFilterState.textQuery;

    if (archiveFiltersDetails.open !== archiveFilterState.isExpanded) {
        archiveFiltersDetails.open = archiveFilterState.isExpanded;
    }

    for (const button of archiveBookmarkFilterButtons) {
        const value = button.dataset.bookmarkColor;
        const isActive = Number(value) === archiveFilterState.bookmarkColor;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    }
}

function renderSearchResults(container, docs) {
    container.innerHTML = "";

    for (let index = 0; index < searchLimit; index++) {
        const doc = docs[index] || null;
        container.appendChild(createSearchResultElement(doc));
    }
}

function renderDocumentList(container, docs, emptyMessage) {
    container.innerHTML = "";

    if (!docs.length) {
        const emptyState = createElement(container, "document-view-empty");
        emptyState.textContent = emptyMessage;
        return;
    }

    for (const doc of docs) {
        const element = doc.id === openDocumentId
            ? createDocumentElement(doc)
            : createItemElement(doc);
        container.appendChild(element);
    }
}

function getSearchResults() {
    return getVisibleSearchResultDocs(currentSearchQuery);
}

function getVisibleSearchResultDocs(query) {
    return (byTerm[query] ?? [])
        .filter(shouldShowSearchResult)
        .sort(compareDocumentsByYear)
        .slice(0, searchLimit);
}

function getArchiveDocs() {
    return [
        ...db.filter(doc => doc.discovered),
        ...getDiscoveredKeyDocs(),
    ].sort(compareDocumentsByYear);
}

function compareDocumentsByYear(left, right) {
    const leftYear = left.year ?? Number.POSITIVE_INFINITY;
    const rightYear = right.year ?? Number.POSITIVE_INFINITY;

    return leftYear - rightYear
        || right.title.localeCompare(left.title) // Reverse alphabetical, a hack for key docs
        || left.id - right.id;
}

function getFilteredArchiveDocs(docs = getArchiveDocs()) {
    const textQuery = normalizeArchiveFilterValue(archiveFilterState.textQuery);
    return docs.filter(doc => {
        if (archiveFilterState.bookmarkColor !== null && doc.bookmarkColor !== archiveFilterState.bookmarkColor) {
            return false;
        }

        if (textQuery && !doc.archiveFilterText.includes(textQuery)) {
            return false;
        }

        return true;
    });
}

function getArchiveEmptyMessage(archiveDocs) {
    if (!archiveDocs.length) {
        return "No archived documents yet.";
    }

    if (hasActiveArchiveFilters()) {
        return "No archived documents match the current filters.";
    }

    return "No archived documents yet.";
}

function hasActiveArchiveFilters() {
    return Boolean(archiveFilterState.textQuery.trim()) || archiveFilterState.bookmarkColor !== null;
}

function normalizeArchiveFilterValue(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function getDiscoveredKeyDocs() {
    return Object.values(keyDocs).filter(doc => doc.discovered);
}

function updateArchiveProgress() {
    if (!archiveProgress) {
        return;
    }

    const discoveredDocumentCount = getArchiveDocs().length;
    const totalDocumentCount = db.length + getDiscoveredKeyDocs().length;
    archiveProgress.textContent = `( ${discoveredDocumentCount}/${totalDocumentCount} )`;
}

function openDocument(doc, fromHistory = false, shouldScroll = true) {
    markAsDiscovered(doc);
    openDocumentId = doc.id;
    renderDocumentViews();

    if (shouldScroll) {
        scrollOpenDocumentIntoView();
    }

    if (!fromHistory) {
        addToHistory();
    }
    updateHistoryButtons();
    persistDocumentState();
}

function onClickTerm(term) {
    searchInput.value = term;
    updateSearchControls();
    onClickSearch();
}

function updateSearchControls() {
    const hasQuery = Boolean(searchInput.value.trim());
    searchButton.disabled = !hasQuery;
    clearButton.disabled = !hasQuery;
    updateResultsSectionState();
}

function updateResultsSectionState() {
    if (!resultsSection) {
        return;
    }

    resultsSection.dataset.state = getResultsSectionState();
}

function getResultsSectionState() {
    const inputQuery = searchInput.value.trim().toLowerCase();
    if (!inputQuery) {
        return "empty";
    }

    if (inputQuery !== currentSearchQuery) {
        return "new-text";
    }

    return getSearchResults().length ? "searched-results" : "searched-no-results";
}

function closeDocument(fromHistory = false) {
    openDocumentId = null;
    renderDocumentViews();

    if (!fromHistory) {
        addToHistory();
    }
    updateHistoryButtons();
    persistDocumentState();
}

function addToHistory() {
    const entry = {
        searchQuery: currentSearchQuery,
        view: currentView,
        openDocumentId,
    };

    if (historyIndex < history.length - 1) {
        history.splice(historyIndex + 1);
    }

    const lastEntry = history[history.length - 1];
    if (
        lastEntry
        && lastEntry.searchQuery === entry.searchQuery
        && lastEntry.view === entry.view
        && lastEntry.openDocumentId === entry.openDocumentId
    ) {
        return;
    }

    history.push(entry);
    historyIndex = history.length - 1;
}

function populateFromHistory(index) {
    const entry = history[index];
    if (!entry) {
        return;
    }

    currentSearchQuery = entry.searchQuery || "";
    currentView = entry.view || "archive";
    searchInput.value = currentSearchQuery;
    updateSearchControls();

    if (currentSearchQuery) {
        searchedTerms.add(currentSearchQuery);
    }

    const doc = entry.openDocumentId ? docsById[entry.openDocumentId] : null;
    if (doc) {
        openDocument(doc, true);
    }
    else {
        closeDocument(true);
    }
}

function goToHistory(dir) {
    const newIndex = historyIndex + dir;
    if (newIndex < 0 || newIndex >= history.length) {
        return;
    }

    historyIndex = newIndex;
    populateFromHistory(historyIndex);
}

function updateHistoryButtons() {
    document.getElementById("history-back").disabled = historyIndex <= 0;
    document.getElementById("history-forward").disabled = historyIndex >= history.length - 1;
}

function createItemElement(doc) {
    const element = createElement(null, "doc-item scroll-container");
    element.dataset.id = doc.id;
    if (!doc.discovered) {
        element.classList.add("new");
    }

    const scrollTopElem = createScrollElement(element, "scroll-top");
    const scrollBottomElem = createScrollElement(element, "scroll-bottom");

    const ribbon = createElement(element, "ribbon");
    const label = createElement(element, "label");

    label.innerHTML = renderDocTitle(doc.title);
    bindSearchableElements(label, searchedTerms, currentSearchQuery, onClickTerm, (term) => doesSearchTermLeadToUndiscovered(doc, term));
    appendBookmarkRibbon(element, doc);
    appendReachableDocumentBadge(element, doc);
    
    element.addEventListener("click", () => openDocument(doc));
    return element;
}

function createSearchResultElement(doc) {
    const element = createElement(null, "search-result-slot");

    if (doc) {
        element.dataset.id = doc.id;
    }

    if (!doc) {
        element.classList.add("empty");
        return element;
    }

    if (doc.id === openDocumentId) {
        element.classList.add("expanded");
        element.appendChild(createDocumentElement(doc));
    }
    else {
        element.appendChild(createItemElement(doc));
    }

    return element;
}

function createDocumentElement(doc) {
    const container = createElement(null, "document-container");
    container.dataset.id = doc.id;

    const scrollContainer = createElement(container, "scroll-container");
    const label = createElement(scrollContainer, "label");
    label.innerHTML = renderDocTitle(doc.title);
    label.addEventListener("click", event => {
        event.stopPropagation();
        closeDocument();
    });
    bindSearchableElements(label, searchedTerms, currentSearchQuery, onClickTerm, (term) => doesSearchTermLeadToUndiscovered(doc, term));
    appendBookmarkRibbon(scrollContainer, doc);
    appendReachableDocumentBadge(container, doc);

    const scrollTop = createScrollElement(scrollContainer, "scroll-top");
    scrollTop.addEventListener("click", event => {
        event.stopPropagation();
        closeDocument();
    });

    const page = createElement(scrollContainer, "page");
    page.innerHTML = renderDocContent(doc.content);
    bindSearchableElements(page, searchedTerms, currentSearchQuery, onClickTerm, (term) => doesSearchTermLeadToUndiscovered(doc, term));

    const scrollBottom = createScrollElement(scrollContainer, "scroll-bottom");
    scrollBottom.addEventListener("click", event => {
        event.stopPropagation();
        closeDocument();
    });

    return container;
}

function scrollOpenDocumentIntoView() {
    const activeView = currentView === "search" ? resultsContainer : discoveredContainer;
    const openElement = currentView === "search"
        ? activeView.querySelector(`.search-result-slot[data-id="${openDocumentId}"]`)
        : activeView.querySelector(`.document-container[data-id="${openDocumentId}"]`);
    const scrollViewport = activeView.closest(".document-view");
    if (!openElement || !scrollViewport) {
        return;
    }

    requestAnimationFrame(() => {
        const viewportRect = scrollViewport.getBoundingClientRect();
        const documentRect = openElement.getBoundingClientRect();
        const topOffset = documentRect.top - viewportRect.top;
        const bottomOffset = documentRect.bottom - viewportRect.bottom;
        let nextScrollTop = scrollViewport.scrollTop;

        if (documentRect.height <= viewportRect.height) {
            if (topOffset < 0) {
                nextScrollTop += topOffset;
            }
            else if (bottomOffset > 0) {
                nextScrollTop += bottomOffset;
            }
        }
        else {
            nextScrollTop += topOffset;
        }

        if (nextScrollTop === scrollViewport.scrollTop) {
            return;
        }

        scrollViewport.scrollTo({
            top: Math.max(0, nextScrollTop),
            behavior: "smooth",
        });
    });
}

function createScrollElement(parent, classNames = "") {
    const element = createElement(parent, "scroll " + classNames);
    createElement(element, "scroll-end scroll-left");
    createElement(element, "scroll-end scroll-right");
    return element;
}

function appendBookmarkRibbon(parent, doc) {
    const ribbonContainer = createElement(parent, "bookmark-ribbon-container");
    ribbonContainer.addEventListener("click", event => {
        event.stopPropagation();
    });
    const ribbon = createElement(ribbonContainer, "bookmark-ribbon", "button");
    ribbon.type = "button";
    updateBookmarkRibbon(ribbon, doc.bookmarkColor);
    ribbon.addEventListener("click", event => {
        event.stopPropagation();
        cycleBookmarkColor(doc);
        renderDocumentViews();
        persistDocumentState();
    });
}

function cycleBookmarkColor(doc) {
    const nextIndex = (doc.bookmarkColor + 1) % (bookmarkCount + 1);
    doc.bookmarkColor = nextIndex;
}

function updateBookmarkRibbon(ribbon, bookmarkColor) {
    ribbon.dataset.bookmarkColor = bookmarkColor;
}

function appendReachableDocumentBadge(parent, doc) {
    const badge = createElement(parent, "scroll-count-badge");
    badge.addEventListener("mouseenter", () => {
        parent.classList.add("show-new-searchables");
    });
    badge.addEventListener("mouseleave", () => {
        parent.classList.remove("show-new-searchables");
    });

    let reachableDocumentCount = getUndiscoveredReachableDocumentCount(doc);
    if (!reachableDocumentCount) {
        reachableDocumentCount = '✓';
        badge.classList.add("complete");
    }

    badge.textContent = String(reachableDocumentCount);
}

function getUndiscoveredReachableDocumentCount(doc) {
    if (!doc.reachableDocumentIds?.size) {
        return 0;
    }

    let count = 0;
    for (const docId of doc.reachableDocumentIds) {
        const reachableDoc = docsById[docId];
        if (reachableDoc && !reachableDoc.discovered && shouldShowSearchResult(reachableDoc)) {
            count += 1;
        }
    }

    return count;
}

function doesSearchTermLeadToUndiscovered(doc, term) {
    const reachableDocumentIds = doc.reachableDocumentIdsByTerm?.get(term);
    if (!reachableDocumentIds?.size) {
        return false;
    }

    for (const docId of reachableDocumentIds) {
        const reachableDoc = docsById[docId];
        if (reachableDoc && !reachableDoc.discovered && shouldShowSearchResult(reachableDoc)) {
            return true;
        }
    }

    return false;
}

function markAsDiscovered(doc) {
    doc.discovered = true;

    const previousDiscoveredNameCount = discoveredNames.size;
    const mentionedNames = collectDocMentionedNames(doc);
    for (const name of mentionedNames) {
        discoveredNames.add(name);
    }

    if (discoveredNames.size !== previousDiscoveredNameCount) {
        refreshDiscoveredNameInputs?.();
    }

    persistDocumentState();
}

function shouldShowSearchResult(doc) {
    return !doc.isKeyDoc || doc.discovered;
}

function readData() {
    discoveredNames = new Set();
    keyDocs = Object.fromEntries(Object.entries(obsidian_key_docs).map(([key, doc]) => [key, createDocumentRecord(doc, true)]));

    db = obsidian_docs.map(doc => createDocumentRecord(doc, false));

    docsById = {};
    for (const doc of [...Object.values(keyDocs), ...db]) {
        docsById[doc.id] = doc;
    }

    byTerm = {};
    for (const doc of [...db, ...Object.values(keyDocs)]) {
        for (const term of doc.searchTerms) {
            addUniqueToDict(byTerm, term, doc);
        }
    }

    initializeReachableDocumentIds();
    logDocumentSearchReachability();
}

function logDocumentSearchReachability() {
    const allDocs = Object.values(docsById);
    const searchableDocs = allDocs.filter(shouldShowSearchResult);
    const reachableDocumentIds = new Set();

    for (const term of Object.keys(byTerm)) {
        for (const doc of getVisibleSearchResultDocs(term)) {
            reachableDocumentIds.add(doc.id);
        }
    }

    const unreachableDocs = searchableDocs.filter(doc => !reachableDocumentIds.has(doc.id));
    const hiddenDocCount = allDocs.length - searchableDocs.length;

    if (unreachableDocs.length) {
        console.warn("[documents] Search reachability check failed", {
            searchableDocumentCount: searchableDocs.length,
            hiddenDocumentCount: hiddenDocCount,
            unreachableDocuments: unreachableDocs.map(doc => ({
                id: doc.id,
                title: doc.title,
                searchTerms: [...doc.searchTerms],
            })),
        });
        return;
    }

    console.info("[documents] Search reachability check passed", {
        searchableDocumentCount: searchableDocs.length,
        hiddenDocumentCount: hiddenDocCount,
    });
}

function initializeReachableDocumentIds() {
    for (const doc of Object.values(docsById)) {
        doc.reachableDocumentIdsByTerm = collectReachableDocumentIdsByTerm(doc);
        doc.reachableDocumentIds = collectReachableDocumentIds(doc);
    }
}

function collectReachableDocumentIds(doc) {
    const reachableDocumentIds = new Set();

    for (const perTermDocumentIds of doc.reachableDocumentIdsByTerm.values()) {
        for (const docId of perTermDocumentIds) {
            reachableDocumentIds.add(docId);
        }
    }

    return reachableDocumentIds;
}

function collectReachableDocumentIdsByTerm(doc) {
    const reachableDocumentIdsByTerm = new Map();

    for (const term of doc.countTerms) {
        const reachableDocumentIds = new Set();
        const matches = getVisibleSearchResultDocs(term);
        for (const matchedDoc of matches) {
            if (matchedDoc.id !== doc.id) {
                reachableDocumentIds.add(matchedDoc.id);
            }
        }

        if (reachableDocumentIds.size) {
            reachableDocumentIdsByTerm.set(term, reachableDocumentIds);
        }
    }

    return reachableDocumentIdsByTerm;
}

function createDocumentRecord(doc, isKeyDoc) {
    return {
        ...doc,
        isKeyDoc,
        discovered: false,
        bookmarkColor: 0,
        archiveFilterText: normalizeArchiveFilterValue(flattenDocText(doc)),
        countTerms: collectDocCountTokens(doc),
        reachableDocumentIds: new Set(),
        reachableDocumentIdsByTerm: new Map(),
        searchTerms: collectDocSearchTokens(doc),
    };
}

function addUniqueToDict(dict, key, value) {
    const list = dict[key] || [];
    if (!list.includes(value)) {
        list.push(value);
    }
    dict[key] = list;
}

function debugDiscoverAllDocuments() {
    for (const doc of db) {
        markAsDiscovered(doc);
    }
    renderDocumentViews();
}

function debugHowToFind(title) {
    const targetDoc = Object.values(docsById).find(doc => doc.title.includes(title));
    if (!targetDoc) {
        console.warn("Document not found with title", title);
        return;
    }
    const terms = [];
    for (const term of Object.keys(byTerm)) {
        for (const doc of getVisibleSearchResultDocs(term)) {
            if (doc.id === targetDoc.id) {
                terms.push(term);
                break;
            }
        }
    }
    console.log(`To find "${targetDoc.title}", search for:`, terms);
}

function getDocumentSaveData() {
    const bookmarkColors = {};

    for (const doc of Object.values(docsById)) {
        if (doc.bookmarkColor) {
            bookmarkColors[doc.id] = doc.bookmarkColor;
        }
    }

    return {
        discoveredIds: Object.values(docsById)
            .filter(doc => doc.discovered)
            .map(doc => doc.id),
        searchedTerms: [...searchedTerms],
        bookmarkColors,
        showUndiscoveredCounts: archiveCountToggle.checked,
        notes: notes.value,
    };
}

function persistDocumentState() {
    writeTrevosaDataSection("documents", getDocumentSaveData());
}

function restoreDocumentState() {
    const savedState = readTrevosaDataSection?.("documents");
    if (!savedState) {
        return false;
    }

    try {
        const discoveredIds = new Set(Array.isArray(savedState.discoveredIds)
            ? savedState.discoveredIds
            : []);
        const savedBookmarks = savedState.bookmarkColors && typeof savedState.bookmarkColors === "object"
            ? savedState.bookmarkColors
            : {};
        const savedSearchTerms = Array.isArray(savedState.searchedTerms)
            ? savedState.searchedTerms.filter(term => typeof term === "string" && term)
            : [];
        const savedShowUndiscoveredCounts = Boolean(savedState.showUndiscoveredCounts);

        searchedTerms = new Set(savedSearchTerms);
        history.length = 0;
        archiveCountToggle.checked = savedShowUndiscoveredCounts;

        for (const docId of discoveredIds) {
            const doc = docsById[docId];
            if (!doc) {
                continue;
            }

            doc.discovered = true;
            for (const name of collectDocMentionedNames(doc)) {
                discoveredNames.add(name);
            }
            if (savedBookmarks[docId]) {
                doc.bookmarkColor = savedBookmarks[docId];
            }
        }

        notes.value = typeof savedState.notes === "string" ? savedState.notes : "";

        updateSearchControls();
        return true;
    }
    catch {
        return false;
    }
}