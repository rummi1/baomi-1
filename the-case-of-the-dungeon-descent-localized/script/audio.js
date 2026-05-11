let sfx = {};
function initSounds() {
    // TODO: Get some sounds and play them with play(sfx.key)
    sfx = {
        win: newSound('320775__rhodesmas__win-02.wav', 0.5),
    }
}

function newSound(filename, vol=1, loop=false) {
    let audio = new Audio(`./audio/${filename}`);
    audio.loop = loop;
    audio.volume=vol;
    return audio;
}

function play(sound) {
    if (sound && playSounds) {
        let toPlay = sound;
        if (!sound.loop) {
            toPlay = sound.cloneNode(); // so multiple can play at once
            toPlay.volume = sound.volume;
        }
        toPlay.play();
    }
}

function stop(sound) {
    sound.pause();
}