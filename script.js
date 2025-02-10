// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let title = document.querySelector("h1");
let paragraph = document.querySelector(".card p"); // Selecciona el párrafo principal
let backgroundImages = ["gatoxd.jpg", "tite.jpeg", "wtf.jpeg"]; // Imágenes en orden
let messages = ["¿Estás segura de esto?", "Piensa bien tu decisión...", "Todavía puedes cambiar de opinión...", "Esto duele... 💔", "No lo hagas... 😭", "Me estás rompiendo el corazón..."]; // Mensajes en orden
let sound = new Audio("Besos_Usados.mp3"); // Sonido de fondo
let currentImageIndex = 0;
let currentMessageIndex = 0;
let growthFactor = 1.2; // Factor de crecimiento del botón "Sí"
let firstClick = true; // Para controlar el primer clic

// Evento para el botón "No"
noButton.addEventListener("click", function () {
  // Cambiar la imagen de fondo en cada clic (incluido el primero)
  document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Rotar imágenes

  if (firstClick) {
    // Ocultar el título y el párrafo principal en el primer clic
    title.style.display = "none";
    paragraph.style.display = "none";

    // Cambiar el mensaje inicial
    message.innerText = messages[currentMessageIndex];

    // Reproducir música
    sound.play();

    firstClick = false; // Ya no es el primer clic
  } else {
    // Cambiar el mensaje en cada clic
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    message.innerText = messages[currentMessageIndex];

    // Hacer crecer el botón "Sí"
    let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let newFontSize = currentFontSize * growthFactor;

    yesButton.style.fontSize = newFontSize + "px";
    yesButton.style.padding = `${newFontSize / 3}px ${newFontSize / 2}px`; // Ajuste proporcional

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






