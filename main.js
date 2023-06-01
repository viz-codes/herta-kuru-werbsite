function squishkuru() {
    var container = document.getElementById("images");
    var gif = document.createElement("img");
    gif.src = "herta.gif";
    gif.className = "animated";
    //gif.style.zIndex = container.querySelectorAll("img").length + 1;
    container.appendChild(gif);

    setTimeout(function() {
        container.removeChild(gif);
    }, 2000);
}