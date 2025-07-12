let timer;
let isRunning = false;
let seconds = 0;

const rainSound = document.getElementById('rain-sound');
const birdsSound = document.getElementById('birds-sound');
const waterSound = document.getElementById('water-sound');
const windSound = document.getElementById('wind-sound');
const fireSound = document.getElementById('fire-sound');

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
    document.querySelector('.start-btn').disabled = true;
    document.querySelector('.stop-btn').disabled = false;
  }
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
  document.querySelector('.start-btn').disabled = false;
  document.querySelector('.stop-btn').disabled = true;
}

function updateTime() {
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  document.getElementById('time-display').innerText =
    `${minutes < 10 ? '0' + minutes : minutes}:${displaySeconds < 10 ? '0' + displaySeconds : displaySeconds}`;
}

function adjustVolume() {
  const rainVolume = parseFloat(document.getElementById('rain').value);
  const birdsVolume = parseFloat(document.getElementById('birds').value);
  const waterVolume = parseFloat(document.getElementById('water').value);
  const windVolume = parseFloat(document.getElementById('wind').value);
  const fireVolume = parseFloat(document.getElementById('fire').value);

  rainSound.volume = rainVolume;
  birdsSound.volume = birdsVolume;
  waterSound.volume = waterVolume;
  windSound.volume = windVolume;
  fireSound.volume = fireVolume;

  rainVolume > 0 ? rainSound.play() : rainSound.pause();
  birdsVolume > 0 ? birdsSound.play() : birdsSound.pause();
  waterVolume > 0 ? waterSound.play() : waterSound.pause();
  windVolume > 0 ? windSound.play() : windSound.pause();
  fireVolume > 0 ? fireSound.play() : fireSound.pause();
}
