// Selecciona el botón y el mensaje oculto
const revealButton = document.getElementById("revealButton");
const hiddenMessage = document.getElementById("hiddenMessage");

// Agrega un evento al botón
revealButton.addEventListener("click", () => {
    hiddenMessage.classList.toggle("hidden");
    revealButton.textContent = hiddenMessage.classList.contains("hidden")
        ? "Descubre el mensaje"
        : "Ocultar el mensaje";
});
