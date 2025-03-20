const Brand = require("./../db/brand");

async function getBrands() {
    let brands = await Brand.find();
    return brands.map((c) => c.toObject());
}

async function getBrandById(id) {
    let brand = await Brand.findById(id);
    return brand.toObject();
}

async function addBrand(model) {
    let brand = new Brand({
        name: model.name
    });
    await brand.save();
    return brand.toObject();
}

async function updateBrand(id, model) {
    return await Brand.findByIdAndUpdate(id, model)
}

async function deleteBrand(id) {
    return await Brand.findByIdAndDelete(id);
}

module.exports = { getBrands, getBrandById, addBrand, updateBrand, deleteBrand }