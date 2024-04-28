import { extractUsername } from './extractUsername.js'

export function showUsername (users) {
    const loggedInUser = users.find(user => user.isLoggedIn === true)
    const userAccount = document.getElementById('userAccount')
    const username = extractUsername(loggedInUser.registerEmail)
    

    userAccount.innerHTML = username    
}