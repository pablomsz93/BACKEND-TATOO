module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    const userRoleName = req.tokenData ? req.tokenData.userRoleName : undefined;

    const adminGroupRoles = ["super-admin"];

    if (adminGroupRoles.includes(userRoleName)) {
      return next();
    }

    if (allowedRoles.includes(userRoleName)) {
      return next();
    }

    res.status(403).json({
      success: false,
      message: "Acceso no autorizado",
    });
  };
};
