export function registerThroughLocalStorage (users, registerEmail, registerPassword) {
    const userExists = users.some(user => user.registerEmail === registerEmail);   
    const submit = document.getElementById('registerBtn');
    const emailInput = document.getElementById('floatingRegisterEmail');

    emailInput.addEventListener('input', () => {
        submit.setCustomValidity('');
    });

    if(userExists) {
        submit.setCustomValidity("Email already exists");
        submit.reportValidity();
    } else {
        submit.setCustomValidity("");

        const newUser = { registerEmail, registerPassword };
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));
        console.log('User added successfully');
    }
}