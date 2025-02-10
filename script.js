// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let title = document.querySelector("h1");
let paragraph = document.querySelector(".card p"); // Selecciona el párrafo del mensaje principal
let backgroundImages = ["gatoxd.jpg", "tite.jpeg", "wtf.jpeg"]; // Imágenes en orden
let sound = new Audio("Besos_Usados.mp3"); // Sonido de fondo
let currentImageIndex = 0;
let growthFactor = 1.2; // Factor de crecimiento del botón "Sí"
let firstClick = true; // Para controlar el primer clic

// Evento para el botón "No"
noButton.addEventListener("click", function () {
  if (firstClick) {
    // Ocultar el título y el párrafo principal la primera vez que se presiona "No"
    title.style.display = "none";
    paragraph.style.display = "none";

    // Cambiar el mensaje inicial
    message.innerText = "¿Estás segura de esto?";

    firstClick = false; // Ya no es el primer clic
  } else {
    // En los siguientes clics, cambiar el mensaje de fondo
    message.innerText = "¡¿Cómo pudiste?! 😭";

    // Cambiar la imagen de fondo (cicla entre las imágenes)
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;

    // Hacer crecer el botón "Sí" de manera proporcional
    let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let newFontSize = currentFontSize * growthFactor;

    yesButton.style.fontSize = newFontSize + "px";
    yesButton.style.padding = `${newFontSize / 3}px ${newFontSize / 2}px`; // Ajuste proporcional

    // Reproducir sonido (reinicia en cada clic)
    sound.currentTime = 0;
    sound.play();

    // Si el botón "Sí" es demasiado grande, ocultar el botón "No"
    if (newFontSize > 100) {
      noButton.style.display = "none";
    }
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




