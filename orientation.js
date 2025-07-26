function checkOrientation() {
    const warning = document.getElementById("orientation-warning");
    const content = document.getElementById("main-content");

    if (window.innerWidth > window.innerHeight) {
        // Landscape
        warning.style.display = "block";
        content.style.display = "none";
    } else {
        // Portrait
        warning.style.display = "none";
        content.style.display = "block";
    }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);