import './styles.css';
import { colors } from './js/colors';
import { refs } from './js/refs';
let intervalID = null;

refs.startBtn.addEventListener('click', handleStartBtn);
refs.stopBtn.addEventListener('click', handleStopBtn);

function handleStartBtn() {
  intervalID = setInterval(() => {
    const randomNum = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomNum];
  }, 1000);

  refs.startBtn.setAttribute('disabled', 'disabled');
}

function handleStopBtn() {
  clearInterval(intervalID);

  refs.startBtn.removeAttribute('disabled');

  refs.body.style.backgroundColor = '#ffffff';
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
