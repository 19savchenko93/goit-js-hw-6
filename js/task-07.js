const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

span.style.fontSize = "56px";

function changeFontSize(a) {
    span.style.fontSize = a.currentTarget.value + 'px';
};

input.addEventListener('input', changeFontSize);