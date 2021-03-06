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

const userId = async (infoId) => {
 const idUser = await User.findOne({ where: { id: infoId } });
 return idUser;
};

const delUserId = async (delId) => {
    const delUser = await User.destroy({ where: { id: delId } });
    return delUser;
};


module.exports = { userCreate, userExists, userAll, userId, delUserId };