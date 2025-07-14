import { getData } from "../controllers/apiController.js";

// auth.js: Login y registro con hash SHA-256

// Función para hashear texto con SHA-256
async function hashText(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Iniciar sesión
async function login(credentials) {
    try {
        const hashedPassword = await hashText(credentials.password);
        const users = await getData();
        const user = users.find(u => u.username === credentials.username && u.password === hashedPassword);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Redirección automática según el rol
            if (user.role === 'admin') {
                window.location.href = '/dashboard';
            } else if (user.role === 'user') {
                window.location.href = '/dashboard-user';
            } else if (user.role === 'guest') {
                window.location.href = '/dashboard-guest';
            } else {
                window.location.href = '/';
            }
            return { success: true, user };
        } else {
            return { success: false, message: "Credenciales inválidas" };
        }
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        return { success: false, message: "Error durante el inicio de sesión" };
    }
}

const form = document.getElementById('registerForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userData = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        role: 'user' // o puedes obtenerlo de otro input si lo tienes
    };

    try {
        const result = await register(userData);
        if (result.success) {
            alert("Registro exitoso. Por favor, inicia sesión.");
            window.location.href = '/login'; // Redirige a la página de inicio de sesión
        }
    } catch (error) {
        console.error("Error durante el registro:", error);
        alert("Error durante el registro. Por favor, inténtalo de nuevo.");
    }
});

async function register(userData) {
    try {
        userData.password = await hashText(userData.password);
        // Guarda el usuario en la base de datos (JSON Server)
        await httpRequest('POST', API_URL, userData);
        return { success: true, user: userData };
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        return { success: false, message: "Error al registrar el usuario" };
    }
}

export { login, register, hashText };
