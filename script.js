// ========== AOS Animation ==========
AOS.init();

// ========== Typing Effect ==========
if (document.getElementById("typing-text")) {
    var typed = new Typed("#typing-text", {
        strings: [
            "Python",
            "Web Developer 💻",
            "UI/UX Learner 🎨",
            "JavaScript Explorer ⚡",
            "Django Enthusiast 🐍",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
    });
}

// ========== Dark Mode Toggle ==========
const toggle = document.getElementById("darkToggle");
if (toggle) {
    const icon = toggle.querySelector("i");

    // Function to apply mode
    function applyMode(mode) {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            document.body.classList.remove("dark-mode");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem("mode") || "light";
    applyMode(savedMode);

    // Toggle mode on click
    toggle.addEventListener("click", () => {
        const currentMode = document.body.classList.contains("dark-mode") ? "dark" : "light";
        const newMode = currentMode === "dark" ? "light" : "dark";
        localStorage.setItem("mode", newMode);
        applyMode(newMode);
    });
}
