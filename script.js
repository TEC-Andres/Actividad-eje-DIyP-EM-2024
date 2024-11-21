const enterButton = document.getElementById("enterButton");
const overlayButton = document.getElementById("overlayButton");
const cover = document.getElementById("cover");

if (enterButton) {
    enterButton.addEventListener("click", () => {
        cover.style.zIndex = "10";
        
        requestAnimationFrame(() => {
            cover.style.opacity = "1"; 

            setTimeout(() => {
                window.location.href = "calendar/calendar.html"; 
            }, 700);
        });
    });
}

if (overlayButton) {
    overlayButton.addEventListener("click", () => {
        window.location.href = "intro/introduction.html";
    });
}
