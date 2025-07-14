// Router simple para SPA con guardian y roles
import { getUserFromStorage } from "../utils/guardian.js";

const routes = {
    "/": { page: "dashboard.html", protected: true },
    "/login": { page: "login.html", protected: false },
    "/register": { page: "register.html", protected: false },
    "/dashboard": { page: "dashboard.html", protected: true, role: ["admin"] },
    "/dashboard-user": { page: "dashboard-user.html", protected: true, role: ["user"] },
    "/dashboard-guest": { page: "dashboard-guest.html", protected: true, role: ["guest"] },
    "/forbidden": { page: "forbidden.html", protected: true },
    "/not-found": { page: "404.html", protected: false },
};

async function navigateTo(path) {
    const route = routes[path] || routes["/not-found"];
    // Guardian: solo permite si está autenticado
    if (route.protected) {
        const user = getUserFromStorage();
        if (!user) {
            window.history.pushState({}, '', '/login');
            return navigateTo('/login');
        }
        // Acceso por rol
        if (route.role && !route.role.includes(user.role)) {
            window.history.pushState({}, '', '/forbidden');
            return navigateTo('/forbidden');
        } 
    }
    const response = await fetch(`src/pages/${route.page}`);
    const content = await response.text();
    document.getElementById("app").innerHTML = content;
}

function initRouter() {
    document.addEventListener("click", function (e) {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            const href = e.target.getAttribute("href");
            navigateTo(href);
        }
    });
    window.addEventListener("popstate", function () {
        navigateTo(window.location.pathname);
    });
    navigateTo(window.location.pathname);
}

export { initRouter, navigateTo };