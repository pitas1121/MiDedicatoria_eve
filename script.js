// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let title = document.querySelector("h1");
let paragraph = document.querySelector(".card p"); // Selecciona el párrafo principal
let container = document.querySelector(".container"); // Contenedor principal
let backgroundImages = ["gatoxd.jpg", "tite.jpeg", "wtf.jpeg"];
let messages = ["¿Estás segura de esto?", "Piensa bien tu decisión...", "Todavía puedes cambiar de opinión...", "Esto duele... 💔", "No lo hagas... 😭", "Me estás rompiendo el corazón..."];
let soundNo = new Audio("Besos_Usados.mp3");
let soundYes = new Audio("cortado.mp3"); // Sonido cuando presionan "Sí"
let imageSrc = "snoopyfeliz.jpg"; // Imagen para cuando presionen "Sí"
let currentImageIndex = 0;
let currentMessageIndex = 0;
let growthFactor = 1.2;
let firstClick = true;

// Evento para el botón "No"
noButton.addEventListener("click", function () {
  document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;

  if (firstClick) {
    title.style.display = "none";
    paragraph.style.display = "none";
    message.innerText = messages[currentMessageIndex];
    soundNo.play();
    firstClick = false;
  } else {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    message.innerText = messages[currentMessageIndex];

    let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let newFontSize = currentFontSize * growthFactor;
    yesButton.style.fontSize = newFontSize + "px";
    yesButton.style.padding = `${newFontSize / 3}px ${newFontSize / 2}px`;

    if (newFontSize > 100) {
      noButton.style.display = "none";
    }
  }
});

// Evento para el botón "Sí"
yesButton.addEventListener("click", function () {
  // Detener la música triste
  soundNo.pause();
  soundNo.currentTime = 0;

  // Reproducir la música feliz
  soundYes.play();

  // Ocultar todo el contenido de la página
  container.style.display = "none";

  // Crear un mensaje bonito arriba de la imagen
  let happyMessage = document.createElement("h2");
  happyMessage.innerText = "¡Sabía que dirías que sí! ❤️";
  happyMessage.style.position = "fixed";
  happyMessage.style.top = "10%";
  happyMessage.style.left = "50%";
  happyMessage.style.transform = "translateX(-50%)";
  happyMessage.style.color = "white";
  happyMessage.style.fontSize = "2rem";
  happyMessage.style.fontFamily = "Arial, sans-serif";
  happyMessage.style.textShadow = "2px 2px 5px rgba(0,0,0,0.5)";
  document.body.appendChild(happyMessage);

  // Crear y mostrar la imagen en pantalla
  let happyImage = document.createElement("img");
  happyImage.src = imageSrc;
  happyImage.style.position = "fixed";
  happyImage.style.top = "50%";
  happyImage.style.left = "50%";
  happyImage.style.transform = "translate(-50%, -50%)";
  happyImage.style.width = "60vw"; // Ajustar el tamaño de la imagen
  happyImage.style.borderRadius = "20px"; // Bordes redondeados
  happyImage.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.5)";
  document.body.appendChild(happyImage);
});

// Evento para el botón "Tócame"
document.getElementById("discover").addEventListener("click", function () {
  document.getElementById("message").style.display = "block";
  document.getElementById("options").style.display = "flex";
  this.style.display = "none";
});












