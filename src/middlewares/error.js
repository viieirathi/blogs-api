const error = (_error, _req, res, _next) => res.status(500).send('something went wrong!');

module.exports = error;