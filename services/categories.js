const { Categories } = require('../models');

const categoriesCreate = async (categoriesInfo) => {
    const newCategories = await Categories.create(categoriesInfo);
    return newCategories;
};

const categorieAll = async () => {
    const categoriesAll = await Categories.findAll();
    return categoriesAll;
};
module.exports = { 
    categoriesCreate,
     categorieAll,
    };