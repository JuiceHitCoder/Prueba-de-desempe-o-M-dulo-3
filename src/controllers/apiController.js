/**
 * Realiza una petición HTTP al servidor
 * @param {string} method - Método HTTP (GET, POST, PUT, PATCH, DELETE)
 * @param {string} url - URL a la que se envía la petición
 * @param {Object|null} body - Cuerpo de la petición (para POST/PUT/PATCH)
 * @returns {Promise<Object>} Respuesta como JSON
 * @throws {Error} Si la petición falla
 */
const API_URL = "http://localhost:3001/users";
async function httpRequest(method, url, body = null) {
    try {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : null,
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("❌ HTTP request error:", error);
        throw error;
    }
}

// Obtener datos (GET)
async function getData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const Database = await response.json();
        return Database;
    } catch (error) {
        console.error("❌ Error fetching data:", error);
        return [];
    }
}