const { User } = require('../models');

const loginExists = async (email, password) => {
    const existLogin = await User.findOne({ where: { email, password } });
    console.log(existLogin);
    return existLogin;
   };

module.exports = { loginExists };