const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const  { email, password } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("ATTENTION, не всі поля заповнені!!");
    };

    const user = {
        login:email.value,
        password:password.value,
    };
    console.log(user);
    event.currentTarget.reset()
};
