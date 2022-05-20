'use strict';
const btnStop = document.querySelector('.pause');
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDisp = document.querySelector('.timer-display');
let int = null;

btnStart.addEventListener('click', function () {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

btnStop.addEventListener('click', function () {
  clearInterval(int);
});

btnReset.addEventListener('click', function () {
  clearInterval(int);
  timerDisp.innerHTML = '00 : 00 : 00 : 000';
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
});

const displayTimer = function () {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms =
    milliseconds < 10
      ? '00' + milliseconds
      : milliseconds < 100
      ? '0' + milliseconds
      : milliseconds;

  timerDisp.innerHTML = `${h} : ${m} : ${s} : ${ms} `;
};
