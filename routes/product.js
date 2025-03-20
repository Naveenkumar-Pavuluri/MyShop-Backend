const express = require("express");
const router = express.Router();
const Product = require("./../db/product");
const { getProduct, getProductById, addProduct, deletProductById, updateProductById } = require("../handlers/product-handler");

router.get("", async (req, res) => {
    let result = await getProduct();
    res.send(result);
})

router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await getProductById(id);
    res.send(result);
})

router.post("", async (req, res) => {
    let model = req.body;
    let result = await addProduct(model);
    res.send(result);
})

router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    await updateProductById(id, model);
    res.send({ message: "updated" });
})

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    await deletProductById(id);
    res.send({ message: "deleted" });
})

module.exports = router;