export function logout (users) {
    const userAccount = document.getElementById('userAccount')
    const userAccountContainer = document.getElementById('userAccountContainer')

    userAccount.innerHTML = 'Account'
    userAccountContainer.setAttribute('data-bs-toggle', 'modal');

    users.forEach(user => {
        user.isLoggedIn = false;
    })
    localStorage.setItem('users', JSON.stringify(users));
}