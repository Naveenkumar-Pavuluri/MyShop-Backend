const Category = require("./../db/category");

async function getCategories() {
    let categories = await Category.find();
    return categories.map((c) => c.toObject());
}

async function addCategory(model) {
    let category = new Category({
        name: model.name
    });
    await category.save();
    return category.toObject();
}

async function updateCategory(id, model) {
    return await Category.findOneAndUpdate({ _id: id }, model);
}

async function getCategoryById(id) {
    let category = await Category.findById(id);
    return category.toObject();
}

async function deleteCategory(id) {
    return await Category.findByIdAndDelete(id);
}

module.exports = { getCategories, addCategory, updateCategory, deleteCategory , getCategoryById}