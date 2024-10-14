// JavaScript para personalizar el comportamiento del reproductor de video
const video = document.getElementById('myVideo');
const videoContainer = document.querySelector('.video-container');

// Pausar el video al hacer clic fuera del contenedor
document.addEventListener('click', function(event) {
  if (!videoContainer.contains(event.target)) {
    video.pause();
  }
});

// Puedes agregar más funcionalidad aquí, como cambiar el tamaño del video al hacer clic en un botón, etc.
