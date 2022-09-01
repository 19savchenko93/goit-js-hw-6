const input = document.querySelector('#validation-input');

input.addEventListener('blur', checkIn);

function checkIn(event) {
    const inp = event.currentTarget;
    const inpLength = Number(inp.dataset.length);


    if (inp.value.length === inpLength) {
        inp.classList.remove('invalid');
        inp.classList.add('valid');
    }
    
    else {
        inp.classList.remove('valid');
        inp.classList.add('invalid');
    }
}

// const checkOut = (event) => {
//     input.classList.remove("valid", "invalid");
// };


// input.addEventListener('focus', checkOut);