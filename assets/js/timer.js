let time = 5 * 60 * 1000;
let remainingTime = null;
let startTime = null;
let timerId = null;
let isCountdownTimer = true;
const maxMinutes = 100;

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const tracks = document.getElementById("tracks");
const internal =  document.getElementById("internal");
const externall =  document.getElementById("external");

const updateTimeText = (time) => {
  let m = Math.floor(time / (1000 * 60)) % 100;
  let s = Math.floor((time % (1000 * 60)) / 1000);
  let ms = time % 1000;

  m = `0${m}`.slice(-2);
  s = `0${s}`.slice(-2);
  ms = `00${ms}`.slice(-3).slice(0, 2);

  setTimer(m, s, ms);
};

const setTimer = (m, s, ms) => {
  document.getElementById("minute").textContent = m;
  document.getElementById("second").textContent = s;
  document.getElementById("millisecond").textContent = ms;
};

const update = () => {
  timerId = setTimeout(() => {
    const now = Date.now();
    if (isCountdownTimer) {
      remainingTime -= now - startTime;
    } else {
      remainingTime += now - startTime;
    }
    startTime = now;
    if (remainingTime > 0) {
      update();
    } else {
      remainingTime = 0;
    }
    updateTimeText(remainingTime);
  }, 10);
};

const startAction = () => {
  if (timerId !== null) return;

  startTime = Date.now();
  update();
  startButton.classList.remove("active__control");
  stopButton.classList.add("active__control");
};

const stopAction = () => {
  if (timerId === null) return;

  clearTimeout(timerId);
  timerId = null;
  stopButton.classList.remove("active__control");
  startButton.classList.add("active__control");
};

const resetAction = () => {
  if (isCountdownTimer) {
    remainingTime = time;
  } else {
    remainingTime = 0;
  }
  updateTimeText(remainingTime);
};

/*=============== ALTERAR A COR DOS TRACKS ===============*/
function tracksAlert() {
    tracks.classList.add("tracks__alert");
    tracks.classList.add("blink");
}

const tracksAlertRemove = () => {
    tracks.classList.remove("tracks__alert");
    tracks.classList.remove("blink");
}

/*=============== ALTENAR INTERNAL/EXTERNAL ===============*/
function internalFunction () {
    internal.classList.add("hide");
    externall.classList.remove("hide");
}

function externalFunction () {
    internal.classList.remove("hide");
    externall.classList.add("hide");
}

/*=============== CLICKS ===============*/
(() => {
  startButton.addEventListener("click", startAction);
  startButton.addEventListener("click", tracksAlert);
  startButton.addEventListener("click", externalFunction);
  stopButton.addEventListener("click", stopAction);
  stopButton.addEventListener("click", tracksAlertRemove);
  stopButton.addEventListener("click", internalFunction);
  resetButton.addEventListener("click", resetAction);

  resetAction();
})();

