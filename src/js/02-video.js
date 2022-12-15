import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', currentTime);

function currentTime(evt) {
  throttle(localStorage.setItem('videoplayer-current-time', evt.seconds), 1000);
}

try {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  player.setCurrentTime(0);
}
