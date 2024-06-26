const isAdmin = (req, res, next) => {
  if (req.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({ message: `Acceso por rol no autorizado` });
  }
};

export default isAdmin;
