const demoButton = document.getElementById("demoButton");

if (demoButton) {
    demoButton.addEventListener("click", function () {
        alert("Vielen Dank für Ihr Interesse an LogiFlow!");
    });
}

const toggleButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    const expanded =
        toggleButton.getAttribute("aria-expanded") === "true";

    toggleButton.setAttribute(
        "aria-expanded",
        !expanded
    );
});

const form = document.getElementById("contact");
const sound = document.getElementById("submitSound");

if (form) {
form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    sound.currentTime = 0;
    sound.play();

    
    setTimeout(() => {
        form.submit(); 
    }, 300);
});
}

