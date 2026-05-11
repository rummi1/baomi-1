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
    saveGame(); // 保存音乐设置
}

function toggleSound() {
    const toggleElem = document.getElementById("sound-toggle");
    toggleElem.checked = !toggleElem.checked;
    playSounds = toggleElem.checked;
    saveGame(); // 保存音效设置
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
        'complete': "隐藏提示",
        'more': "显示更多",
        'reset': "显示提示",
    }[status];
}

function checkClearHint(sceneId) {
    if (hint?.sceneId === sceneId) {
        const hintBox = document.getElementById("hint-box");
        hintBox.innerHTML = ''; // 清除之前的提示
        hint = undefined;
        document.getElementById("hint-button").innerText = "显示提示";
    }
}

// 提示策略
// 对于任何尚未解锁的房间，我们可以计算（或记录）解锁它的最佳方式。
// 然后开始揭示要使用哪些关键词。
const hintList = [
    { sceneId: '3.2.2', keywords: ['力量']},
    { sceneId: '3.2.1', keywords: ['火球术', '齐尔']},
    { sceneId: '3.1', keywords: ['注魔']},
    { sceneId: 'intro2', message: '点击“记录命运”向国王报告。', isAvailable: () => isTutorial },
    { sceneId: '2.1', keywords: ['费莉西蒂', '地牢入口']},
    { sceneId: '2.8', keywords: ['防护术', '雷恩']},
    { sceneId: '3.6', keywords: ['地下湖', '布拉梅克']},
    { sceneId: '3.5.1', keywords: ['陷坑神祠', '惩戒']},
    // 从这里开始，接下来的步骤是：
    // 检查第一队，
    // 使用光明进入蜘蛛巢穴，
    // 或者猜测布拉梅克使用了火球术，然后用安息进入蜘蛛巢穴，这有点牵强
    { sceneId: '1.4.1', keywords: ['莉莉', '光明']},
    { sceneId: '3.7', keywords: ['净化', '卡拉']},
    { sceneId: '2.7', keywords: ['蘑菇森林', '费莉西蒂']},
    { sceneId: '3.9', keywords: ['宝珠', '卡拉']},
    { sceneId: 'epilogue', keywords: ['卡斯帕', '巫妖'], isAvailable: () => {
        const discoveredAllScenes = Object.keys(scenes).every(sceneId => discoveredScenes[sceneId]);
        return isEndgame && discoveredAllScenes && !discoveredScenes['epilogue'];
    }},
];

function getHint() {
    // 方法一：使用预定义的提示列表来推进游戏
    for (const hint of hintList) {
        if (hint.isAvailable?.()) { // 特殊场景
            return hint;
        }
        else if (scenes[hint.sceneId] && !discoveredScenes[hint.sceneId]) {
            return hint;
        }
    }

    // 方法二：如果完成了主线，为下一个未发现的场景提供提示
    const sceneIdList = Object.keys(scenes).filter((sceneId) => !discoveredScenes[sceneId]).sort((a, b) => {
        const aParts = a.split('.');
        const bParts = b.split('.');
        const partyA = parseInt(aParts[0]);
        const partyB = parseInt(bParts[0]);
        if (partyA !== partyB) {
            return partyB - partyA; // 队伍降序排列
        }
        const roomA = parseInt(aParts[1]);
        const roomB = parseInt(bParts[1]);
        if (roomA !== roomB) {
            return roomsInOrder.indexOf(roomA) - roomsInOrder.indexOf(roomB); // 房间升序排列
        }
        return parseInt(aParts[2]) - parseInt(bParts[2]);
    });
    for (const sceneId of sceneIdList) {
        // 只计算一次所有唯一查询
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

    return { sceneId: 'end', message: '没有更多提示了。' };
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
        span.textContent = "？";
        div.appendChild(span);

        div.onclick = () => {
            div.classList.add("revealed");
        }

        // 给标记添加一些随机旋转
        div.style.transform = `rotate(${Math.random() * 20 * rotateDirection}deg)`;
        rotateDirection *= -1; // 下一个标记交替方向
        
        hintBox.appendChild(div);
    }
    return advanceHint(); // 从第一个标记开始揭示
}

// 揭示更多提示内容
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

    // 单个关键词（房间和角色不可能）
    for (let spell of SPELLS) {
        combinations.push({ spell });
    }

    // 然后两个关键词
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

    // 然后三个关键词
    for (let room of ROOMS) {
        for (let character of CHARACTERS) {
            for (let spell of SPELLS) {
                combinations.push({ character, spell, room });
            }
        }
    }

    // 检查每个组合是否能唯一标识某个场景
    for (let combination of combinations) {
        const keywords = Object.values(combination);

        // 检查此组合是否对任何场景是唯一的
        const matchingScenes = Object.entries(scenes).filter(([id, scene]) => {
            const sceneTags = scene.tags;
            return keywords.every(tag => sceneTags.includes(tag));
        });
        if (matchingScenes.length === 1) {
            // 找到了场景的唯一组合！
            const sceneId = matchingScenes[0][0];

            // 注意：如果 [A] 是唯一的，而 [A, B] 也是唯一的，则不添加 [A, B]
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