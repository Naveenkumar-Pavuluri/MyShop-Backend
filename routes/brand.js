const express = require("express");
const router = express.Router();
const Brand = require("../db/brand");

const { getBrandById, getBrands, addBrand, updateBrand, deleteBrand } = require("../handlers/brand-handler");

router.get("", async (req, res) => {
    let brands = await getBrands();
    res.send(brands);
})

router.post("", async (req, res) => {
    let model = req.body;
    let result = await addBrand(model);
    res.send(result);
})

router.put("/:id", async (req, res) => {
    let id = req.params["id"];
    let model = req.body;
    let result = await updateBrand(id,model);
    res.send({ message: "updated" });
})

router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await getBrandById(id);
    res.send(result);
})

router.delete("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await deleteBrand(id);
    res.send({message: "deleted" });
})

module.exports = router;