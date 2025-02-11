// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    let discoverButton = document.getElementById("discover");
    let message = document.getElementById("message");
    let options = document.getElementById("options");
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    let container = document.querySelector(".container");

    let soundNo = new Audio("Besos_Usados.mp3");
    let soundYes = new Audio("cortado.mp3");
    let imageSrc = "snoopyfeliz.jpg";

    let backgroundImages = ["gatoxd.jpg", "tite.jpeg", "wtf.jpeg"];
    let messages = [
        "¿Estás segura de esto?",
        "Piensa bien tu decisión...",
        "Todavía puedes cambiar de opinión...",
        "Esto duele... 💔",
        "No lo hagas... 😭",
        "Me estás rompiendo el corazón..."
    ];

    let currentImageIndex = 0;
    let currentMessageIndex = 0;
    let growthFactor = 1.2;
    let firstClick = true;

    console.log("Script cargado correctamente."); // Verificar si el JS se carga

    // Evento para el botón "Tócame"
    discoverButton.addEventListener("click", function () {
        console.log("Botón 'Tócame' presionado");
        message.style.display = "block";
        options.style.display = "flex";
        this.style.display = "none";
    });

    // Evento cuando se presiona "No"
    noButton.addEventListener("click", function () {
        console.log("Botón 'No' presionado");
        document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";

        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;

        if (firstClick) {
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

    // Evento cuando se presiona "Sí"
    yesButton.addEventListener("click", function () {
        message.style.display = "none"; // Oculta los mensajes de "No"
        console.log("Botón 'Sí' presionado");

        // Detener la música triste
        soundNo.pause();
        soundNo.currentTime = 0;

        // Reproducir la música feliz
        soundYes.play();

        // Ocultar todos los elementos dentro del contenedor
        container.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
        message.style.display = "none";

        // Crear un nuevo contenedor para la imagen y mensaje
        let contentWrapper = document.createElement("div");
        contentWrapper.id = "celebration";
        contentWrapper.style.position = "fixed";
        contentWrapper.style.top = "50%";
        contentWrapper.style.left = "50%";
        contentWrapper.style.transform = "translate(-50%, -50%)";
        contentWrapper.style.textAlign = "center";
        contentWrapper.style.color = "white";
        contentWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        contentWrapper.style.padding = "30px";
        contentWrapper.style.borderRadius = "15px";
        contentWrapper.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.5)";

        // Crear mensaje bonito de confirmación
        let happyMessage = document.createElement("h2");
        happyMessage.innerText = "¡Sabía que dirías que sí! ❤️";
        happyMessage.style.fontSize = "2rem";
        happyMessage.style.fontFamily = "Arial, sans-serif";
        happyMessage.style.marginBottom = "20px";

        // Crear imagen centrada
        let happyImage = document.createElement("img");
        happyImage.src = imageSrc;
        happyImage.alt = "Imagen de celebración";
        happyImage.style.width = "300px";
        happyImage.style.borderRadius = "20px";
        happyImage.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.
                // Nuevo mensaje bonito sobre la imagen
    let loveMessage = document.createElement("p");
    loveMessage.innerHTML = "Te quiero mucho, Eve 💖💕";
    loveMessage.style.fontSize = "1.5rem";
    loveMessage.style.fontFamily = "cursive";
    loveMessage.style.marginTop = "20px";
    loveMessage.style.animation = "fadeIn 3s ease-in-out infinite alternate";

    // Agregar animación en CSS
    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0.3; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Agregar elementos al contenedor y luego al body
    contentWrapper.appendChild(happyMessage);
    contentWrapper.appendChild(happyImage);
    contentWrapper.appendChild(loveMessage);
    document.body.appendChild(contentWrapper);
});











