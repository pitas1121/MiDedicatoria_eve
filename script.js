// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let title = document.querySelector("h1");
let paragraph = document.querySelector(".card p");
let backgroundImages = ["gatoxd.jpg", "tite.jpeg", "wtf.jpeg"]; // Imágenes cuando presionas "No"
let messages = ["¿Estás segura de esto?", "Piensa bien tu decisión...", "Todavía puedes cambiar de opinión...", "Esto duele... 💔", "No lo hagas... 😭", "Me estás rompiendo el corazón..."]; // Mensajes cuando presionas "No"
let soundNo = new Audio("Besos_Usados.mp3"); // Canción triste para el "No"
let soundYes = new Audio("Felicidad.mp3"); // Canción feliz para el "Sí"
let videoSrc = "video_feliz.mp4"; // Video cuando presionas "Sí"
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

  // Reproducir la canción feliz
  soundYes.play();

  // Ocultar el fondo y los botones
  document.body.style.backgroundImage = "none";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  message.innerText = "¡Sabía que dirías que sí! 💖✨";

  // Crear el video y agregarlo al body
  let video = document.createElement("video");
  video.src = videoSrc;
  video.autoplay = true;
  video.controls = true;
  video.style.position = "fixed";
  video.style.top = "50%";
  video.style.left = "50%";
  video.style.transform = "translate(-50%, -50%)";
  video.style.width = "80vw";
  video.style.height = "auto";
  document.body.appendChild(video);
});








