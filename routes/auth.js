const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

const SECRET = "secreto_super_seguro";


// REGISTRO
router.post("/registro", async (req, res) => {

  try {

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const usuario = new Usuario({
      usuario: req.body.usuario,
      password: passwordHash
    });

    await usuario.save();

    res.json({ mensaje: "Usuario creado" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { usuario, password } = req.body;

    const user = await Usuario.findOne({ usuario });

    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user._id, usuario: user.usuario },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

module.exports = router;