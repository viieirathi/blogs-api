const validateAll = (schemas) => (req, res, next) => {
    const { error } = schemas.validate(req.body);
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    next();
  };
  
  module.exports = validateAll;