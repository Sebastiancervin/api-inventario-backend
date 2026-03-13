 API Inventario Backend

API REST desarrollada con Node.js y Express.js para gestionar computadoras y usuarios con autenticación segura usando JSON Web Token.

 Tecnologías

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token

bcryptjs

Instalación

Clonar el repositorio:

git clone https://github.com/Sebastiancervin/api-inventario-backend.git

Entrar al proyecto:

cd api-inventario-backend

Instalar dependencias:

npm install

Ejecutar servidor:

node server.js

Servidor en:

http://localhost:3000
 Autenticación

La API utiliza JWT para proteger rutas.

Registro de usuario
POST /auth/registro

Body JSON:

{
 "usuario": "sebas",
 "password": "123456"
}
Login
POST /auth/login

Body JSON:

{
 "usuario": "sebas",
 "password": "123456"
}

Respuesta:

{
 "token": "TOKEN_JWT"
}
 CRUD de computadoras
Obtener computadoras
GET /computadoras
Crear computadora
POST /computadoras
Actualizar computadora
PUT /computadoras/:id
Eliminar computadora
DELETE /computadoras/:id
 Ruta protegida

Ejemplo:

GET /perfil

Header requerido:

Authorization: Bearer TOKEN
 Estructura del proyecto
api-inventario-backend
│
├── models
│   ├── Usuario.js
│   └── Computadora.js
│
├── routes
│   ├── auth.js
│   └── computadoras.js
│
├── middlewares
│   └── authMiddleware.js
│
├── server.js
└── package.json
 Autor

Sebastian Cervin

Estudiante de Ingeniería en Tecnologías de la Información.

 Objetivo

Proyecto desarrollado como práctica para aprender:

desarrollo de APIs REST

autenticación con JWT

manejo de bases de datos con MongoDB

arquitectura backend con Node.js