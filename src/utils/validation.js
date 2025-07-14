function validateLogin(credentials) {
    const errors = [];
    if (!credentials.username) errors.push("Usuario requerido");
    if (!credentials.password) errors.push("Contraseña requerida");
    return errors;
}

function validateRegister(userData, confirmPassword) {
    const errors = [];
    if (!userData.username) errors.push("Usuario requerido");
    if (!userData.email) errors.push("Email requerido");
    if (!userData.password) errors.push("Contraseña requerida");
    if (userData.password !== confirmPassword) errors.push("Las contraseñas no coinciden");
    return errors;
}

export { validateLogin, validateRegister };