document.addEventListener('DOMContentLoaded', function () {
    const audioElement = document.getElementById('background-music');
    const musicIcon = document.getElementById('music-icon');
    const musicControl = document.getElementById('music-control');

    // Inicializa o volume bem baixo (10%) e toca a música automaticamente
    audioElement.volume = 0.1;
    audioElement.play().catch(function(error) {
        // Caso a música não toque automaticamente, podemos tentar tocar quando o usuário interagir
        console.log('Erro ao iniciar música automaticamente:', error);
    });

    // Função para alternar a música
    musicControl.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            musicIcon.style.filter = "brightness(100%)";  // Restaura a cor normal do ícone
        } else {
            audioElement.pause();
            musicIcon.style.filter = "brightness(50%)";  // Escurece o ícone para indicar que está pausado
        }
    });
});
