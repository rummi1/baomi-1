let testTargets = ['卡拉', '布拉梅克', '齐尔', '卡斯帕', '莉莉', '维恩', '梅瑞尔', '露娜', '雷恩', '费莉西蒂'];
let testNames = [...testTargets, '国王', '王后']; // 添加更多干扰项？
let testFates = ['死于', '逃脱了', '留在'];
let testCauses = [...testNames, '巫妖', '巨龙', '疾病', '塌方', '溺水', '陷阱', '蜘蛛', '狗头人', '湖', '拟态怪', '剧毒', '亡魂'];
let testLocations = ['城堡'];
let testSpells = [];

testNames = testNames.sort((a, b) => a.localeCompare(b));
testCauses = testCauses.sort((a, b) => {
    // 按字母顺序排序，忽略前缀 '一个 ' 或 '那个 '
    const prefix = ['一个 ', '那个 '];
    for (const p of prefix) {
        if (a.startsWith(p)) a = a.slice(p.length);
        if (b.startsWith(p)) b = b.slice(p.length);
    }
    return a.localeCompare(b);
});

let testerState = {};

const answers = {
    '卡拉': [{ fate: '留在', location: '巫妖巢穴' }],
    '布拉梅克': [
        { fate: '死于', cause: '塌方', location: '巨龙巢穴' },
        { fate: '死于', cause: '巨龙', location: '巨龙巢穴' }
    ],
    '齐尔': [
        { fate: '死于', cause: '陷阱', location: '陷坑神祠' },
        { fate: '死于', cause: '亡魂', location: '陷坑神祠' },
        { fate: '死于', cause: '维恩', location: '陷坑神祠' },
    ],
    '卡斯帕': [{ fate: '逃脱了', cause: '国王' }],
    '莉莉': [{ fate: '逃脱了', cause: '王后' }],
    '梅瑞尔': [
        { fate: '逃脱了', cause: '雷恩' },
    ],
    '维恩': [
        { fate: '死于', cause: '塌方', location: '巨龙巢穴' },
        { fate: '死于', cause: '塌方', location: '蘑菇森林' },
        { fate: '死于', cause: '布拉梅克', location: '陷坑神祠' }, // 亡魂与他实际上是同一人
    ],
    '露娜': [
        { fate: '死于', cause: '蜘蛛', location: '蜘蛛巢穴' },
        { fate: '死于', cause: '剧毒', location: '蜘蛛巢穴' },
    ],
    '雷恩': [
        { fate: '死于', cause: '巨龙', location: '蘑菇森林' },
        { fate: '死于', cause: '巨龙', location: '巨龙巢穴' },
    ],
    '费莉西蒂': [{ fate: '留在', location: '巫妖巢穴', felicityBecame: '巫妖' }],
    '教程': [{ fate: '注魔', location: '地牢入口' }],
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
    // 教程只有一个测试项：[名字] 在 [地点] 施展了 [法术]。
    const testsElem = document.getElementById('testers');
    testsElem.innerHTML = `<div class="tester tutorial" data-character="教程">
        <div class="tester-sentence">
            <div>
                <select class="name select" data-type="name">
                    <option value="">？</option>
                    ${testNames.map(name => `<option value="${name}">${name}</option>`).join('')}
                </select>
                施展了
                <select class="fate select" data-type="fate">
                    <option value="">？</option>
                    ${testSpells.map(spell => `<option value="${spell}">${spell}</option>`).join('')}
                </select>
                在
                ${buildLocationSelect()} 。
            </div>
        </div>
        ${buildCheckButton()}
    </div>`;

    document.querySelector('#tester h2').textContent = '进入地牢前施展了什么法术？';
}

function populateTesters() {
    const testsElem = document.getElementById('testers');
    testsElem.innerHTML = ''; // 清空已有内容
    for (const target of testTargets) {
        const testerHtml = buildTesterHtml(target);
        testsElem.innerHTML += testerHtml;
    }
    document.querySelector('#tester h2').textContent = '他们的命运是什么？';
}

function buildTesterHtml(targetName) {
    const className = characterClassLookup[targetName] || targetName;
    const isDiscovered = discoveredKeywords.character[targetName === '露娜' ? '梅瑞尔' : targetName];

    return `<div class="tester ${isDiscovered ? '' : 'hidden'}" data-character="${targetName}">
        <div class="tester-portrait">
            <img src="images/portrait_${portraitFileNameMap[targetName] || targetName.toLowerCase()}.gif" alt="${className}" />
            <div class="portrait-placeholder">？</div>
            <div class="tester-name">${className}</div>
        </div>
        <div class="tester-sentence">
            <div>
                <select data-type="name" class="name select">
                    <option value="">？</option>
                    ${testNames.map(name => `<option value="${name}">${name}</option>`).join('')}
                </select>
                <select data-type="fate" class="fate select">
                    <option value="">？</option>
                    ${testFates.map(fate => `<option value="${fate}">${fate}</option>`).join('')}
                </select>
                <span class="dungeon">地牢</span>
            </div>
            <div>
                <span class="by-as">被</span>
                ${buildCauseSelect()}
                <span class="location-text">在</span>
                ${buildLocationSelect()}
                <span class="final-period">。</span>
            </div>
            <div class="felicity-became" style="display:none">
                在成为 ${buildCauseSelect('felicityBecame')} 之后。
            </div>
        </div>
        ${buildCheckButton()}
    </div>`;
}

function buildCheckButton() {
    return `<button class="tester-check-button" onclick="onClickCheck(this)">
        <span class="check">✓</span>
        <span class="question">？</span>
        <span class="x">✗</span>
    </button>`;
}

function buildLocationSelect() {
    const locationOptions = testLocations
        .map(room => `<option value="${room}">${displayNameLookup[room] || room}</option>`)
        .join('');
    return `<select data-type="location" class="location select">
        <option value="">？</option>
        ${locationOptions}
    </select>`;
}

function updateLocationSelects(newRoom) {
    testLocations.push(newRoom);
    // 按照 ROOMS 中的顺序排序
    testLocations.sort((a, b) => ROOMS.indexOf(a) - ROOMS.indexOf(b));

    const locationSelects = document.querySelectorAll('.location.select');
    locationSelects.forEach(select => {
        const value = select.value;
        select.innerHTML = '<option value="">？</option>';
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

    if (character === '梅瑞尔') revealTesterPortrait('露娜');
}

function buildCauseSelect(type = 'cause') {
    return `<select data-type="${type}" class="cause select">
        <option value="">？</option>
        ${testCauses.map(cause => `<option value="${cause}">${cause}</option>`).join('')}
    </select>`;
}

function updateSentence(tester, fateValue) {
    if (isTutorial) return;

    const byAs = tester.querySelector('.by-as');
    const locationText = tester.querySelector('.location-text');
    const locationSelect = tester.querySelector('.location.select');
    const causeSelect = tester.querySelector('.cause.select');

    if (fateValue === '逃脱了') {
        byAs.textContent = '并成为';
        byAs.style.display = 'inline-block';
        causeSelect.style.display = 'inline-block';
        locationText.style.display = 'none';
        locationSelect.style.display = 'none';
    } else if (fateValue === '留在') {
        byAs.style.display = 'none';
        causeSelect.style.display = 'none';
        locationText.style.display = 'inline-block';
        locationSelect.style.display = 'inline-block';
    } else {
        byAs.textContent = '被';
        byAs.style.display = 'inline-block';
        causeSelect.style.display = 'inline-block';
        locationText.style.display = 'inline-block';
        locationSelect.style.display = 'inline-block';
    }

    const showFelicityBecame = tester.dataset.character == '费莉西蒂' && fateValue === '留在';
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

    if (character === '教程') {
        return name == '齐尔' && fate == '注魔' && location == '地牢入口';
    }

    const possibleAnswers = answers[character];
    if (!possibleAnswers || name !== character) return false;

    // 检查是否有任何一个可能的答案匹配
    return possibleAnswers.some(answer =>
        answer.fate === fate && (!answer.cause || answer.cause === cause)
        && (!answer.location || answer.location === location)
        && (!answer.felicityBecame || answer.felicityBecame === felicityBecame)
    );
}

function isComplete(character) {
    const { name, fate, cause, location, felicityBecame } = testerState[character] || {};
    const isComplete = name && fate
        && (cause || fate === '留在' || isTutorial)
        && (location || fate === '逃脱了')
        && (name !== '费莉西蒂' || fate !== '留在' || felicityBecame);
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
        // 无操作
        return;
    }

    tester.classList.remove('ready');
    tester.classList.add('checking');

    // 等待有趣的检查动画
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

    // 同时强制下拉框显示该值
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

// 用当前答案的 span 替换下拉框
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

        if (value === '死于') {
            span.textContent = '死于';
            select.outerHTML = `${span.outerHTML} `;
        }
        else if (value === '逃脱了') {
            span.textContent = '逃脱了';
            select.outerHTML = `${span.outerHTML} `;
        }
        else if (value === '留在') {
            span.textContent = '留在';
            select.outerHTML = `${span.outerHTML} `;
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

    // 全部正确 -> 将按钮变为“继续” -> 进入游戏的下一阶段
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

        // 将 testers 区域滚动到底部
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
    // 即使在最后，我们也不想一直显示按钮
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

    // 为下拉框添加事件监听器
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', e => handleAnswerChange(e.target));
    });
}

function saveTesterState() {
    if (autoSave) {
        //console.log('保存测试器状态:', testerState);
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
        //console.log('加载已保存的测试器状态:', savedState);
    } catch (e) {
        console.error('解析已保存的测试器状态失败:', e);
        return;
    }

    const testers = document.querySelectorAll('.tester');

    testers.forEach(tester => {
        const character = tester.dataset.character;
        const characterState = savedState[character] || {};
        let { name, fate, cause, location, felicityBecame, isLocked, sentence } = characterState;

        // 旧版兼容
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
    // sentence 是锁定后测试器句子的内部 HTML。
    // 我们不知道每个字符串的类型，但知道顺序以及可能的答案是什么。
    const tester = document.querySelector(`.tester[data-character="${character}"]`);
    const name = character;
    let fate;
    if (sentence.includes('逃脱')) {
        fate = '逃脱了';
    }
    else if (sentence.includes('留在')) {
        fate = '留在';
    }
    else if (sentence.includes('死于')) {
        fate = '死于';
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
    if (character === '费莉西蒂' && sentence.includes('巫妖')) {
        felicityBecame = '巫妖';
    }
    return { name, fate, cause, location, felicityBecame, isLocked: true };
}

function updateKarasFate() {
    const karaSentences = document.querySelector('.tester[data-character="卡拉"] .tester-sentence');
    karaSentences.innerHTML = `
<div>
    <span class="locked">卡拉</span>
    <span class="locked">逃脱</span> 了
    <span class="dungeon">地牢</span>
</div>
<div>
    当 <span class="locked">国王</span> 挖掘出一条
    <span class="locked">隧道</span>
</div>
<div>
    通向 <span class="locked">巫妖巢穴</span> 时。
</div>
    `;
}