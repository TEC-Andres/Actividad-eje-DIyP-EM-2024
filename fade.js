window.addEventListener("DOMContentLoaded", () => {
    const cover = document.getElementById("cover");

    requestAnimationFrame(() => {
        cover.style.opacity = "0";
    });

    cover.addEventListener("transitionend", () => {
        if (getComputedStyle(cover).opacity === "0") {
            cover.style.zIndex = "-1";
        }
    });
});
