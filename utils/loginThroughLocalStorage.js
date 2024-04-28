export function loginThroughLocalStorage (loginEmail, loginPassword, users) {
    const submit = document.getElementById('loginBtn');
    const emailInput = document.getElementById('floatingLoginEmail');
    const registeredUser = users.find(user => user.registerEmail === loginEmail && user.registerPassword === loginPassword);

    emailInput.addEventListener('input', () => {
        submit.setCustomValidity('');
    });

    if (registeredUser) {
        users.forEach(user => {
            if (user.registerEmail !== registeredUser.registerEmail) {
                user.isLoggedIn = false;
            } else {
                user.isLoggedIn = true;
            }
        });
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        submit.setCustomValidity("User doesn't exists");
        submit.reportValidity();
        return;
    }
}