const NAME_CLASS = "name";
const SEARCHABLE_CLASS = "searchable";
const TERM_CLASS = "term";
const DECORATED_TERM_MARKUP = `<span class="${TERM_CLASS} ${SEARCHABLE_CLASS}">`;
const SEARCHABLE_SELECTOR = `.${SEARCHABLE_CLASS}`;
const TERM_MARKUP_SPLIT_PATTERN = new RegExp(`(${escapeRegExp(DECORATED_TERM_MARKUP)}.*?<\\/span>)`, "g");

const knownNames = collectKnownNames();
const knownNamePattern = createNamePattern(knownNames);
const discoverableNames = collectDiscoverableNames();

function collectKnownNames() {
    const names = new Set();

    for (const familyName of families) {
        if (typeof familyName === "string" && familyName) {
            names.add(familyName);
        }
    }

    for (const member of family_members_data) {
        if (typeof member?.name === "string" && member.name) {
            names.add(member.name);
        }
    }

    return Array.from(names).sort((left, right) => right.length - left.length || left.localeCompare(right));
}

function createNamePattern(names) {
    if (!names.length) {
        return null;
    }

    return new RegExp(`(?<![\\p{L}\\p{M}])(?:${names.map(escapeRegExp).join("|")})(?![\\p{L}\\p{M}])`, "gu");
}

function collectDiscoverableNames() {
    const names = new Set();

    for (const member of family_members_data) {
        const name = member?.name?.trim().toLowerCase();
        if (name) {
            names.add(name);
        }
    }

    return names;
}

function renderDocTitle(title, splitHyphenatedTerms = true, decorateSearchables = false) {
    return renderInlineMarkup(title, splitHyphenatedTerms, decorateSearchables);
}

function renderDocContent(content, splitHyphenatedTerms = true) {
    const escapedBlocks = renderInlineMarkup(content, splitHyphenatedTerms);

    return escapedBlocks
        .split("\n\n")
        .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
        .join("\n");
}

function renderInlineMarkup(content, splitHyphenatedTerms = true, decorateSearchables = true) {
    const replacedTerms = content.replace(/\[\[([^\]]+)\]\]/g, (match, englishTerm) => {
        let translatedTerm = obsidian_terms[englishTerm];
        if (!translatedTerm) {
            console.warn(`Missing translation for term: ${englishTerm}`);
            translatedTerm = `*${englishTerm}`;
        }
        return decorateSearchables
            ? `${DECORATED_TERM_MARKUP}${escapeHtml(translatedTerm)}</span>`
            : escapeHtml(translatedTerm);
    });

    const container = createScratchContainer();
    container.innerHTML = splitAroundTermMarkup(replacedTerms).map((block) => {
        if (decorateSearchables && block.startsWith(DECORATED_TERM_MARKUP)) {
            return block;
        }

        return escapeHtml(block);
    }).join("");

    if (decorateSearchables) {
        decorateRenderedContent(container, splitHyphenatedTerms);
    }

    return container.innerHTML;
}

function decorateRenderedContent(container, splitHyphenatedTerms = false) {
    wrapNameTextNodes(container);

    if (splitHyphenatedTerms) {
        splitHyphenatedTermElements(container);
    }
}

function bindSearchableElements(container, searchedTerms, currentSearchQuery, onClickSearchable, checkLeadsToUndiscovered) {
    const searchableElements = container.querySelectorAll(SEARCHABLE_SELECTOR);
    for (const searchableElement of searchableElements) {
        const term = searchableElement.textContent.toLowerCase();
        const searchableTokens = getSearchableTokens(searchableElement, term);
        const isKnown = searchedTerms.has(term);
        const leadsToUndiscovered = !!checkLeadsToUndiscovered(term, searchableTokens);
        searchableElement.addEventListener("click", (event) => {
            event.stopPropagation();
            onClickSearchable(term);
        });
        searchableElement.classList.toggle("new", !isKnown);
        searchableElement.classList.toggle("searched", Boolean(currentSearchQuery) && searchableTokens.has(currentSearchQuery));
        searchableElement.classList.toggle("leadsToUndiscovered", leadsToUndiscovered);
    }
}

function collectDocSearchTokens(doc) {
    const container = createScratchContainer();
    container.innerHTML = `${renderDocTitle(doc.title, false, true)} ${renderDocContent(doc.content, false)}`;
    return collectSearchTokensFromContainer(container);
}

function collectDocCountTokens(doc) {
    const container = createScratchContainer();
    container.innerHTML = `${renderDocTitle(doc.title, false, true)} ${renderDocContent(doc.content, false)}`;
    return collectCountTokensFromContainer(container);
}

function collectDocMentionedNames(doc) {
    const container = createScratchContainer();
    container.innerHTML = `${renderDocTitle(doc.title, false, true)} ${renderDocContent(doc.content, false)}`;
    return collectMentionedNamesFromContainer(container);
}

function flattenDocText(doc) {
    return [doc.title, doc.content]
        .map((content) => flattenRenderedText(content, false))
        .join(" ")
        .trim();
}

function flattenRenderedText(content, splitHyphenatedTerms = true) {
    const container = createScratchContainer();
    container.innerHTML = renderInlineMarkup(content, splitHyphenatedTerms, false);
    return container.textContent || "";
}

function collectSearchTokensFromContainer(container) {
    const terms = new Set();

    const searchableElements = container.querySelectorAll(SEARCHABLE_SELECTOR);
    for (const searchableElement of searchableElements) {
        const sourceTerm = searchableElement.dataset.searchText || searchableElement.textContent;
        for (const token of splitSearchTokens(sourceTerm)) {
            terms.add(token);
        }
    }

    return terms;
}

function collectCountTokensFromContainer(container) {
    const terms = new Set();

    const searchableElements = container.querySelectorAll(SEARCHABLE_SELECTOR);
    for (const searchableElement of searchableElements) {
        const sourceTerm = searchableElement.dataset.searchText || searchableElement.textContent;
        for (const token of splitSearchTokens(sourceTerm, false)) {
            terms.add(token);
        }
    }

    return terms;
}

function collectMentionedNamesFromContainer(container) {
    const names = new Set();

    const nameElements = container.querySelectorAll(`.${NAME_CLASS}`);
    for (const nameElement of nameElements) {
        const name = nameElement.textContent.trim().toLowerCase();
        if (name && discoverableNames.has(name)) {
            names.add(name);
        }
    }

    return names;
}

function splitSearchTokens(term, includeMultipartTerm = true) {
    const normalizedTerm = term.trim().toLowerCase();
    const tokens = new Set();

    if (!normalizedTerm) {
        return tokens;
    }

    if (!normalizedTerm.includes("-")) {
        tokens.add(normalizedTerm);
        return tokens;
    }

    if (includeMultipartTerm) {
        tokens.add(normalizedTerm);
    }

    for (const part of normalizedTerm.split("-")) {
        if (part) {
            tokens.add(part);
        }
    }

    return tokens;
}

function wrapNameTextNodes(container) {
    if (!knownNamePattern) {
        return;
    }

    const textNodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode(textNode) {
            if (!textNode.textContent?.trim()) {
                return NodeFilter.FILTER_REJECT;
            }

            const parent = textNode.parentElement;
            if (!parent || parent.closest(SEARCHABLE_SELECTOR)) {
                return NodeFilter.FILTER_REJECT;
            }

            knownNamePattern.lastIndex = 0;
            return knownNamePattern.test(textNode.textContent)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;
        }
    });

    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        textNodes.push(node);
    }

    for (const textNode of textNodes) {
        replaceNameMatches(textNode);
    }
}

function replaceNameMatches(textNode) {
    const content = textNode.textContent;

    if (!content) {
        return;
    }

    knownNamePattern.lastIndex = 0;
    const matches = Array.from(content.matchAll(knownNamePattern));

    if (!matches.length) {
        return;
    }

    const fragment = document.createDocumentFragment();
    let currentIndex = 0;

    for (const match of matches) {
        const matchIndex = match.index ?? 0;
        const matchedName = match[0];

        if (matchIndex > currentIndex) {
            fragment.appendChild(document.createTextNode(content.slice(currentIndex, matchIndex)));
        }

        const nameElement = document.createElement("span");
        nameElement.className = `${NAME_CLASS} ${SEARCHABLE_CLASS}`;
        nameElement.textContent = matchedName;
        setSearchableSource(nameElement, matchedName);
        fragment.appendChild(nameElement);

        currentIndex = matchIndex + matchedName.length;
    }

    if (currentIndex < content.length) {
        fragment.appendChild(document.createTextNode(content.slice(currentIndex)));
    }

    textNode.replaceWith(fragment);
}

function splitHyphenatedTermElements(container) {
    const termElements = container.querySelectorAll(`.${TERM_CLASS}`);

    for (const termElement of termElements) {
        const term = termElement.textContent;
        if (!term.includes("-")) {
            setSearchableSource(termElement, term);
            continue;
        }

        const fragment = document.createDocumentFragment();
        const parts = term.split("-");

        for (let index = 0; index < parts.length; index += 1) {
            if (index > 0) {
                fragment.appendChild(document.createTextNode("-"));
            }

            const partElement = document.createElement("span");
            partElement.className = termElement.className;
            partElement.textContent = parts[index];
            setSearchableSource(partElement, term);
            fragment.appendChild(partElement);
        }

        termElement.replaceWith(fragment);
    }
}

function getSearchableTokens(element, fallbackTerm) {
    const sourceTerm = element.dataset.searchText || fallbackTerm;
    setSearchableSource(element, sourceTerm);
    return splitSearchTokens(sourceTerm);
}

function setSearchableSource(element, term) {
    element.dataset.searchText = term.toLowerCase();
}

function splitAroundTermMarkup(content) {
    return content.split(TERM_MARKUP_SPLIT_PATTERN).filter(Boolean);
}

function createScratchContainer() {
    return document.createElement("div");
}

function escapeHtml(content) {
    return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeRegExp(content) {
    return content.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
