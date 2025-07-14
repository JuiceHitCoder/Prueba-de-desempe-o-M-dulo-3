// Almacenar usuario en sessionStorage
function setUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

// Obtener usuario de sessionStorage
function getUser() {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Eliminar usuario de sessionStorage
function removeUser() {
    sessionStorage.removeItem('currentUser');
}

export { storeUser, getUser, clearUser };