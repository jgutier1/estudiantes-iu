const { Router } = require("express");
const Proyecto = require("../models/Proyecto");
const { validarProyecto } = require("../helpers/validar-proyecto");

const router = Router();

router.get("/", async function (req, res) {
  try {
    const proyecto = await Proyecto.find().populate([
      {
        path: "cliente",
        select: "nombre email",
      },

      {
        path: "tipoProyecto",
        select: "nombre",
      },

      {
        path: "universidad",
        select: "nombre direccion telefono",
      },

      {
        path: "etapaProyecto",
        select: "nombre",
      },
    ]);

    res.send(proyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.post("/", async function (req, res) {
  try {
    const validaciones = validarProyecto(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    const existeProyectoPorNumero = await Proyecto.findOne({
      numero: req.body.numero,
    });
    if (existeProyectoPorNumero) {
      return res.status(400).send("ya existe el proyecto");
    }

    let proyecto = new Proyecto();
    proyecto.numero = req.body.numero;
    proyecto.titulo = req.body.titulo;
    proyecto.fechaIniciacion = req.body.fechaIniciacion;
    proyecto.fechaEntrega = req.body.fechaEntrega;
    proyecto.valor = req.body.valor;
    proyecto.cliente = req.body.cliente._id;
    proyecto.tipoProyecto = req.body.tipoProyecto._id;
    proyecto.universidad = req.body.universidad._id;
    proyecto.etapaProyecto = req.body.etapaProyecto._id;
    proyecto.fechaCreacion = new Date();
    proyecto.fechaActualizacion = new Date();
    proyecto = await proyecto.save();
    res.send(proyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.put("/:proyectoId", async function (req, res) {
  try {
    const validaciones = validarProyecto(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    let proyecto = await Proyecto.findById(req.params.proyectoId);
    if (!proyecto) {
      return res.send("Proyecto no existe");
    }
    /*
    const existeProyectoPorNumero = await Proyecto.findOne({
      numero: req.body.numero,
    });
    if (proyecto && existeProyectoPorNumero) {
      return res.status(400).send("Ya existe el proyecto");
    }*/

    

    proyecto.numero = req.body.numero;
    proyecto.titulo = req.body.titulo;
    proyecto.fechaIniciacion = req.body.fechaIniciacion;
    proyecto.fechaEntrega = req.body.fechaEntrega;
    proyecto.valor = req.body.valor;
    proyecto.cliente = req.body.cliente._id;
    proyecto.tipoProyecto = req.body.tipoProyecto._id;
    proyecto.universidad = req.body.universidad._id;
    proyecto.etapaProyecto = req.body.etapaProyecto._id;
    proyecto.fechaCreacion = new Date();
    proyecto.fechaActualizacion = new Date();
    res.send(proyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

module.exports = router;
