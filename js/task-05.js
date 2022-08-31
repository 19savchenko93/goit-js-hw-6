const input = document.querySelector('input');
const label = document.querySelector('span');

input.addEventListener('input', addInput);

function addInput(event){
    label.textContent = event.currentTarget.value || 'Anonymous';
};