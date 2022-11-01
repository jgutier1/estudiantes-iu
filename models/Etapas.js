const { Schema, model } = require("mongoose");

const EtapasSchema = Schema({
  nombre: {
    type: String,
    required: true, // not null
    enum: [
      "Anteproyecto",
      "Entrega parcial 1",
      "Entrega parcial 2",
      "Entrega final",
    ],
  },

  fechaCreacion: {
    type: Date,
    required: true,
  },
  fechaActualizacion: {
    type: Date,
    required: true,
  },
});

module.exports = model("Etapas", EtapasSchema);
