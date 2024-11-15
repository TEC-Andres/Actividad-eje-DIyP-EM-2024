// Main page animation (index.html)
const enterButton = document.getElementById("enterButton");
const cover = document.getElementById("cover");

if (enterButton) {
    enterButton.addEventListener("click", () => {
        // Bring the cover to the foreground
        cover.style.zIndex = "10";
        
        // Ensure the opacity transition is triggered properly
        requestAnimationFrame(() => {
            cover.style.opacity = "1"; // Start fade-in animation

            // After the animation, redirect to the next page
            setTimeout(() => {
                window.location.href = "calendar.html"; 
            }, 700); // Match the CSS transition duration (0.7s)
        });
    });
}

// Ease-out animation on page load (all pages)
window.addEventListener("DOMContentLoaded", () => {
    // Hide the cover until activated
    cover.style.zIndex = "-1";
    
    // Start the ease-out transition on page load
    requestAnimationFrame(() => {
        cover.style.opacity = "0"; // Fade out cover
    });
});
