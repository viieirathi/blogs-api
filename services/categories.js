const { Categories } = require('../models');

const categoriesCreate = async (categoriesInfo) => {
    const newCategories = await Categories.create(categoriesInfo);
    return newCategories;
};

module.exports = { categoriesCreate };