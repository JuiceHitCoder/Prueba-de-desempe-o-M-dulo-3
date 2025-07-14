// Guardián: obtiene usuario autenticado desde localStorage
function getUserFromStorage() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

export { getUserFromStorage };