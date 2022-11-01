const validarTipoProyecto = (req) => {
  const validaciones = [];

  if (!req.body.nombre) {
    validaciones.push("Tipo proyecto es requerido");
  }

  const nombres = [
    "Ensayo",
    "Articulo",
    "Monografia",
    "Trabajo final de pregrado",
    "Trabajo final de especializacion",
  ];

  if (!nombres.includes(req.body.nombre)) {
    validaciones.push("El nombre no existe");
  }

  return validaciones;
};

module.exports = {
    validarTipoProyecto,
};
