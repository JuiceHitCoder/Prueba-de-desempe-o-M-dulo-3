## SPA Authentication System

This project is a single-page application (SPA) that implements an authentication system with user roles, using Vite for the frontend and json-server to simulate a backend database.

## Description

The SPA Authentication System is designed to provide a seamless and secure user authentication experience. It allows users to register, log in, and access different parts of the application based on their roles. This project serves as a foundation for understanding how to implement secure authentication in a single-page application.

## Features

   - User registration and login.
   - Two user roles: administrator and user.
   - Route protection based on roles.
   - Session persistence using Local Storage.
   - Password hashing with SHA-256 for security.
   - Basic routing system for SPA navigation.

## Technologies Used

- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **json-server**: A simple tool to create a REST API with zero coding, used here to simulate a backend database.
- **Local Storage**: Used for session persistence to maintain user login state across page reloads.
- **SHA-256**: A cryptographic hash function used to secure user passwords.

## Prerequisites

   - Node.js
   - npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/JuiceHitCoder/Prueba-de-desempe-o-M-dulo-3.git
   cd my-spa-project

2. Install the necessary dependencies:

   npm install

3.Install json-server and concurrently as development dependencies:

   npm install -D json-server concurrently

## Configuration

Make sure you have a db.json file in the root of the project with the initial data structure. You can use the following example:

bash
```
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "password": "6c3b6e6e4b6c2c1b9b419911cfef95c0d6c6e3c7b2e3e8e2e3e3e8e2e3e3e8e2",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "user1",
      "email": "user1@example.com",
      "password": "bcb1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1",
      "role": "user"
    }
  ]
}
```

## Usage

1. Start the development servers and json-server:

   npm run start:dev

2. Open your browser and navigate to http://localhost:5173 to see the application in action.

3. Use the registration form to create a new account or log in with an existing account.


## Project Structure
bash
```
my-spa-project/
├── index.html                    # Main page
├── package.json                  # Dependency configuration
├── db.json                       # Simulated database
├── .gitignore                    # Files to ignore
├── public/
│   └── css/
│       └── main.css              # General styles
└── src/
    ├── controllers/              # Page logic and tools (authentication, API, CRUD)
    ├── pages/                    # HTML pages (login, register, dashboard, etc.)
    ├── routers/                  # Routing system
    └── utils/                    # Utilities (authentication, validations, notifications)
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Authors

   Nelson Salcedo Baldovino
