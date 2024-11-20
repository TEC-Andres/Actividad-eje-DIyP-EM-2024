// Main page animation (index.html)
const enterButton = document.getElementById("enterButton");
const cover = document.getElementById("cover");

if (enterButton) {
    enterButton.addEventListener("click", () => {
        // Bring the cover to the foreground for transition
        cover.style.zIndex = "10";
        
        // Trigger the fade-in animation
        requestAnimationFrame(() => {
            cover.style.opacity = "1"; // Start fade-in animation

            // After the animation, redirect to the calendar page
            setTimeout(() => {
                window.location.href = "pages/calendar.html"; 
            }, 700); // Match the CSS transition duration (0.7s)
        });
    });
}
