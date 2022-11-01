const validarUniversidad = (req) => {
  const validaciones = [];

  if (!req.body.nombre) {
    validaciones.push("Nombre universidad es requerido");
  }

  if (!req.body.direccion) {
    validaciones.push("Direccion es requerido");
  }

  if (!req.body.telefono) {
    validaciones.push("Telefono es requerido");
  }

  return validaciones;
};

module.exports = {
  validarUniversidad,
};
