export function registerThroughLocalStorage (registerEmail, registerPassword, users) {
    const userExists = users.some(user => user.registerEmail === registerEmail);   
    const submit = document.getElementById('registerBtn');
    const emailInput = document.getElementById('floatingRegisterEmail');
    const loginButton = document.querySelector('.btn[data-bs-target="#login-modal"]');

    emailInput.addEventListener('input', () => {
        submit.setCustomValidity('');
    });

    if(userExists) {
        submit.setCustomValidity("Email already exists");
        submit.reportValidity();
        return;
    } else {
        submit.setCustomValidity("");

        const newUser = { registerEmail, registerPassword, isLoggedIn: false, };
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));
        console.log('User added successfully');
    }

    // go to login modal in case of successful registration
    loginButton.click();
}
