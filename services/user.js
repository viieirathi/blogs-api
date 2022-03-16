const { User } = require('../models');

const userCreate = async (usersInfo) => {
    const newUser = await User.create(usersInfo);
    return newUser;
};

const userExists = async (emailInfo) => {
 const existUser = await User.findOne({ where: { email: emailInfo } });
 return existUser;
};

const userAll = async () => {
    const usersAll = await User.findAll();
    return usersAll;
};

module.exports = { userCreate, userExists, userAll };