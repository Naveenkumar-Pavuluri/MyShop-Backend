const mongoose = require("mongoose");
const { Schema } = mongoose;
const WishlistShema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    productId: { type: Schema.Types.ObjectId, ref: "products" },
});

const Wishlist = mongoose.model("whislists", WishlistShema);
module.exports = Wishlist;