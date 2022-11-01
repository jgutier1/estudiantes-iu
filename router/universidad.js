const { Router } = require("express");
const Universidad = require("../models/Universidad");
const { validarUniversidad } = require("../helpers/validar-universidad");

const router = Router();

router.get("/", async function (req, res) {
  try {
    const universidad = await Universidad.find();
    res.send(universidad);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrio un error al consultar universidad");
  }
});

router.post("/", async function (req, res) {
  try {
    const validaciones = validarUniversidad(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    let universidad = new Universidad();
    universidad.nombre = req.body.nombre;
    universidad.direccion = req.body.direccion;
    universidad.telefono = req.body.telefono;
    universidad.fechaCreacion = new Date();
    universidad.fechaActualizacion = new Date();

    universidad = await universidad.save();
    res.send(universidad);
  } catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error al consultar universidad");
  }
});

router.put("/:universidadId", async function (req, res) {
  try {
    const validaciones = validarUniversidad(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }
    let universidad = await Universidad.findById(req.params.universidadId);
    if (!universidad) {
      return res.status(400).send("universidad no existe");
    }

    universidad.nombre = req.body.nombre;
    universidad.direccion = req.body.direccion;
    universidad.telefono = req.body.telefono;

    universidad.fechaActualizacion = new Date();

    universidad = await universidad.save();
    res.send(universidad);
  } catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error al consultar universidad");
  }
});

module.exports = router;
