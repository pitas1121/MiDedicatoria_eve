let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let backgroundImages = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]; // Agrega más imágenes
let sound = new Audio("Besos_Usados.mp3"); // Agrega un sonido de tristeza
let currentImageIndex = 0;
let growthFactor = 1.2; // Factor de crecimiento del botón "Sí"

// Evento para el botón "No"
noButton.addEventListener("click", function () {
  // Cambiar el mensaje
  message.innerText = "¡¿Cómo pudiste?! 😭";

  // Reproducir sonido
  sound.play();

  // Cambiar la imagen de fondo
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;

  // Hacer crecer el botón "Sí"
  let currentSize = window.getComputedStyle(yesButton).fontSize;
  let newSize = parseFloat(currentSize) * growthFactor + "px";
  yesButton.style.fontSize = newSize;
  yesButton.style.padding = "15px 30px"; // Para que crezca proporcionalmente

  // Si el botón "Sí" es demasiado grande, ocultar el botón "No"
  if (parseFloat(newSize) > 100) {
    noButton.style.display = "none";
  }
});

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

