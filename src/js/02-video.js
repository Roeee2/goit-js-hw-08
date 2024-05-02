import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);
const currentTime = local.Storage.getItem('currentTime');

if (currentTIme) {
  player.setCurrentTime(Number.parseFloat(currentTime));
}

player.on('timeupdate', data => {
  localStorage.setItem('currentTime', data.seconds);
});
