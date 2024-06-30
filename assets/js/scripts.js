function login() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (!username || !password) {
        errorMessage.textContent = 'Both fields are required*';
        return;
    }

    const hashedPassword = sha256(password);   
    console.log('Username:', username);
    console.log('Hashed Password:', hashedPassword);

    document.getElementById('login-form').reset();
    errorMessage.textContent = '';
};

function sha256(str) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str)).then(hash => {
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    });
}
