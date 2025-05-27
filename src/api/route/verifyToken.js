const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Token is invalid" });
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "You are not authenticated" });
  }
};

const verifyTokenAndAuthentication = (req, res, next) => {
  verifyToken(req, res, () => {
    if (parseInt(req.user.id) === parseInt(req.params.id) || req.user.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "You are not allowed to access this" });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "You are not allowed to access this" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthentication,
  verifyTokenAndAdmin,
};
