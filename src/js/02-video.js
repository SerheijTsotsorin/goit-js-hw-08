import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

function onPlayerTimeUpdate(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
};

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime);
};
