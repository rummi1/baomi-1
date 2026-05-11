function initSettings() {
    document.getElementById("music-toggle").checked = playMusic;
    document.getElementById("save-toggle").checked = autoSave;
}

function toggleSettingsPopup(force) {
    document.getElementById("popup-backdrop").classList.toggle("hidden", force);
    document.getElementById("settings").classList.toggle("hidden", force);
    document.getElementById("tester").classList.add("hidden");
}

function toggleMusic() {
    const toggleElem = document.getElementById("music-toggle");
    toggleElem.checked = !toggleElem.checked;
    playMusic = toggleElem.checked;
    const music = document.getElementById("background-music");
    if (playMusic) {
        music.play();
    }
    else {
        music.pause();
    }
    saveGame(); // save the music setting
}

function toggleSound() {
    const toggleElem = document.getElementById("sound-toggle");
    toggleElem.checked = !toggleElem.checked;
    playSounds = toggleElem.checked;
    saveGame(); // save the sound setting
}

function toggleSave() {
    const toggleElem = document.getElementById("save-toggle");
    toggleElem.checked = !toggleElem.checked;
    autoSave = toggleElem.checked;
    if (!autoSave) {
        clearSave();
    }
}

function clearSave() {
    delete localStorage[SAVE_KEY];
    delete localStorage[TESTER_SAVE_KEY];
}

let hint;
function showHint() {
    let status;
    if (!hint) {
        hint = getHint();
        if (hint) {
            status = displayHint(hint);
        }
    }
    else {
        status = advanceHint();
    }
    document.getElementById("hint-button").innerText = {
        'complete': "Hide hint",
        'more': "Reveal more",
        'reset': "Reveal a hint",
    }[status];
}

function checkClearHint(sceneId) {
    if (hint?.sceneId === sceneId) {
        const hintBox = document.getElementById("hint-box");
        hintBox.innerHTML = ''; // Clear previous hints
        hint = undefined;
        document.getElementById("hint-button").innerText = "Reveal hint";
    }
}

// Hint strategy
// For any given room that has yet to be unlocked, we can calculate (or note) the best way to unlock it.
// Then we can start revealing what keywords to use.
const hintList = [
    { sceneId: '3.2.2', keywords: ['Strength']},
    { sceneId: '3.2.1', keywords: ['Fireball', 'Zil']},
    { sceneId: '3.1', keywords: ['Imbue']},
    { sceneId: 'intro2', message: 'Click Record Fates to report back to the King.', isAvailable: () => isTutorial },
    { sceneId: '2.1', keywords: ['Felicity', 'Entrance']},
    { sceneId: '2.8', keywords: ['Protect', 'Wren']},
    { sceneId: '3.6', keywords: ['Lake', 'Brammek']},
    { sceneId: '3.5.1', keywords: ['Shrine', 'Smite']},
    // From here, the next steps are:
    // checking party 1,
    // using Light to get Spider's Cavern,
    // or guessing Brammek used Fireball and using that to get Lay to Rest to get Spider's Cavern, which is a bit of a stretch
    { sceneId: '1.4.1', keywords: ['Lily', 'Light']},
    { sceneId: '3.7', keywords: ['Cure', 'Kara']},
    { sceneId: '2.7', keywords: ['Mushroom', 'Felicity']},
    { sceneId: '3.9', keywords: ['Orb', 'Kara']},
    { sceneId: 'epilogue', keywords: ['Caspian', 'Lich'], isAvailable: () => {
        const discoveredAllScenes = Object.keys(scenes).every(sceneId => discoveredScenes[sceneId]);
        return isEndgame && discoveredAllScenes && !discoveredScenes['epilogue'];
    }},
];

function getHint() {
    // Approach 1: Use the defined hint list to progress through the game
    for (const hint of hintList) {
        if (hint.isAvailable?.()) { // Special scenes
            return hint;
        }
        else if (scenes[hint.sceneId] && !discoveredScenes[hint.sceneId]) {
            return hint;
        }
    }

    // Approach 2: If we've finished the main path, give hints to the next undiscovered scene
    const sceneIdList = Object.keys(scenes).filter((sceneId) => !discoveredScenes[sceneId]).sort((a, b) => {
        const aParts = a.split('.');
        const bParts = b.split('.');
        const partyA = parseInt(aParts[0]);
        const partyB = parseInt(bParts[0]);
        if (partyA !== partyB) {
            return partyB - partyA; // Descending order for parties
        }
        const roomA = parseInt(aParts[1]);
        const roomB = parseInt(bParts[1]);
        if (roomA !== roomB) {
            return roomsInOrder.indexOf(roomA) - roomsInOrder.indexOf(roomB); // Ascending order for rooms
        }
        return parseInt(aParts[2]) - parseInt(bParts[2]);
    });
    for (const sceneId of sceneIdList) {
        // Calculate all unique queries one time
        if (!uniqueQueries) {
            uniqueQueries = findAllUniqueQueriesForScenes(scenes);
        }
        const uniqueQueriesForScene = uniqueQueries[sceneId];
        const availableQueries = uniqueQueriesForScene.filter(query => 
            (!query.spell || discoveredKeywords.spell[query.spell]) &&
            (!query.character || discoveredKeywords.character[query.character]) &&
            (!query.room || discoveredKeywords.room[query.room])
        );
        if (availableQueries.length > 0) {
            result = availableQueries[0];
            return { sceneId, keywords: [result.spell, result.character, result.room] };
        }
    }

    return { sceneId: 'end', message: 'No hints remain.' };
}

function displayHint(hint) {
    const hintBox = document.getElementById("hint-box");

    if (hint.message) {
        const message = document.createElement("div");
        message.classList.add("hint-message");
        message.textContent = hint.message;

        message.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        hintBox.appendChild(message);

        return 'complete';
    }

    let rotateDirection = Math.random() < 0.5 ? -1 : 1;
    for (const keyword of hint?.keywords || []) {
        if (!keyword) continue;

        const category = getCategory(keyword);
        const token = getKeywordTokenButton(category, keyword);
        token.classList.add("hint-token");
        
        const div = document.createElement("div");
        div.classList.add("hint-wrapper");
        div.appendChild(token);

        const span = document.createElement("span");
        span.classList.add("unrevealed-text");
        span.textContent = "?";
        div.appendChild(span);

        div.onclick = () => {
            div.classList.add("revealed");
        }

        // Add some random rotation to the token
        div.style.transform = `rotate(${Math.random() * 20 * rotateDirection}deg)`;
        rotateDirection *= -1; // Alternate direction for next token
        
        hintBox.appendChild(div);
    }
    return advanceHint(); // Start with the first token revealed
}

// Reveal more of the hint
function advanceHint() {
    const tokens = document.querySelectorAll(".hint-wrapper:not(.revealed)");
    if (tokens.length > 0) {
        tokens[0].classList.add("revealed");
        return tokens.length == 1 ? 'complete' : 'more';
    }
    else {
        checkClearHint(hint.sceneId);
        return 'reset';
    }
}

let uniqueQueries;
function findAllUniqueQueriesForScenes(scenes) {
    const uniqueQueries = {};
    for (let sceneId in scenes) {
        uniqueQueries[sceneId] = [];
    }

    const combinations = [];

    // Single keyword (impossible for rooms and characters)
    for (let spell of SPELLS) {
        combinations.push({ spell });
    }

    // Then two
    for (let room of ROOMS) {
        for (let character of CHARACTERS) {
            combinations.push({ character, room });
        }
        for (let spell of SPELLS) {
            combinations.push({ spell, room });
        }
    }
    for (let character of CHARACTERS) {
        for (let spell of SPELLS) {
            combinations.push({ character, spell });
        }
    }

    // Then three
    for (let room of ROOMS) {
        for (let character of CHARACTERS) {
            for (let spell of SPELLS) {
                combinations.push({ character, spell, room });
            }
        }
    }

    // Check each combination for scenes it uniquely identifies
    for (let combination of combinations) {
        const keywords = Object.values(combination);

        // Check if this combination is unique for any scene
        const matchingScenes = Object.entries(scenes).filter(([id, scene]) => {
            const sceneTags = scene.tags;
            return keywords.every(tag => sceneTags.includes(tag));
        });
        if (matchingScenes.length === 1) {
            // We've found a unique combination for a scene!
            const sceneId = matchingScenes[0][0];

            // Note if [A] is unique and [A, B] is also unique, don't add [A, B]
            const isSuperset = uniqueQueries[sceneId].some(existingCombination => {
                const existingTags = Object.values(existingCombination);
                return existingTags.every(tag => keywords.includes(tag));
            });
            if (!isSuperset) {
                uniqueQueries[sceneId].push(combination);
            }
        }
    }

    return uniqueQueries;
}