export const validUsername = (username) => {
    // Username must be at least 3 characters long
    const isUsernameValid = username.length >= 3;
    if (!isUsernameValid) return 'Please enter at least 3 characters for the username.';
}

export const validEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    if (!isEmailValid) return 'Please enter a valid email address.';
}

export const validPassword = (password) => {
    // Password must be at least 6 characters long
    const isPasswordValid = password.length >= 6;
    if (!isPasswordValid) return 'Password must be at least 6 characters long.';
}
