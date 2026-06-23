const User = require("../models/User");

const admin = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (user && user.role === "admin") {
    next();
  } else {
    res.status(403);

    throw new Error("Admin access only");
  }
};

module.exports = admin;
