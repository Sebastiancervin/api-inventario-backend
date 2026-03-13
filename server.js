const express = require("express");
const cors = require("cors");
const verificarToken = require("./middlewares/authMiddleware");

require("./database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", require("./routes/auth"));
app.use("/computadoras", require("./routes/computadoras"));

app.get("/perfil", verificarToken, (req, res) => {
  res.json({
    mensaje: "Ruta protegida",
    usuario: req.user
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});