const Product = require("./../db/product");

async function addProduct(model) {
    let product = new Product({
        ...model
    });
    await product.save();
    return product.toObject();
}

async function getProduct() {
    let product = await Product.find();
    return product.map((c) => c.toObject());
}

async function getProductById(id) {
    let product = await Product.findById(id);
    return product.toObject();
}

async function updateProductById(id, model) {
    return await Product.findByIdAndUpdate({ _id: id }, model);
}

async function deletProductById(id) {
    return await Product.findByIdAndDelete(id);
}

async function getNewProducts() {
    let newproducts = await Product.find({
        isNewProduct: true
    })
    return newproducts.map((x) => x.toObject())
}

async function getFeaturedProducts() {
    let newproducts = await Product.find({
        isFeatured: true
    })
    return newproducts.map((x) => x.toObject())
}

async function getProductsListings(searchTerm, categoryId, page, pageSize, sortBy, sortOrder, brandId) {
    let queryFilter = {};

    if (searchTerm && searchTerm.trim() !== "") {
        queryFilter.$or = [
            { name: { $regex: searchTerm, $options: "i" } }, 
            { shortDescription: { $regex: searchTerm, $options: "i" } }
        ];
    }

    if (categoryId) {
        queryFilter.categoryId = categoryId;
    }

    if (brandId && brandId.trim() !== "") {
        queryFilter.brandId = brandId;
    }

    let currentPage = parseInt(page) || 1;
    let itemsPerPage = parseInt(pageSize) || 10;

    let sortField = sortBy || "price";
    let sortDirection = parseInt(sortOrder) || -1;

    const products = await Product.find(queryFilter)
        .sort({ [sortField]: sortDirection })
        .skip((currentPage - 1) * itemsPerPage)
        .limit(itemsPerPage);

    return products.map((x) => x.toObject());
}

module.exports = { addProduct, getProduct, getProductById, updateProductById, deletProductById, getNewProducts, getFeaturedProducts, getProductsListings }