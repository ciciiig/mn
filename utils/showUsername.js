import { extractUsername } from './extractUsername.js'

export function showUsername (users) {
    if (users.some(user => user.isLoggedIn === true)) {
        const loggedInUser = users.find(user => user.isLoggedIn === true)
        const userAccount = document.getElementById('userAccount')
        const userAccountContainer = document.getElementById('userAccountContainer')
        const username = extractUsername(loggedInUser.registerEmail)
        
        userAccount.innerHTML = username
    
        userAccountContainer.setAttribute('data-bs-toggle', 'dropdown');
    }
}