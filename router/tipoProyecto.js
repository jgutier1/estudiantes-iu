const { Router } = require("express");
const { validarTipoProyecto } = require("../helpers/validar-tipoProyecto");
const TipoProyecto = require("../models/TipoProyecto");

const router = Router();

router.get("/", async function (req, res) {
  try {
    const tipoProyecto = await TipoProyecto.find();
    res.send(tipoProyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.post("/", async function (req, res) {
  try {
    const validaciones = validarTipoProyecto(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    let tipoProyecto = new TipoProyecto();
    tipoProyecto.nombre = req.body.nombre;

    tipoProyecto.fechaCreacion = new Date();
    tipoProyecto.fechaActualizacion = new Date();
    tipoProyecto = await tipoProyecto.save();
    res.send(tipoProyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.put("/:tipoProyectoId", async function (req, res) {
  try {
    const validaciones = validarTipoProyecto(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    let tipoProyecto = await TipoProyecto.findById(req.params.tipoProyectoId);
    tipoProyecto.nombre = req.body.nombre;
    tipoProyecto.fechaActualizacion = new Date();
    tipoProyecto = await tipoProyecto.save();
    res.send(tipoProyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

module.exports = router;
