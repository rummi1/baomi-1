// 调试
const UNLOCK_EVERYTHING = false;
const START_WITH = null; //["火球术", "护符", "布拉梅克", "注魔", "齐尔", "力量"];
const TUTORIAL_START_WITH = ["火球术", "卡拉", "布拉梅克", "注魔", "齐尔", "力量", "狗头人营地", "入口"];
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

    // 我们总是将城堡场景包含在历史记录中
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

    if (!isTutorial && !discoveredKeywords.character["费莉西蒂"]) {
        // 以防万一——如果我们还没有费莉西蒂，我们需要看到 intro2
        displayPostTutorialScene();
    }
    else if (startScene) {
        //console.log(`以场景开始游戏: ${startSceneId}`);
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

    // 完整性检查——所有探知槽位应该与预期的关键词匹配
    for (let category of Object.keys(scryState)) {
        const slotElem = document.getElementById(`scry-${category}`);
        const selected = slotElem.dataset.selected;
        const expected = scryState[category];
        if (!selected && !!expected) {
            console.warn(`探知槽位 ${category} 预期有 ${expected} 但是空的。`);
            showKeywordInSlot(expected, category);
        }
        else if (selected) {
            const [_cat, selectedKeyword] = selected.split(':');
            if (!expected && !!selectedKeyword) {
                console.warn(`探知槽位 ${category} 有 ${selectedKeyword} 但是预期是空的。`);
                emptySlot(category);
                showKeywordInTray(selectedKeyword, category);
            }
            else if (selectedKeyword !== expected) {
                console.warn(`探知槽位 ${category} 有 ${selectedKeyword} 但是预期 ${expected}。`);
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
            return `${characterClassLookup[keyword]}`; // 不想透露他们的名字……
        }
        else if (category == 'room') {
            return `${displayNameLookup[keyword] || keyword}`;
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

    // 纯属娱乐
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

    // 设置横幅快照——这是房间的可解锁元素（而不仅仅是房间的 peek）
    // 如果我们想强制玩家先收集房间，可以用这个
    // const bannerSnapshot = document.getElementById("banner-snapshot");
    // const room = ROOMS[sceneId.split('.')[1]];
    // bannerSnapshot.dataset.name = room ?? '';

    // 添加可点击的“peek”来解锁关键词
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
            if (line.speaker == "亡魂") keyword = "维恩";
            else if (line.speaker == "巫妖") keyword = "费莉西蒂";

            let unlockableClass = CHARACTERS.includes(keyword) ? "unlockable highlight" : "";
            if (line.speaker == "亡魂") unlockableClass += " revenant";
            outputElem.innerHTML += `<div class="dialog"><img class="${unlockableClass}" data-name=${keyword} src="images/portrait_${portraitFileNameMap[line.speaker]}.gif"><div>
                                    <span class="${unlockableClass} speaker" data-name=${keyword}>${line.speaker}：</span>
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

    // 在访问场景时重置探知
    //resetScrySelection();

    // if (sceneId == ENDING_SCENE) {
    //     outputElem.innerHTML += `<div class="footer"><div id="end-text">终</div></div>`;
    //     //outputElem.innerHTML += `<div class="footer"><button id="end-button" onclick="handleEndButton()">完成调查</button></div>`;
    // }

    // 如果是 3.1，添加教程提示
    if (sceneId == "3.1") {
        outputElem.insertAdjacentHTML('beforeend', `<div class="note">当你能回答国王的问题时，点击“记录命运”。</div>`);
    }
}

function displayOptions(keywords, results)
{
    const isSingleResult = results.length == 1;

    // 隐藏无结果文本，显示带有适当文本的结果
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
            // 点击场景本身就会解锁/显示它，所以按钮没有 onclick
            scryButton = `<button class="reveal-button">揭示</button>`;
        }

        // 目标的 peek
        let peeks = '';
        if (!fullyVisible) {
            peeks = getPeeks(sceneId, keywords, img);
        }

        // 已解锁但尚未收集完所有关键词的场景的新关键词提示……
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

    // 滚动到顶部
    document.querySelector(".scry.content").scrollTop = 0;
}

function handleOption(sceneId, isJustDiscovered)
{
    executeAndRecord("option:" + sceneId, displayScene.bind(this, sceneId, undefined, isJustDiscovered));
}

// 不点击文本中的单词，而是在底部显示关键词
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
        if (category === 'character') {content = `<img src="images/portrait_${portraitFileNameMap[keyword] || keyword.toLowerCase()}.gif" />`;
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

    //console.log("记录", keyword, category);

    discoveredKeywords[category][keyword] = true;

    // 将标记添加到已知关键词区域
    let tray = document.querySelector(`#known-keywords .${category}.tray`);
    let token = getKeywordToken(category, keyword);
    tray.appendChild(token);

    // 添加新房间标记时按楼层排序
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

    // 在收集标记的动画之后执行
    //updateUnlockableKeywords();

    // 添加到测试器列表
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

// 即来自“新关键词”区域的关键词
// 已弃用：改用 recordKeyword
function recordNewKeyword(keywordElem) {
    // TODO 将类别放在属性中，就像其他地方一样
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

    // TODO 这里可以有一个漂亮的过渡效果
    document.getElementById("new-keywords-container").style.display = "none";
}

/** 处理点击关键词（从文本中解锁、添加到探知等） */
async function handleClickKeyword(keyword, category, elem)
{    
    startMusic();

    // 已发现——切换关键词输入到探知
    if (category in discoveredKeywords && keyword in discoveredKeywords[category])
    {
        hideTooltip(); // 以防万一

        toggleKeywordForScry(keyword, category);

        if (AUTO_FILTER) {
            handleScry();
        }
    }
    // 新的——解锁它
    else {
        recordKeyword(keyword, category);
        let slot = document.getElementById(`${category}:${keyword}`);
        slot.classList.add('new'); // 先不显示在那里
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
    //console.log(`切换关键词 ${keyword} 到类别 ${category} 的探知。当前探知关键词: ${currentScryKeyword}`);

    // 从探知槽位移到托盘
    if (currentScryKeyword === keyword) {
        await moveKeywordFromScrySlot(keyword, category);
    }
    // 移入探知槽位
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
            content = `<img src="images/portrait_${portraitFileNameMap[keyword] || keyword.toLowerCase()}.gif" />`;
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
    handleClickKeyword(keyword, category); // 清除它
}

function updateDiscoveredCounts()
{
    /* 暂时跳过
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

        // 在此处附加 onclick
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
    // 为每个具有此关键词的可解锁元素添加 .hovering
    // 如果我们想强调有多种方式解锁某物，可以用这个
    // let unlockableElements = document.querySelectorAll(`.unlockable[data-name="${keyword}"]`);
    // for (let elem of unlockableElements) {
    //     elem.classList.toggle("hovering", hovering);
    // }
    elem.classList.toggle("hovering", hovering);

    // 将此关键词的标记显示为工具提示
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
    
    // 在工具提示中存储关键词和类别数据以便访问
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
    // 检查此类别的槽位大小，因为工具提示大小将与之相同
    const slot = document.querySelector(`#scry-slots .${category}.slot`);
    const slotRect = slot.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    let x, y;
    // 定位在元素上方
    y = elementRect.top - slotRect.height + elementRect.height/3;
    x = elementRect.left + elementRect.width/2 - slotRect.width/2;
    if (category === 'room') {
        y = elementRect.top - slotRect.height + 10;
    }
    else if (element.classList.contains('peek')) {
        // 基于实际坐标，因为 peek 元素已扩展到完整高度
        const coordinates = COORDINATES.scenes[currentSceneId]?.keywords[element.dataset.name];
        if (coordinates) {
            y = elementRect.top + coordinates.top * scale - slotRect.height + 20;
        }
    }
    
    return { x, y };
}

async function animateToken(keyword, category, source, dest, additionalClass = '') {
    return new Promise((resolve) => {
        // 创建一个新的飞行动画标记元素
        const flyingTokenElem = document.createElement('div');
        flyingTokenElem.className = `flying-token ${additionalClass}`;
        
        // 创建标记内容
        const content = getKeywordInputContent(category, keyword);
        const tokenContent = `<div class="slot ${category}"><button class="${category} token">${content}</button></div>`;
        flyingTokenElem.innerHTML = tokenContent;
        
        // 定位到源坐标
        flyingTokenElem.style.left = source.x + 'px';
        flyingTokenElem.style.top = source.y + 'px';
        
        // 添加到 DOM
        document.body.appendChild(flyingTokenElem);
        
        // 强制重排以确保在过渡开始前设置好初始位置
        flyingTokenElem.offsetHeight;
        
        // 通过设置目标位置开始动画
        setTimeout(() => {
            flyingTokenElem.style.left = dest.x + 'px';
            flyingTokenElem.style.top = dest.y + 'px';
        }, 50);

        // 安全超时
        setTimeout(() => {
            if (flyingTokenElem.parentNode) {
                console.warn(`${keyword} 的动画未及时完成，正在移除元素。`);
                flyingTokenElem.remove();
                resolve();
            }
        }, 1000);
        
        // 动画完成时，移除元素并解析 Promise
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

    // 如果槽位在屏幕外，目标位置应为 #known-keywords 容器的顶部或底部
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

    // 此时我们希望槽位是空的
    const currentScryKeyword = scryState[category];
    if (currentScryKeyword) {
        //console.warn(`类别 ${category} 的探知槽位包含 ${currentScryKeyword}，而我们要添加 ${keyword}。正在移除 ${currentScryKeyword}。`);
        showKeywordInTray(currentScryKeyword, category);
    }

    showKeywordInSlot(keyword, category);
    scryState[category] = keyword;
}

async function moveKeywordFromScrySlot(keyword, category) {
    if (!scryState[category] || scryState[category] !== keyword) {
        // 确保此关键词显示在托盘中
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
    //console.log(`在探知槽位中显示 ${category}:${keyword}`);
    const scrySlotElem = document.getElementById(`scry-${category}`);
    scrySlotElem.innerHTML = getKeywordInputContent(category, keyword);
    scrySlotElem.dataset.selected = `${category}:${keyword}`;
    scrySlotElem.classList.remove('empty');
}

function emptySlot(category) {
    //console.log(`清空类别 ${category} 的探知槽位`);
    const scrySlotElem = document.getElementById(`scry-${category}`);
    scrySlotElem.innerHTML = '';
    scrySlotElem.dataset.selected = '';
    scrySlotElem.classList.add('empty');
}

function showKeywordInTray(keyword, category) {
    //console.log(`在托盘中显示 ${category}:${keyword}`);
    const keywordElem = document.getElementById(`${category}:${keyword}`);
    keywordElem.classList.remove('selected');
}

function hideKeywordInTray(keyword, category) {
    //console.log(`在托盘中隐藏 ${category}:${keyword}`);
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
        
        // 按队伍编号、房间显示顺序、然后数字顺序排序
        results.sort((a, b) => {
            const aParts = a.split('.');
            const bParts = b.split('.');
            // 首先比较队伍编号
            if (aParts[0] !== bParts[0]) {
                return parseInt(aParts[0]) - parseInt(bParts[0]);
            }
            // 然后检查房间显示顺序
            if (aParts[1] !== bParts[1]) {
                const aRoomDisplayIndex = roomsInOrder.indexOf(ROOMS[aParts[1]]);
                const bRoomDisplayIndex = roomsInOrder.indexOf(ROOMS[bParts[1]]);
                return aRoomDisplayIndex - bRoomDisplayIndex;
            }
            // 最后按数字顺序比较其余部分
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

    // 如果至少有一个 #scry-slots .token 不是 .empty，就可以探知
    const hasSelection = document.querySelectorAll('#scry-slots .token:not(.empty)').length;
    document.getElementById("clear-button").classList.toggle("disabled", !hasSelection);
    document.getElementById("scry-button").classList.toggle("disabled", !hasSelection);
    document.getElementById("scry-button").dataset.filledSlots = hasSelection;
}

function handleBackButton()
{
    restoreHistory(historyIndex - 1);

    // 移除空的条目（如“无结果”消息）
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
    //console.log("记录历史:", key)
    if (history[historyIndex] && history[historyIndex].key == key)
    {
        //console.log("跳过重复");
        return;
    }

    history.splice(historyIndex + 1);
    
    // 移除空的条目（如“无结果”消息）
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
        //console.log("恢复历史:", history[index].key, "在索引", index, "共", history.length);
        
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

// 返回一个 div 列表，每个 div 显示场景的一个 peek
// isClickableMode=true 表示可以点击 peek 来解锁关键词。false 表示这是未发现场景的提示。
function getPeeks(sceneId, keywords, sceneImg, isClickableMode = false)
{
    // 可点击模式：比保存的坐标稍大
    // 提示模式：全高，宽度较小
    const [peekWidth, peekHeight] = isClickableMode ? [26, bannerHeight] : [14, bannerHeight];
    const leftAdjustment = (coordinateWidth - peekWidth) / 2;
    const topAdjustment = (coordinateHeight - peekHeight) / 2;

    let peeks = '';

    const coordinatesByKeyword = COORDINATES.scenes[sceneId]?.keywords || [];
    for (let keyword of keywords) {
        const category = getCategory(keyword);

        const coordinates = coordinatesByKeyword[keyword];
        if (!coordinates) {
            //console.warn(`场景 ${sceneId} 中关键词 ${keyword} 没有坐标`);
            continue;
        }

        const isClickablePeek = isClickableMode && category !== 'spell';
        const className = `peek ${isClickablePeek ? 'unlockable' : ''} ${category}`;

        let left = (coordinates.left + leftAdjustment) * scale;
        let top = (peekHeight >= bannerHeight ? 0 : coordinates.top + topAdjustment) * scale;
        let width = peekWidth * scale;
        let height = peekHeight * scale;

        // 限制数值范围
        left = Math.max(0, left);
        top = Math.max(0, top);
        width = Math.min(bannerWidth * scale - left, width);
        height = Math.min(bannerHeight * scale - top, height);

        // 对于可点击/可解锁的房间 peek，使用全宽和全高。这将位于其他 peek 下方。
        if (isClickablePeek && category === 'room') {
            left = 0;
            top = 0;
            width = bannerWidth * scale;
            height = bannerHeight * scale;
        }

        peeks += getPeek(keyword, sceneImg, className, scale, left, top, width, height);

        if (!isClickableMode) {
            // 在关键词 peek 旁边添加随机 peek
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

// 高度为 32 * 4
// 尝试将未见的提示缩小到 26 * 4 = 104px

// 随机添加窄的 peek，使提示更有趣
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
    const min = 12; // 每侧
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
            //console.log("重复标题:", title);
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
                //console.log("未知标签:", tag);
            }
        }
        const scene = {
            id: title,
            displayTitle: '',
            lines: [],
            tags: tags,
            unlocks: {}, // 提到的所有内容，目前与标签有重叠
            party: partyId,
        };

        // 从数字中获取房间，例如 1.3.1 是房间 3
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
        displayTitle: '<span class="room title">城堡</span>',
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
        displayTitle: "<span class='room title'>巫妖之间</span>",
        lines: [],
        tags: ['卡斯帕', '巫妖', '宝珠'],
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

        let parts = lineText.split("：");
        if (parts.length > 2) {
            //console.log("格式错误的行:", lineText);
            continue;
        }

        let speaker;
        if (parts.length == 2) {
            speaker = parts[0].trim();
            lineText = parts[1];
            if (CHARACTERS.includes(speaker)) {
                scene.unlocks[speaker] = true;
            }
            else if (speaker === "亡魂") {
                scene.unlocks['维恩'] = true; // 维恩就是亡魂
            }
        }
        
        // 注意：使用 highlight 类来高亮文本中的单词
        // TODO 清理这里的逻辑与 displayScene 中的逻辑

        // 角色通过其确切名称识别
        for (let character of CHARACTERS) {
            const charactersClickableInText = false;
            let className = charactersClickableInText ? "unlockable highlight character" : '';
            let replaced = lineText.replaceAll(character, `<span class="${className}" data-name="${character}">${character}</span>`);
            
            if (replaced != lineText) {
                lineText = replaced;
                scene.unlocks[character] = true;
            }
        }

        // 房间通过其标题识别
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

        // 法术以 {法术名称} 形式出现（施放），[法术名称] 形式出现（提及）。
        // 法术文本可能扩展规范名称，例如 奥术护符 = 护符
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

                // 完整性检查——施放的法术在标签中
                if (casting && !scene.tags.includes(spellName)) {
                    //console.log("施放的法术不在标签中:", match[1], "在场景", scene.id);
                }
            }
            else {
                //console.log("未知法术:", match[1]);
            }
        }

        // 第二个城堡场景的特殊情况，使获取费莉西蒂更容易
        if (scene.id === "intro2") {
            lineText = lineText.replaceAll(`在画像中`, `在 <span class="unlockable highlight character" data-name="费莉西蒂">画像</span> 中`);
        }
        
        scene.lines.push({
            speaker: speaker,
            text: lineText.trim(),
        });
    }

    // 完整性检查——所有标签（除了位置）都应该被提及（即在 unlocks 中）
    for (let tag of scene.tags) {
        if (!(tag in scene.unlocks)) {
            //console.log("标签未被提及:", tag, "在场景", scene.id);
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
        //console.log("游戏状态已保存:", gameState);
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

        //console.log("从 localStorage 加载游戏状态:", savedState);

        const allDiscovered = Object.keys(gameState.discoveredScenes)
            .concat(...Object.values(gameState.discoveredKeywords).map(obj => Object.keys(obj))
        );
        unlockFromList(allDiscovered);

        return gameState.currentSceneId;
    } catch (error) {
        console.error("加载游戏状态失败:", error);
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
