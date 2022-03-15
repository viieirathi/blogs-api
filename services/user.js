const { User } = require('../models');

const userCreate = async (usersInfo) => {
    const newUser = await User.create(usersInfo);
    return newUser;
};

const userExists = async (emailInfo) => {
 const existUser = await User.findOne({ where: { email: emailInfo } });
 return existUser;
};

module.exports = { userCreate, userExists };