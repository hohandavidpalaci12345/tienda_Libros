# API de Gestión de Tienda de Libros

Este proyecto implementa una API desarrollada en NestJS para administrar el flujo básico de una tienda de libros. Permite realizar operaciones CRUD sobre los principales recursos del sistema, como usuarios, libros, categorías y préstamos.

## Tecnologías empleadas

- NestJS (Node.js)
- PostgreSQL
- TypeORM
- Validaciones con class-validator
- Pruebas de endpoints con Postman

## Organización del proyecto

La estructura del proyecto está basada en una arquitectura modular por funcionalidades. Cada módulo contiene sus propias entidades, DTOs, servicios y controladores.

src/
├── app.module.ts
├── main.ts
├── common/
│ └── filters/
├── modules/
│ ├── usuario/
│ ├── libro/
│ ├── categoria/
│ ├── pedido/
│ └── prestamo/

bash
Copy
Edit

## Instalación y configuración

1. Clonar el repositorio desde GitHub:

```bash
git clone https://github.com/Jhoandadp/tienda_libros_final.git
cd tienda_libros_final
Instalar las dependencias:

bash
Copy
Edit
npm install
Crear el archivo .env con las variables de entorno necesarias:

ini
Copy
Edit
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_clave
DB_DATABASE=tienda
Asegurarse de tener la base de datos creada:

sql
Copy
Edit
CREATE DATABASE tienda;
Ejecutar el proyecto:

bash
Copy
Edit
npm run start:dev
Endpoints disponibles
Usuarios
GET /usuarios

GET /usuarios/:id

POST /usuarios

PATCH /usuarios/:id

DELETE /usuarios/:id

Libros
GET /libros

GET /libros/:id

POST /libros

PATCH /libros/:id

DELETE /libros/:id

Pedidos
GET /pedidos

GET /pedidos/:id

POST /pedidos

PATCH /pedidos/:id

DELETE /pedidos/:id

Pruebas
Para probar los servicios, se recomienda utilizar Postman. El archivo de colección tiendaonline.postman_collection.json está incluido para facilitar las pruebas manuales de cada endpoint.

DELETE /pedidos/:id

🧪 Pruebas con Postman
Importa el archivo tiendaonline.postman_collection.json en Postman para acceder a todos los endpoints y probarlos fácilmente.

