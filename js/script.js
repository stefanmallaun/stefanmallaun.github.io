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