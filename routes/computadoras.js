const Computadora = require("../models/Computadora");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const nuevaComputadora = new Computadora(req.body);
    const guardada = await nuevaComputadora.save();
    res.json(guardada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;

router.get("/", async (req, res) => {
  try {
    const computadoras = await Computadora.find();
    res.json(computadoras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const computadora = await Computadora.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(computadora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    await Computadora.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Computadora eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


