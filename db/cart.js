const mongoose = require("mongoose");
const { Schema } = mongoose;
const CartShema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    productId: { type: Schema.Types.ObjectId, ref: "products" },
    quantity:Number
});

const Cart = mongoose.model("carts", CartShema);
module.exports = Cart;