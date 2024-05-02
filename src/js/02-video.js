import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const currentTimeFromStorage = () => {
  const timeFromStorage = localStorage.getItem('videoplayer-current-time');
  if (timeFromStorage) {
    player.setCurrentTime(parseFloat(timeFromStorage));
  }
};

window.addEventListener('DOMContentLoaded', currentTimeFromStorage);

player.on('timeupdate', data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});
