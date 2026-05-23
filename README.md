# 🛒 MyShop — Backend API

A RESTful backend API for the **MyShop** e-commerce platform built with **Node.js**, **Express**, and **MongoDB**. Handles authentication, product management, cart, wishlist, orders and more.

---

## ✨ Features

- 🔐 **JWT Authentication** — Register, login, logout with token-based auth
- 📦 **Product Management** — CRUD operations with category and brand support
- 🛒 **Cart API** — Add, update, and remove cart items per user
- ❤️ **Wishlist API** — Save and retrieve wishlist items
- 🗃️ **Orders API** — Place orders and retrieve order history
- 🗂️ **Category & Brand** — Organized product filtering
- 🛡️ **Middleware** — Auth guards and request validation

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| JWT | Authentication |
| JavaScript | Language |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/Naveenkumar-Pavuluri/MyShop-Backend.git
cd MyShop-Backend

# Install dependencies
npm install

# Start the server
node app.js
```

The server will run at `http://localhost:3000`.

---

## 📁 Project Structure

```
BACKEND/
├── db/
│   ├── brand.js          # Brand DB operations
│   ├── cart.js           # Cart DB operations
│   ├── category.js       # Category DB operations
│   ├── order.js          # Order DB operations
│   ├── product.js        # Product DB operations
│   ├── users.js          # User DB operations
│   └── wishlist.js       # Wishlist DB operations
├── handlers/             # Request handler logic
├── middleware/           # Auth & validation middleware
├── routes/
│   ├── auth.js           # Auth routes (login, register)
│   ├── brand.js          # Brand routes
│   ├── category.js       # Category routes
│   ├── order.js          # Order routes
│   ├── product.js        # Product routes
│   └── public.js         # Public routes (no auth required)
├── app.js                # Entry point
├── package.json
└── package-lock.json
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Add new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

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

## 🔗 Frontend

This backend powers the **MyShop Frontend** Angular application.

👉 [MyShop Frontend Repository](https://github.com/Naveenkumar-Pavuluri/MyShop-Frontend)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---
