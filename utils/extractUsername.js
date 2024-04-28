export function extractUsername(email) {
    const atIndex = email.indexOf('@');
    
    let username = email.slice(0, atIndex);
    
    if (username.length > 9) {
        username = username.slice(0, 9);
    }
    
    return username;
}
