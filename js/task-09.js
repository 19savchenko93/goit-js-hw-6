// const body = document.querySelector('body');
// const btn = document.querySelector('button');
// const text = document.querySelector('span');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// function changeColor(event) {
//   body.style.backgroundColor = getRandomHexColor();
//   text.textContent = getRandomHexColor();
// };


// btn.addEventListener('click', changeColor);
// console.log(getRandomHexColor);

const buttonRef = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
buttonRef.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});