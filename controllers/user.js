const { userCreate, userExists, userAll } = require('../services/user');
const { jwtGenerator } = require('../helpers/jwtGenerator');

const userControllerCreate = async (req, res, _next) => {
    const {
        displayName,
        email,
        password,
        image,
    } = req.body;

    const existUsers = await userExists(email);

    if (existUsers) {
        return res.status(409).json({ message: 'User already registered' }); 
}

    await userCreate({ displayName, email, password, image });

    const token = jwtGenerator({ displayName, email });
    return res.status(201).json({ token });
};

const getUserAlls = async (_req, res, _next) => {
    const getUser = await userAll();
    return res.status(200).json(getUser);
};

module.exports = { userControllerCreate, getUserAlls };