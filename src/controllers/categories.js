const { categoriesCreate, categorieAll } = require('../services/categories');

const controllerCategoriesCreate = async (req, res, _next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const createCategorie = await categoriesCreate({ name });
    return res.status(201).json({ id: createCategorie.id, name: createCategorie.name });
};

const controllerCategoriesAll = async (_req, res, _next) => {
    const getCategariesAll = await categorieAll();
    res.status(200).json(getCategariesAll);
};

module.exports = { controllerCategoriesCreate, controllerCategoriesAll };