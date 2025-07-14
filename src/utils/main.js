import { initRouter } from "../routers/router.js";

function initApp() {
    initRouter();
    console.log("SPA inicializada");
}

document.addEventListener("DOMContentLoaded", initApp);