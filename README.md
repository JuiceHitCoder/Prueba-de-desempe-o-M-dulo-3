# Prueba-modulo-3
# Sistema de Autenticación SPA

Este proyecto es una aplicación de una sola página (SPA) que implementa un sistema de autenticación con roles de usuario, utilizando Vite para el frontend y json-server para simular una base de datos backend.

## Características

- Registro e inicio de sesión de usuarios.
- Dos roles de usuario: administrador y usuario.
- Protección de rutas basada en roles.
- Persistencia de sesión utilizando Local Storage.
- Hashing de contraseñas con SHA-256 para seguridad.
- Sistema de rutas básico para navegación en la SPA.

## Requisitos Previos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd mi-proyecto-spa
   
2. Instala las dependencias necesarias:
    npm install
Instala json-server y concurrently como dependencias de desarrollo:
    npm install -D json-server concurrently

## Configuración

Asegúrate de tener un archivo db.json en la raíz del proyecto con la estructura de datos inicial.

## Uso

Inicia los servidores de desarrollo y json-server:

  npm run start\:dev

Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

Utiliza el formulario de registro para crear una nueva cuenta o inicia sesión con una cuenta existente.

## Estructura del Proyecto

mi-proyecto-spa/
├── index.html                    # Página principal
├── package.json                  # Configuración de dependencias
├── db.json                       # Base de datos simulada
├── .gitignore                    # Archivos a ignorar
├── public/
│   └── css/
│       └── main.css             # Estilos generales
└── src/
    ├── controllers/             # Lógica de paginas y herramientas (autenticación, API, CRUD)
    ├── pages/                   # Páginas HTML (login, registro, dashboard, etc.)
    ├── routers/                 # Sistema de rutas
    └── utils/                   # Utilidades (autenticación, validaciones, notificaciones)

