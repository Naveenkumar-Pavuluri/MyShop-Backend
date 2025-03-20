const Order = require("./../db/order");

async function addOrder(userId, orderModel) {
    const order = new Order({
        ...orderModel,
        userId: userId,
        status: "in-progress"
    });
    return await order.save();
}

async function getCustomerOders(userId) {
    const orders = await Order.find({ userId: userId });
    return orders.map((x) => x.toObject());
}

async function getOrders(){
    const orders = await Order.find();
    return orders.map((x)=>x.toObject());
}

async function updateOrderStatus(id,status){
    return await Order.findByIdAndUpdate(id,{
        status:status
    })
}

module.exports = { addOrder, getCustomerOders, getOrders, updateOrderStatus}