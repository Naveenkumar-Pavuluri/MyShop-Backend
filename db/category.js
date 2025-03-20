const mongoose = require("mongoose");
const { Schema } = mongoose;
const CategoryShema = new mongoose.Schema({
    name: String,
});

const Category = mongoose.model("categories", CategoryShema);
module.exports = Category;