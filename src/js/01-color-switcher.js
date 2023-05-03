const bodyEl = document.querySelector('body');
const startButtonEl = document.querySelector('button[data-start]');
const stopButtonEl = document.querySelector('button[data-stop]');
stopButtonEl.setAttribute('disabled', '');
let intID;

startButtonEl.addEventListener('click', () => {
  buttonToggler();
  colorChanger();
});

stopButtonEl.addEventListener('click', () => {
  buttonToggler();
  clearInterval(intID);
});

function buttonToggler() {
  startButtonEl.toggleAttribute('disabled');
  stopButtonEl.toggleAttribute('disabled');
}

function colorChanger() {
  intID = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
