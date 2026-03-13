const jwt = require("jsonwebtoken");

const SECRET = "secreto_super_seguro";

function verificarToken(req, res, next) {

    const header = req.headers["authorization"];

    if (!header) return res.status(401).json({ mensaje: "Token requerido" });

    const token = header.split(" ")[1];

    jwt.verify(token, SECRET, (err, user) => {

        if (err) return res.status(403).json({ mensaje: "Token inválido" });

        req.user = user;

        next();

    });

}

module.exports = verificarToken;