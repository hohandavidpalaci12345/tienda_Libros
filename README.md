# 📚 API Tienda de Libros – CRUD con NestJS y PostgreSQL

Este proyecto es una API RESTful desarrollada con **NestJS** que permite gestionar una tienda virtual de libros. Se incluyen funcionalidades completas de **CRUD (Crear, Leer, Actualizar, Eliminar)** para:

- 👤 Usuarios  
- 📘 Libros (o productos)  
- 📄 Préstamos o pedidos  

## 🚀 Tecnologías utilizadas

- NestJS  
- PostgreSQL  
- TypeORM  
- Class-validator  
- Postman  

## 📁 Estructura del Proyecto

src/
├── main.ts
├── app.module.ts
├── common/
│ └── filters/
│ └── http-exception.filter.ts
├── modules/
│ ├── usuario/
│ ├── libro/
│ ├── categoria/
│ ├── pedido/
│ └── prestamo/

bash
Copy
Edit

## ⚙️ Instalación y ejecución local

```bash
git clone https://github.com/Jhoandadp/tienda_libros_final.git
cd tienda_libros_final
npm install
Crea el archivo .env:

env
Copy
Edit
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_clave
DB_DATABASE=tienda
Crea la base de datos:

sql
Copy
Edit
CREATE DATABASE tienda;
Inicia el servidor:

bash
Copy
Edit
npm run start:dev
🔄 Endpoints CRUD disponibles
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

🧪 Pruebas con Postman
Importa el archivo tiendaonline.postman_collection.json en Postman para acceder a todos los endpoints y probarlos fácilmente.

