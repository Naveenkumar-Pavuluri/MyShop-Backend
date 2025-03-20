const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductShema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    description: String,
    price: Number,
    discount: Number,
    images: Array(String),
    categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
    brandId: { type: Schema.Types.ObjectId, ref: "brands" },
    isFeatured:Boolean,
    isNewProduct:Boolean
});

const Product = mongoose.model("products", ProductShema);
module.exports = Product;