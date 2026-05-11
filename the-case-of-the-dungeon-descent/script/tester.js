let testTargets = ['Kara', 'Brammek', 'Zil', 'Caspian', 'Lily', 'Vane', 'Meriel', 'Luna', 'Wren', 'Felicity'];
let testNames = [...testTargets, 'the King', 'the Queen']; // Add more red herrings?
let testFates = ['was killed in', 'escaped from', 'remains in'];
let testCauses = [...testNames, 'a lich', 'a dragon', 'illness', 'a cave-in', 'drowning', 'a trap', 'a spider', 'a kobold', 'a lake', 'a mimic', 'poison', 'a revenant'];
let testLocations = ['Castle'];
let testSpells = [];

testNames = testNames.sort((a, b) => a.localeCompare(b));
testCauses = testCauses.sort((a, b) => {
    // Sort names alphabetically, ignoring 'a ' or 'the ' prefix
    const prefix = ['a ', 'the '];
    for (const p of prefix) {
        if (a.startsWith(p)) a = a.slice(p.length);
        if (b.startsWith(p)) b = b.slice(p.length);
    }
    return a.localeCompare(b);
});

let testerState = {};

const answers = {
    'Kara': [{ fate: 'remains in', location: 'Lich' }],
    'Brammek': [
        { fate: 'was killed in', cause: 'a cave-in', location: 'Dragon' },
        { fate: 'was killed in', cause: 'a dragon', location: 'Dragon' }
    ],
    'Zil': [
        { fate: 'was killed in', cause: 'a trap', location: 'Shrine' },
        { fate: 'was killed in', cause: 'a revenant', location: 'Shrine' },
        { fate: 'was killed in', cause: 'Vane', location: 'Shrine' },
    ],
    'Caspian': [{ fate: 'escaped from', cause: 'the King' }],
    'Lily': [{ fate: 'escaped from', cause: 'the Queen' }],
    'Meriel': [
        { fate: 'escaped from', cause: 'Wren' },
    ],
    'Vane': [
        { fate: 'was killed in', cause: 'a cave-in', location: 'Dragon' },
        { fate: 'was killed in', cause: 'a cave-in', location: 'Mushroom' },
        { fate: 'was killed in', cause: 'Brammek', location: 'Shrine' }, // the revenant is the same token as him
    ],
    'Luna': [
        { fate: 'was killed in', cause: 'a spider', location: 'Spider' },
        { fate: 'was killed in', cause: 'poison', location: 'Spider' },
    ],
    'Wren': [
        { fate: 'was killed in', cause: 'a dragon', location: 'Mushroom' },
        { fate: 'was killed in', cause: 'a dragon', location: 'Dragon' },
    ],
    'Felicity': [{ fate: 'remains in', location: 'Lich', felicityBecame: 'a lich' }],
    'Tutorial': [{ fate: 'Imbue', location: 'Entrance' }],
};

function toggleTesterPopup(forceHide) {
    const isClosing = !document.getElementById("tester").classList.contains("hidden");
    document.getElementById("popup-backdrop").classList.toggle("hidden", forceHide);
    document.getElementById("tester").classList.toggle("hidden", forceHide);
    document.getElementById("settings").classList.add("hidden");
    if (isClosing) {
        saveTesterState();
    }
}

function closePopups(event) {
    if (event.target.id === 'popup-backdrop') {
        toggleTesterPopup(true);
        toggleSettingsPopup(true);
    }
}

function populateTutorial() {
    // The tutorial has a single test which is [Name] cast [Spell] in the [location].
    const testsElem = document.getElementById('testers');
    testsElem.innerHTML = `<div class="tester tutorial" data-character="Tutorial">
        <div class="tester-sentence">
            <div>
                <select class="name select" data-type="name">
                    <option value="">?</option>
                    ${testNames.map(name => `<option value="${name}">${name}</option>`).join('')}
                </select>
                cast
                <select class="fate select" data-type="fate">
                    <option value="">?</option>
                    ${testSpells.map(spell => `<option value="${spell}">${spell}</option>`).join('')}
                </select>
                in the
                ${buildLocationSelect()} .
            </div>
        </div>
        ${buildCheckButton()}
    </div>`;

    document.querySelector('#tester h2').textContent = 'What spell was cast before entering the dungeon?';
}

function populateTesters() {
    const testsElem = document.getElementById('testers');
    testsElem.innerHTML = ''; // Clear existing content
    for (const target of testTargets) {
        const testerHtml = buildTesterHtml(target);
        testsElem.innerHTML += testerHtml;
    }
    document.querySelector('#tester h2').textContent = 'What were their fates?';
}

function buildTesterHtml(targetName) {
    const className = characterClassLookup[targetName] || targetName;
    const isDiscovered = discoveredKeywords.character[targetName === 'Luna' ? 'Meriel' : targetName];

    return `<div class="tester ${isDiscovered ? '' : 'hidden'}" data-character="${targetName}">
        <div class="tester-portrait">
            <img src="images/portrait_${targetName.toLowerCase()}.gif" alt="${className}" />
            <div class="portrait-placeholder">?</div>
            <div class="tester-name">${className}</div>
        </div>
        <div class="tester-sentence">
            <div>
                <select data-type="name" class="name select">
                    <option value="">?</option>
                    ${testNames.map(name => `<option value="${name}">${name}</option>`).join('')}
                </select>
                <select data-type="fate" class="fate select">
                    <option value="">?</option>
                    ${testFates.map(fate => `<option value="${fate}">${fate}</option>`).join('')}
                </select>
                <span class="dungeon">the dungeon</span>
            </div>
            <div>
                <span class="by-as">by</span>
                ${buildCauseSelect()}
                <span class="location-text">in the</span>
                ${buildLocationSelect()}
                <span class="final-period">.</span>
            </div>
            <div class="felicity-became" style="display:none">
                after becoming ${buildCauseSelect('felicityBecame')} .
            </div>
        </div>
        ${buildCheckButton()}
    </div>`;
}

function buildCheckButton() {
    return `<button class="tester-check-button" onclick="onClickCheck(this)">
        <span class="check">&#10004;</span>
        <span class="question">?</span>
        <span class="x">X</span>
    </button>`;
}

function buildLocationSelect() {
    const locationOptions = testLocations
        .map(room => `<option value="${room}">${displayNameLookup[room] || room}</option>`)
        .join('');
    return `<select data-type="location" class="location select">
        <option value="">?</option>
        ${locationOptions}
    </select>`;
}

function updateLocationSelects(newRoom) {
    testLocations.push(newRoom);
    // Sort according to the order in ROOMS
    testLocations.sort((a, b) => ROOMS.indexOf(a) - ROOMS.indexOf(b));

    const locationSelects = document.querySelectorAll('.location.select');
    locationSelects.forEach(select => {
        const value = select.value;
        select.innerHTML = '<option value="">?</option>';
        testLocations.forEach(room => {
            const newOption = document.createElement('option');
            newOption.value = room;
            newOption.textContent = displayNameLookup[room] || room;
            select.appendChild(newOption);
        });
        if (value && testLocations.includes(value)) {
            select.value = value;
        } else {
            select.value = '';
        }
    });
}

function updateSpellSelects(newSpell) {
    if (!isTutorial) return;
    testSpells.push(newSpell);
    const spellSelects = document.querySelectorAll('.fate.select');
    spellSelects.forEach(select => {
        const newOption = document.createElement('option');
        newOption.value = newSpell;
        newOption.textContent = newSpell;
        select.appendChild(newOption);
    });
}

function revealTesterPortrait(character) {
    const tester = document.querySelector(`.tester[data-character="${character}"]`);
    tester?.classList.remove('hidden');

    if (character === 'Meriel') revealTesterPortrait('Luna');
}

function buildCauseSelect(type = 'cause') {
    return `<select data-type="${type}" class="cause select">
        <option value="">?</option>
        ${testCauses.map(cause => `<option value="${cause}">${cause}</option>`).join('')}
    </select>`;
}

function updateSentence(tester, fateValue) {
    if (isTutorial) return;

    const byAs = tester.querySelector('.by-as');
    const locationText = tester.querySelector('.location-text');
    const locationSelect = tester.querySelector('.location.select');
    const causeSelect = tester.querySelector('.cause.select');

    if (fateValue === 'escaped from') {
        byAs.textContent = 'and became';
        byAs.style.display = 'inline-block';
        causeSelect.style.display = 'inline-block';
        locationText.style.display = 'none';
        locationSelect.style.display = 'none';
    } else if (fateValue === 'remains in') {
        byAs.style.display = 'none';
        causeSelect.style.display = 'none';
        locationText.style.display = 'inline-block';
        locationSelect.style.display = 'inline-block';
    } else {
        byAs.textContent = 'by';
        byAs.style.display = 'inline-block';
        causeSelect.style.display = 'inline-block';
        locationText.style.display = 'inline-block';
        locationSelect.style.display = 'inline-block';
    }

    const showFelicityBecame = tester.dataset.character == 'Felicity' && fateValue === 'remains in';
    tester.querySelector('.felicity-became').style.display = showFelicityBecame ? 'block' : 'none';
    tester.querySelector('.final-period').style.display = showFelicityBecame ? 'none' : 'inline-block';
    tester.classList.toggle('long', showFelicityBecame);
}

function handleAnswerChange(select) {
    const tester = select.closest('.tester');
    const character = tester.dataset.character;
    const type = select.dataset.type;
    const value = select.value;

    setTesterState(character, type, value);
    saveTesterState();

    if (!isTutorial && type === 'fate') {
        updateSentence(tester, value);
    }

    tester.classList.remove('correct', 'incorrect', 'checking');

    const isReady = isComplete(character);
    tester.classList.toggle('ready', isReady);
}

function checkAnswer(character) {
    const { name, fate, cause, location, felicityBecame } = testerState[character] || {};

    if (character === 'Tutorial') {
        return name == 'Zil' && fate == 'Imbue' && location == 'Entrance';
    }

    const possibleAnswers = answers[character];
    if (!possibleAnswers || name !== character) return false;

    // Check if any of the possible answers match
    return possibleAnswers.some(answer =>
        answer.fate === fate && (!answer.cause || answer.cause === cause)
        && (!answer.location || answer.location === location)
        && (!answer.felicityBecame || answer.felicityBecame === felicityBecame)
    );
}

function isComplete(character) {
    const { name, fate, cause, location, felicityBecame } = testerState[character] || {};
    const isComplete = name && fate
        && (cause || fate === 'remains in' || isTutorial)
        && (location || fate === 'escaped from')
        && (name !== 'Felicity' || fate !== 'remains in' || felicityBecame);
    return !!isComplete;
}

async function onClickCheck(testerButton) {
    const tester = testerButton.closest('.tester');
    const result = await checkTester(tester);
    if (result?.isCorrect) {
        saveTesterState();
        checkAllCorrect();
    }
}

async function checkTester(tester) {
    const character = tester.dataset.character;
    if (!isComplete(character)) {
        // Do nothing
        return;
    }

    tester.classList.remove('ready');
    tester.classList.add('checking');

    // Wait for fun checking animation
    await new Promise(resolve => {
        tester.addEventListener('transitionend', () => {
            setTimeout(() => {
                resolve();
            }, 300);
        });
    });

    const isCorrect = checkAnswer(character);

    tester.classList.remove('checking');
    tester.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
        await lockInTester(tester);
    }

    return { isCorrect };
}

function setTesterState(character, type, value) {
    if (!testerState[character]) {
        testerState[character] = {};
    }
    testerState[character][type] = value;

    // Also force the dropdown to be this
    let dropdown = document.querySelector(`.tester[data-character="${character}"] .${type}.select`);
    if (type === 'felicityBecame') {
        dropdown = document.querySelector(`.tester[data-character="${character}"] .felicity-became .cause.select`);
    }
    if (dropdown) {
        dropdown.value = value;
    }
}

function clearTesterState(character, type) {
    if (testerState[character]) {
        delete testerState[character][type];
    }
}

// Replace the selects with the current answers as spans
async function lockInTester(tester) {
    testerState[tester.dataset.character].isLocked = true;
    const allSelects = tester.querySelectorAll('select');

    for (const select of allSelects) {
        const value = select.value;
        const type = select.dataset.type;

        if (select.style.display === 'none') {
            clearTesterState(tester.dataset.character, type);
            select.outerHTML = '';
            continue;
        }
        
        const span = document.createElement('span');
        span.className = 'locked';
        span.textContent = displayNameLookup[value] || value;
        span.dataset.value = value;
        span.dataset.type = type;

        if (value === 'was killed in') {
            span.textContent = 'killed';
            select.outerHTML = `was ${span.outerHTML} in`;
        }
        else if (value === 'escaped from') {
            span.textContent = 'escaped';
            select.outerHTML = `${span.outerHTML} from`;
        }
        else if (value === 'remains in') {
            span.textContent = 'remains';
            select.outerHTML = `${span.outerHTML} in`;
        }
        else {
            select.outerHTML = span.outerHTML;
        }
    }
}

async function checkAllTesters() {
    const testers = document.querySelectorAll('.tester');
    let totalCount = testers.length;
    let correctCount = 0;
    for (const tester of testers) {
        tester?.scrollIntoView({ behavior: "smooth", block: "center" });

        const result = await checkTester(tester);

        if (result) {
            if (result.isCorrect) correctCount++;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    // All correct -> change button to Continue -> proceed to the next phase of the game
    if (correctCount === totalCount) {
        allCorrect();
    }
}

function checkAllCorrect() {
    const testers = Array.from(document.querySelectorAll('.tester'));
    if (testers.every(tester => tester.classList.contains('correct'))) {
        allCorrect();
    }
}

async function allCorrect() {
    const button = document.getElementById('complete-button');
    const tester = document.getElementById('tester');
    if (!tester.classList.contains('complete')) {
        await new Promise(resolve => setTimeout(resolve, 500));

        tester.classList.add('complete');
        button.style.scale = '1.05';
        await new Promise(resolve => setTimeout(resolve, 10));
        button.style.scale = '1';

        // Scroll the testers div to the bottom
        const testersDiv = document.getElementById('testers');
        testersDiv.scrollTo({
            top: testersDiv.scrollHeight,
            behavior: 'smooth'
        });
    }
    else {
        completeTest();
    }
}

function completeTest() {
    if (isTutorial) {
        completeTutorial();
    }
    else {
        completeGame();
    }
    // Even at the end, we don't want to keep showing the button
    document.getElementById('tester').classList.remove('complete');
}

function initializeTesters() {
    if (isTutorial) {
        populateTutorial();
    }
    else {
        populateTesters();
    }

    loadTesterState();

    // Add event listeners for dropdowns
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', e => handleAnswerChange(e.target));
    });
}

function saveTesterState() {
    if (autoSave) {
        //console.log('Saving tester state:', testerState);
        localStorage.setItem(TESTER_SAVE_KEY, JSON.stringify(testerState));
    }
}

function loadTesterState() {
    const savedJson = localStorage.getItem(TESTER_SAVE_KEY);
    if (!savedJson) {
        return;
    }

    try {
        savedState = JSON.parse(savedJson);
        //console.log('Loaded saved tester state:', savedState);
    } catch (e) {
        console.error('Failed to parse saved tester state:', e);
        return;
    }

    const testers = document.querySelectorAll('.tester');

    testers.forEach(tester => {
        const character = tester.dataset.character;
        const characterState = savedState[character] || {};
        let { name, fate, cause, location, felicityBecame, isLocked, sentence } = characterState;

        // Legacy
        if (isLocked && !!sentence) {
            const parsed = tryParseLockedInSentence(character, sentence);
            if (parsed) {
                ({ name, fate, cause, location, felicityBecame, isLocked } = parsed);
            }
        }

        if (name) setTesterState(character, 'name', name);
        if (fate) {
            setTesterState(character, 'fate', fate);
            updateSentence(tester, fate);
        }
        if (cause) setTesterState(character, 'cause', cause);
        if (location) setTesterState(character, 'location', location);
        if (felicityBecame) setTesterState(character, 'felicityBecame', felicityBecame);

        if (isLocked && checkAnswer(character)) {
            lockInTester(tester);
            tester.classList.add('correct');
        }
        else if (isComplete(character)) {
            tester.classList.add('ready');
        }
    });

    if (!isEndgame) {
        checkAllCorrect();
    }
}

function tryParseLockedInSentence(character, sentence) {
    // The sentence is the inner html of the locked-in tester sentence.
    // We don't know the type of each string, but we know the order and what the possible answers are.
    const tester = document.querySelector(`.tester[data-character="${character}"]`);
    const name = character;
    let fate;
    if (sentence.includes('escaped')) {
        fate = 'escaped from';
    }
    else if (sentence.includes('remains')) {
        fate = 'remains in';
    }
    else if (sentence.includes('killed')) {
        fate = 'was killed in';
    }
    let location, cause, felicityBecame;
    for (const answer of answers[character]) {
        if (sentence.includes(answer.location)) {
            location = answer.location;
        }
        if (sentence.includes(answer.cause)) {
            cause = answer.cause;
        }
    }
    if (character === 'Felicity' && sentence.includes('a lich')) {
        felicityBecame = 'a lich';
    }
    return { name, fate, cause, location, felicityBecame, isLocked: true };
}

function updateKarasFate() {
    const karaSentences = document.querySelector('.tester[data-character="Kara"] .tester-sentence');
    karaSentences.innerHTML = `
<div>
    <span class="locked">Kara</span>
    <span class="locked">escaped</span> from
    <span class="dungeon">the dungeon</span>
</div>
<div>
    when <span class="locked">the King</span> dug <span class="locked">a tunnel</span>
</div>
<div>
    to the <span class="locked">Lich's Chamber</span>.
</div>
    `;
}