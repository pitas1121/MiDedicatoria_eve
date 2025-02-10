// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let backgroundImages = ["gatoxd.jpg", "tite.jpeg", "wtf.jpeg"]; // Imágenes en orden
let sound = new Audio("Besos_Usados.mp3"); // Sonido de fondo
let currentImageIndex = 0;
let growthFactor = 1.2; // Factor de crecimiento del botón "Sí"

// Evento para el botón "No"
noButton.addEventListener("click", function () {
  // Cambiar el mensaje de fondo
  message.innerText = "¡¿Cómo pudiste?! 😭";

  // Reproducir sonido (reinicia en cada clic)
  sound.currentTime = 0;
  sound.play();

  // Cambiar la imagen de fondo (cicla entre las imágenes)
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;

  // Hacer crecer el botón "Sí" de manera proporcional
  let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  let newFontSize = currentFontSize * growthFactor;
  
  yesButton.style.fontSize = newFontSize + "px";
  yesButton.style.padding = `${newFontSize / 3}px ${newFontSize / 2}px`; // Ajuste proporcional

  // Si el botón "Sí" es demasiado grande, ocultar el botón "No"
  if (newFontSize > 100) {
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



