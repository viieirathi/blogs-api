const { userCreate, userExists } = require('../services/user');
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

module.exports = { userControllerCreate };