const { User } = require('../models');

const loginExists = async (email, password) => {
    const existLogin = await User.findOne({ where: { email, password } });
    return existLogin;
   };

module.exports = { loginExists };