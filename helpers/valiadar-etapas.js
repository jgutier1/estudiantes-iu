const validarEtapas = (req) => {
  const validaciones = [];

  const nombres = [
    "Anteproyecto",
    "Entrega parcial 1",
    "Entrega parcial 2",
    "Entrega final",
  ];
  if (!req.body.nombre) {
    validaciones.push("Nombre es requerido");
  }

  if (!nombres.includes(req.body.nombre)) {
    validaciones.push("El nombre no existe");
  }
  return validaciones;
};

module.exports = {
  validarEtapas,
};
