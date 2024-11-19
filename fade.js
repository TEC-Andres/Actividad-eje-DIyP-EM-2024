// Universal Fade-Out Animation for All Pages
window.addEventListener("DOMContentLoaded", () => {
    const cover = document.getElementById("cover");

    // Start the fade-out animation on page load
    requestAnimationFrame(() => {
        cover.style.opacity = "0"; // Fade out
    });

    // Move the cover to the background after the fade-out animation
    cover.addEventListener("transitionend", () => {
        if (getComputedStyle(cover).opacity === "0") {
            cover.style.zIndex = "-1"; // Allow page interaction
        }
    });
});
