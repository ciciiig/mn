export function loginThroughLocalStorage (loginEmail, loginPassword, users) {
    const submit = document.getElementById('loginBtn');
    const closeLoginModal = document.getElementById('login-btn-close')
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
        closeLoginModal.click();
    } else {
        submit.setCustomValidity("User doesn't exists");
        submit.reportValidity();
        return;
    }
}