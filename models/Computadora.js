const Computadora = require("../models/Computadora");
const mongoose = require("mongoose");

const ComputadoraSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  ram: String,
  procesador: String,
  estado: String
});

module.exports = mongoose.model("Computadora", ComputadoraSchema);