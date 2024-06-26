import jwt from "jwt-simple";
import dotenv from "dotenv";

const isAuth = (req, res, next) => {
  dotenv.config({ path: "../.env" });

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(400)
      .json({ message: "El encabezado authorization es requerido" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer") {
    return res
      .status(400)
      .json({ message: "El formato del token es Bearer {token}" });
  }

  if (!token) {
    return res.status(400).json({ message: "Token no encontrado" });
  }

  try {
    const payload = jwt.decode(token, process.env.SECRET);

    const now = Math.floor(Date.now / 1000);
    if (payload.exp < now) {
      return res.status(400).json({ message: "El token ha expirado" });
    }

    req.role = payload.role;

    next();
  } catch (error) {
    res.status(500).json({ message: `Error token ${error}` });
  }
};

export default isAuth;
