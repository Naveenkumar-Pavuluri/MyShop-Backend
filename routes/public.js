const express = require("express");
const Product = require("../db/product");
const Cart = require("../db/cart");
const router = express.Router();
const { getNewProducts, getFeaturedProducts, getProductsListings, getProductById } = require("../handlers/product-handler");
const { getCategories } = require("../handlers/category-handler");
const { getBrands } = require("../handlers/brand-handler");
const { getWishList, addToWishList, removeFromWishList } = require("../handlers/wishlist-handler");
const { getCart, addToCart, removeFromCart, clearCart } = require("../handlers/cart-handler");
const { addOrder, getCustomerOders} = require("../handlers/order-handler");

router.get("/new-products", async (req, res) => {
    let products = await getNewProducts();
    res.send(products);
})

router.get("/featured-products", async (req, res) => {
    let products = await getFeaturedProducts();
    res.send(products);
})

router.get("/categories", async (req, res) => {
    let categories = await getCategories();
    res.send(categories);
})

router.get("/brands", async (req, res) => {
    let brands = await getBrands();
    res.send(brands);
})

router.get("/products", async (req, res) => {
    const { searchTerm, categoryId, page, pageSize, sortBy, sortOrder, brandId } = req.query;
    let categories = await getProductsListings(searchTerm, categoryId, page, pageSize, sortBy, sortOrder, brandId);
    res.send(categories);
})

router.get("/products/:id", async (req, res) => {
    const id = req.params["id"];
    let product = await getProductById(id);
    res.send(product);
})

router.get("/wishlist", async (req, res) => {
    const userId = req.user.id;
    const items = await getWishList(userId);
    res.send(items);
})

router.post("/wishlist/:id", async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.id;
    const item = await addToWishList(userId, productId);
    res.send(item);
})

router.delete("/wishlist/:id", async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.id;
    await removeFromWishList(userId, productId);
    res.send({
        message: "Product removed from wishlist sucessfully"
    });
})

router.get("/cart", async (req, res) => {
    const userId = req.user.id;
    let products = await getCart(userId);
    res.send(products);
})

router.post("/cart/:id", async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.id;
    const quantity = req.body.quantity;
    let product = await addToCart(userId, productId, quantity);
    res.send(product);
})

router.delete("/cart/:id", async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.id;
    await removeFromCart(userId, productId);
    res.send({
        message: "Product removed from the cart sucessfully"
    })
})

router.post("/order", async(req,res)=>{
    const userId = req.user.id;
    const order = req.body;
    await addOrder(userId,order);
    await clearCart(userId);
    res.send({
        message:"Order Created Sucessfully"
    })
});

router.get("/order", async(req,res)=>{
    const userId = req.user.id;
    let orders = await getCustomerOders(userId);
    res.send(orders);
})

module.exports = router;