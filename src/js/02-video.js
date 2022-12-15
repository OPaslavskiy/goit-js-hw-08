import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', currentTime);

function currentTime(evt) {
  throttle(JSON.stringify(localStorage.setItem(TIME_KEY, evt.seconds)), 1000);
}

try {
  player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)));
} catch (error) {
  player.setCurrentTime(0);
}
