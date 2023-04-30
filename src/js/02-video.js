/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = data => {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
const throttleOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttleOnPlay);
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedSavedTime = JSON.parse(savedTime);

player
  .setCurrentTime(parsedSavedTime)
  .then(seconds => {})
  .catch(error => {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
