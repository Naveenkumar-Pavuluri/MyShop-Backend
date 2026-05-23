# 🛒 MyShop — Backend API

A RESTful backend API for the **MyShop** e-commerce platform. Handles authentication, product management, cart, wishlist, and order processing.

---

## ✨ Features

- 🔐 **User Authentication** — Register, login, logout with session/token management
- 📦 **Product Management** — CRUD operations for products with category support
- 🛒 **Cart API** — Add, update, and remove cart items per user
- ❤️ **Wishlist API** — Save and retrieve wishlist items
- 🗃️ **Orders API** — Place orders and retrieve order history
- 🗂️ **Category Support** — Filter products by Mobiles, Electronics, Fashion, Grocery, etc.

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| Java / Spring Boot *(or Node.js / Express)* | Backend framework |
| REST API | Communication protocol |
| MySQL / PostgreSQL / MongoDB | Database |
| JWT / Session | Authentication |
| Maven / npm | Build tool |

> ⚠️ Update the table above to match your actual stack.

---

## 🚀 Getting Started

### Prerequisites

- Java 17+ (if Spring Boot) **or** Node.js 18+ (if Express)
- MySQL / PostgreSQL / MongoDB running locally
- Maven / npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/myshop-backend.git
cd myshop-backend
```

**If Spring Boot:**
```bash
# Configure your DB in src/main/resources/application.properties
./mvnw spring-boot:run
```

**If Node.js / Express:**
```bash
npm install
cp .env.example .env   # Set your DB credentials and JWT secret
npm start
```

The server will run at `http://localhost:8080`.

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive token |
| POST | `/api/auth/logout` | Logout current user |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| GET | `/api/products?category=mobiles` | Filter by category |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get user's cart |
| POST | `/api/cart` | Add item to cart |
| DELETE | `/api/cart/:id` | Remove item from cart |

### Wishlist
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/wishlist` | Get user's wishlist |
| POST | `/api/wishlist` | Add item to wishlist |
| DELETE | `/api/wishlist/:id` | Remove from wishlist |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders for user |
| POST | `/api/orders` | Place a new order |

---

## 📁 Project Structure

```
src/
├── controllers/      # Route handlers / REST controllers
├── models/           # Database models / entities
├── services/         # Business logic layer
├── repositories/     # DB access layer (if Spring Data / Mongoose)
├── config/           # App config (DB, security, CORS)
└── main entry file
```


## 🔗 Frontend

This backend powers the **MyShop Frontend** Angular application.

👉 [MyShop Frontend Repository](https://github.com/Naveenkumar-Pavuluri/MyShop-Frontend)

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first for major changes.

---
