const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET;

const jwtGenerator = (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);

module.exports = { jwtGenerator };