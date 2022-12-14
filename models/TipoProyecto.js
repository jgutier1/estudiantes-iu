const { Schema, model } = require("mongoose");

const TipoProyectoSchema = Schema({
  nombre: {
    type: String,
    required: true,

    enum: [
      "Ensayo",
      "Articulo",
      "Monografia",
      "Trabajo final de pregrado",
      "Trabajo final de especializacion",
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

module.exports = model("TipoProyecto", TipoProyectoSchema);
