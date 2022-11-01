const { Router } = require("express");
const { validarEtapas } = require("../helpers/valiadar-etapas");
const Etapas = require("../models/Etapas");

const router = Router();

router.get("/", async function (req, res) {
  try {
    const etapas = await Etapas.find();
    res.send(etapas);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.post("/", async function (req, res) {
  try {
    const validaciones = validarEtapas(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    let etapas = new Etapas();
    etapas.nombre = req.body.nombre;

    etapas.fechaCreacion = new Date();
    etapas.fechaActualizacion = new Date();
    etapas = await etapas.save();
    res.send(etapas);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.put("/:etapaId", async function (req, res) {
  try {
    const validaciones = validarEtapas(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    let etapa = await Etapas.findById(req.params.etapaId);
    if (!etapa) {
      return res.send("No existe etapa");
    }
    etapa.nombre = req.body.nombre;

    etapa.fechaActualizacion = new Date();
    etapa = await etapa.save();
    res.send(etapa);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

module.exports = router;
