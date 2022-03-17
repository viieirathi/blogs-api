const { categoriesCreate } = require('../services/categories');

const controllerCategoriesCreate = async (req, res, _next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const createCategorie = await categoriesCreate({ name });
    return res.status(201).json({ id: createCategorie.id, name: createCategorie.name });
};

module.exports = { controllerCategoriesCreate };