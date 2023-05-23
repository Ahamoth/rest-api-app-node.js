const ctrlWrapper = (ctrl) => {
  const f = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return f;
};

module.exports = ctrlWrapper;