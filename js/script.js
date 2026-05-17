const demoButton = document.getElementById("demoButton");

if (demoButton) {
    demoButton.addEventListener("click", function () {
        alert("Vielen Dank für Ihr Interesse an LogiFlux!");
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

document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("notaccept-cookies");

    const status = localStorage.getItem("cookiesAccepted");

    // Wenn schon entschieden → Banner ausblenden
    if (status === "true") {
        banner.style.display = "none";
    }

    // Cookies akzeptieren
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });

    // Cookies ablehnen
    rejectBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "false");
        banner.style.display = "none";
    });
});

