const { jwtGenerator } = require('../helpers/jwtGenerator');
const { loginExists } = require('../services/login');

const loginControllersCreate = async (req, res, _next) => {
    const { email, password } = req.body;
    const userLogin = await loginExists(email, password);
    console.log(userLogin);
    if (!userLogin) return res.status(400).json({ message: 'Invalid fields' });
    const token = jwtGenerator({ id: userLogin.id, email });
    return res.status(200).json({ token });
};

module.exports = { loginControllersCreate };