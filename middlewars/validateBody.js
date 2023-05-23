const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const f = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return f;
};

module.exports = validateBody;