const Wishlist = require("./../db/wishlist");

async function addToWishList(userId, productId) {
    const wishlist = new Wishlist({
        userId: userId,
        productId: productId
    });
    await wishlist.save();
    return wishlist.toObject();
}

async function removeFromWishList(userId, productId) {
    await Wishlist.deleteMany({
        userId: userId,
        productId: productId
    });
}

async function getWishList(userId) {
    let wishlists = await Wishlist.find({ userId: userId }).populate('productId');
    return wishlists.map((x) => x.toObject().productId);
}

module.exports = { getWishList, addToWishList, removeFromWishList };