const introOverlay = document.getElementById("intro-modal-overlay");
const introText = document.getElementById("intro-text");
const endOverlay = document.getElementById("end-modal-overlay");
const endText = document.getElementById("end-text");
const musicVolumeSlider = document.getElementById("music-volume-slider");
const musicMuteButton = document.getElementById("music-mute-button");

const backgroundMusic = new Audio("sound/Puzzle Music Mega Cut.mp3");

let musicStarted = false;
const savedVolume = readTrevosaDataSection("settings")?.musicVolume;
let musicVolume = savedVolume != null ? savedVolume : 5;
let previousVolume = musicVolume > 0 ? musicVolume : 5;

backgroundMusic.loop = true;
backgroundMusic.preload = "auto";
backgroundMusic.volume = musicVolume / 10;

function init() {
    initDocuments();
    initTree();
    initIntroModal();
    initMusicControls();
}

function clearData() {
    if (confirm("Clear saved data and restart?")) {
        localStorage.removeItem(storageKey);
        location.reload();
    }
}

function initMusicControls() {
    if (!musicVolumeSlider) {
        return;
    }

    musicVolumeSlider.value = musicVolume;
    syncMuteButton();
    musicVolumeSlider.addEventListener("input", onMusicVolumeChange);
    musicMuteButton.addEventListener("click", onMusicMuteClick);
}

function persistSettings() {
    writeTrevosaDataSection("settings", {
        musicVolume,
    });
}

function syncMuteButton() {
    const muted = musicVolume === 0;
    musicMuteButton.classList.toggle("is-muted", muted);
    musicMuteButton.setAttribute("aria-label", muted ? "Unmute music" : "Mute music");
    musicMuteButton.title = muted ? "Unmute music" : "Mute music";
}

function onMusicVolumeChange() {
    musicVolume = Number(musicVolumeSlider.value);
    if (musicVolume > 0) {
        previousVolume = musicVolume;
    }
    applyMusicVolume();
}

function onMusicMuteClick() {
    if (musicVolume > 0) {
        previousVolume = musicVolume;
        musicVolume = 0;
    } else {
        musicVolume = previousVolume > 0 ? previousVolume : 10;
    }
    applyMusicVolume();
}

function applyMusicVolume() {
    musicVolumeSlider.value = musicVolume;
    backgroundMusic.volume = musicVolume / 10;
    syncMuteButton();
    persistSettings();

    if (musicVolume > 0) {
        startBackgroundMusic();
    }
}

function startBackgroundMusic() {
    if (musicStarted) {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {});
        }

        return;
    }

    musicStarted = true;
    backgroundMusic.play().catch(() => {
        musicStarted = false;
    });
}

function onFirstInteraction() {
    document.removeEventListener("click", onFirstInteraction);
    if (musicVolume > 0) {
        startBackgroundMusic();
    }
}

document.addEventListener("click", onFirstInteraction);



function initIntroModal() {
    if (keyDocs.intro.discovered) {
        return;
    }
    document.body.classList.add("modal-open");
    introOverlay.classList.add("is-open");
    introText.innerHTML = renderDocContent(keyDocs.intro.content);
    markAsDiscovered(keyDocs.intro);
}

function dismissIntroModal() {
    if (!introOverlay) {
        return;
    }

    introOverlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    renderDocumentViews();
}

function showEndModal() {
    if (keyDocs.end.discovered) {
        return;
    }
    document.body.classList.add("modal-open");
    endOverlay.classList.add("is-open");
    endText.innerHTML = renderDocContent(keyDocs.end.content);
    markAsDiscovered(keyDocs.end);
}

function dismissEndModal() {
    if (!endOverlay) {
        return;
    }

    endOverlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    renderDocumentViews();
}

init();