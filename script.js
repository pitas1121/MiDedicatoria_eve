document.getElementById("discover").addEventListener("click", function () {
  // Cambiar visibilidad del mensaje y botones
  document.getElementById("message").style.display = "block";
  document.getElementById("options").style.display = "flex";

  // Ocultar el botón principal
  this.style.display = "none";
});

document.getElementById("yes").addEventListener("click", function () {
  alert("¡Gracias! 💖 Eres la mejor decisión que he tomado.");
});

document.getElementById("no").addEventListener("click", function () {
  alert("Oh, está bien... 😢 Siempre serás especial.");

// Selecciona el botón y el mensaje oculto
const revealButton = document.getElementById("revealButton");
const hiddenMessage = document.getElementById("hiddenMessage");

// Agrega un evento al botón
revealButton.addEventListener("click", () => {
    // Cambia la visibilidad del mensaje
    hiddenMessage.classList.toggle("hidden");

    // Cambia el texto del botón
    revealButton.textContent = hiddenMessage.classList.contains("hidden")
        ? "Descubre el mensaje"
        : "Ocultar el mensaje";
});
