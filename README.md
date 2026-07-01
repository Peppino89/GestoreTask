# 📋 Task Manager API

RESTful API for managing personal tasks, developed with **Node.js**, **Express.js** and **MongoDB**.

---

# 📖 About

Task Manager API is a backend application built with **Node.js** and **Express.js** that provides a simple and organized way to manage personal tasks.

The project was developed to strengthen my backend development skills while exploring REST API design, MongoDB integration, request validation and modular application architecture.

The application follows a clean and maintainable structure by separating routes, controllers, models and middleware.

---

# 📊 Project Information

| Information | Details |
|-------------|---------|
| **Runtime** | Node.js |
| **Framework** | Express.js 5 |
| **Language** | JavaScript (ES Modules) |
| **Database** | MongoDB |
| **ODM** | Mongoose |
| **Validation** | Joi |
| **Logging** | Winston & Morgan |
| **Architecture** | Modular |
| **Status** | Completed |

---

# 🚀 Technologies

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Validation

- Joi

## Logging

- Winston
- Morgan

## Other

- CORS
- Dotenv

---

# 🏗 Architecture

The project follows a modular architecture:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

Middleware is used to centralize:

- Validation
- Error handling
- Logging

---

# 📂 Project Structure

```text
TaskManager
│
├── middleware
├── models
├── routes
├── schemasValidate
├── logger.js
├── server.js
├── package.json
└── .env
```

---

# ✨ Main Features

- ✅ Create tasks
- 📋 Retrieve all tasks
- ✏️ Update existing tasks
- 🗑 Delete tasks
- ✔ Mark tasks as completed
- ✔ Request validation with Joi
- 📜 Request logging
- ⚠ Global error handling

---

# 🛡 Validation

The application validates incoming requests using **Joi**, ensuring that task data is correctly formatted before reaching the database.

---

# 📜 Logging

Logging is implemented using:

- Winston
- Morgan

This allows monitoring application activity and simplifying debugging.

---

# 🗄 Database

The application uses **MongoDB** together with **Mongoose** for data persistence and schema management.

---

# 📡 REST API

Main endpoints include:

```http
GET    /tasks
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
PATCH  /tasks/:id
```

---

# 🚀 Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_connection_string
```

Start the server:

```bash
npm run server
```

or

```bash
npm start
```

---

# 📚 What I Learned

During the development of this project I improved my understanding of:

- Express.js
- MongoDB
- Mongoose
- REST API Design
- Request validation with Joi
- Modular backend architecture
- Logging with Winston
- Environment configuration
- Error handling

---

# 🔮 Future Improvements

Possible future enhancements include:

- User authentication
- JWT Authorization
- Pagination
- Search and filtering
- Swagger / OpenAPI documentation
- Docker support
- Unit Testing
- Integration Testing

---

# 👨‍💻 Author

**Giuseppe Giordano**

Full Stack Developer

### Backend

- Java
- Spring Boot
- Node.js
- Express.js

### Frontend

- Angular
- React
- Next.js

### Databases

- MySQL
- MongoDB

---

⭐ This project was developed to strengthen my backend development skills using Node.js, Express.js and MongoDB.
