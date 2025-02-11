// Selección de elementos
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let message = document.getElementById("message");
let container = document.querySelector(".container"); 
let soundNo = new Audio("Besos_Usados.mp3");
let soundYes = new Audio("cortado.mp3"); 
let imageSrc = "snoopyfeliz.jpg"; 

// Evento para el botón "Sí"
yesButton.addEventListener("click", function () {
  console.log("Botón 'Sí' presionado"); // Verificar si el evento se ejecuta

  // 1️⃣ Detener la música triste
  soundNo.pause();
  soundNo.currentTime = 0;

  // 2️⃣ Reproducir la música feliz
  soundYes.play();

  // 3️⃣ Ocultar todos los elementos dentro del contenedor
  container.style.display = "none";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  message.style.display = "none";

  // 4️⃣ Crear un nuevo contenedor para la imagen y mensaje
  let contentWrapper = document.createElement("div");
  contentWrapper.id = "celebration";
  contentWrapper.style.position = "fixed";
  contentWrapper.style.top = "50%";
  contentWrapper.style.left = "50%";
  contentWrapper.style.transform = "translate(-50%, -50%)";
  contentWrapper.style.textAlign = "center";
  contentWrapper.style.color = "white";
  contentWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Fondo oscuro semitransparente
  contentWrapper.style.padding = "30px";
  contentWrapper.style.borderRadius = "15px";
  contentWrapper.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.5)";

  // 5️⃣ Crear mensaje bonito de confirmación
  let happyMessage = document.createElement("h2");
  happyMessage.innerText = "¡Sabía que dirías que sí! ❤️";
  happyMessage.style.fontSize = "2rem";
  happyMessage.style.fontFamily = "Arial, sans-serif";
  happyMessage.style.marginBottom = "20px";

  // 6️⃣ Crear imagen centrada
  let happyImage = document.createElement("img");
  happyImage.src = imageSrc;
  happyImage.alt = "Imagen de celebración";
  happyImage.style.width = "300px"; // Tamaño de la imagen
  happyImage.style.borderRadius = "20px"; 
  happyImage.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.5)";

  // 7️⃣ Agregar elementos al contenedor y luego al body
  contentWrapper.appendChild(happyMessage);
  contentWrapper.appendChild(happyImage);
  document.body.appendChild(contentWrapper);
});












