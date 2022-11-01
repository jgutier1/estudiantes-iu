const validarProyecto = (req) => {
  const validaciones = [];

  if (!req.body.numero) {
    validaciones.push("Numero es requerido");
  }

  if (!req.body.titulo) {
    validaciones.push("Titulo es requerido");
  }

  if (!req.body.fechaIniciacion) {
    validaciones.push(" Fecha iniciacion es requerido");
  }

  if (!req.body.fechaEntrega) {
    validaciones.push("Fecha entrega es requerido");
  }

  if (!req.body.valor) {
    validaciones.push("Valor es requerido");
  }

  if (!req.body.cliente._id) {
    validaciones.push("Cliente  es requerido");
  }

  if (!req.body.tipoProyecto._id) {
    validaciones.push("Tipo proyecto  es requerido");
  }

  if (!req.body.universidad._id) {
    validaciones.push("Universidad  es requerido");
  }

  if (!req.body.etapaProyecto._id) {
    validaciones.push("Etapa proyecto  es requerido");
  }

  return validaciones;
};

module.exports = {
  validarProyecto,
};
