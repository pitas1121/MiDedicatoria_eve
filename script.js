// Evento para el botón "Tócame"
document.getElementById("discover").addEventListener("click", function () {
  // Mostrar el mensaje y los botones
  document.getElementById("message").style.display = "block";
  document.getElementById("options").style.display = "flex";

  // Ocultar el botón principal
  this.style.display = "none";
});

// Evento para el botón "Sí"
document.getElementById("yes").addEventListener("click", function () {
  alert("¡Gracias! 💖 Eres la mejor decisión que he tomado.");
});

// Evento para el botón "No"
document.getElementById("no").addEventListener("click", function () {
  alert("Oh, está bien... 😢 Siempre serás especial.");
});

