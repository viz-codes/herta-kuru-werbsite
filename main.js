mp3 = ["mp3/kuru1.mp3", "mp3/kuru2.mp3", /*"mp3/kuru3.mp3"*/]

function squishkuru() {
    var container = document.getElementById("images");
    var gif = document.createElement("img");
    var sound = document.createElement("audio");
    var chosen = mp3[mp3.length * Math.random() | 0];
    sound.src = chosen;
    sound.autoplay = true;
    sound.className = "sound";
    gif.src = "herta.gif";
    gif.className = "animated";
    container.appendChild(gif);
    container.appendChild(sound);

    setTimeout(function() {
        container.removeChild(gif);
        container.removeChild(sound);
    }, 1500);
}