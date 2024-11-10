const music = document.getElementById('backgroundMusic');
const volumeControl = document.getElementById('volumeControl');
const playPauseButton = document.getElementById('playPauseButton');
const viewCount = document.getElementById('viewCount');

music.volume = 0.5;
music.play();

let isPlaying = true;
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        playPauseButton.textContent = '🔈';
    } else {
        music.play();
        playPauseButton.textContent = '🔊';
    }
    isPlaying = !isPlaying;
});

let count = localStorage.getItem('viewCount') || 0;
count++;
localStorage.setItem('viewCount', count);
viewCount.textContent = count;
