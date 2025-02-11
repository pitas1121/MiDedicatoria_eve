// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let title = document.querySelector("h1");
let paragraph = document.querySelector(".card p"); 
let container = document.querySelector(".container"); 
let soundNo = new Audio("Besos_Usados.mp3");
let soundYes = new Audio("cortado.mp3"); 
let imageSrc = "snoopyfeliz.jpg"; 

// Evento para el botón "Sí"
yesButton.addEventListener("click", function () {
  console.log("¡Botón 'Sí' presionado!"); // Verificar que el evento se ejecuta

  // Detener la música triste
  soundNo.pause();
  soundNo.currentTime = 0;

  // Reproducir la música feliz
  soundYes.play();

  // Ocultar el fondo y el contenido
  document.body.style.backgroundImage = "none"; 
  container.style.display = "none";
  message.style.display = "none";
  noButton.style.display = "none";
  yesButton.style.display = "none";

  // Crear un contenedor para centrar el mensaje y la imagen
  let contentWrapper = document.createElement("div");
  contentWrapper.style.position = "fixed";
  contentWrapper.style.top = "50%";
  contentWrapper.style.left = "50%";
  contentWrapper.style.transform = "translate(-50%, -50%)";
  contentWrapper.style.textAlign = "center";
  contentWrapper.style.color = "white";

  // Crear un mensaje bonito arriba de la imagen
  let happyMessage = document.createElement("h2");
  happyMessage.innerText = "¡Sabía que dirías que sí! ❤️";
  happyMessage.style.fontSize = "2rem";
  happyMessage.style.fontFamily = "Arial, sans-serif";
  happyMessage.style.textShadow = "2px 2px 5px rgba(0,0,0,0.5)";

  // Crear y mostrar la imagen en pantalla
  let happyImage = document.createElement("img");
  happyImage.src = imageSrc;
  happyImage.style.width = "60vw";
  happyImage.style.borderRadius = "20px"; 
  happyImage.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.5)";
  happyImage.style.marginTop = "20px"; 

  // Agregar elementos al contenedor y luego a la página
  contentWrapper.appendChild(happyMessage);
  contentWrapper.appendChild(happyImage);
  document.body.appendChild(contentWrapper);
});













