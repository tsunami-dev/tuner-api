const checkName = (req, res, next) => {
    if (req.body.name) {
      return next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const favorite = req.body.is_favorite;
    if (typeof favorite === "boolean") {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be type of boolean" });
    }
  };
  
  module.exports = { checkName, checkBoolean };