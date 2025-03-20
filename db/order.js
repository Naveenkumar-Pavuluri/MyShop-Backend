const mongoose = require("mongoose");
const OrderShema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    date: Date,
    items: Array(mongoose.Schema.Types.Mixed),
    paymentType:String,
    address: mongoose.Schema.Types.Mixed,
    status: String
});

const Order = mongoose.model("orders", OrderShema);
module.exports = Order;