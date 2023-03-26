import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const VIDEOPLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME_KEY));

player.on('timeupdate', throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem(VIDEOPLAYER_CURRENT_TIME_KEY, seconds);
    });
  }, 1000)
);

