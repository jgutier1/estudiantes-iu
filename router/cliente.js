const { Router } = require("express");
const { validarCliente } = require("../helpers/validar-cliente");
const Cliente = require("../models/Cliente");
const router = Router();

router.post("/", async function (req, res) {
  try {
    const validaciones = validarCliente(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    console.log("objeto recibido", req.body);

    const existeCliente = await Cliente.findOne({ email: req.body.email });
    console.log("Respuesta existeCliente", existeCliente);
    if (existeCliente) {
      return res.send("email ya existe");
    }

    let cliente = new Cliente();
    cliente.nombre = req.body.nombre;
    cliente.email = req.body.email;
    cliente.fechaCreacion = new Date();
    cliente.fechaActualizacion = new Date();

    cliente = await cliente.save();

    res.send(cliente);
  } catch (error) {
    console.log(error);
    res.send("ocurio un error");
  }
});

router.get("/", async function (req, res) {
  try {
    const cliente = await Cliente.find();
    res.send(cliente);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});

router.put("/:clienteId", async function (req, res) {
  try {
    const validaciones = validarCliente(req);

    if (validaciones.length > 0) {
      return res.status(400).send(validaciones);
    }

    console.log("objeto recibido", req.body, req.params);

    let cliente = await Cliente.findById(req.params.clienteId);

    if (!cliente) {
      return res.send("Cliente no esxiste");
    }

    const existeCliente = await Cliente.findOne({
      email: req.body.email,
      _id: { $ne: cliente._id },
    });

    console.log("Respuesta existeCliente", cliente);

    if (existeCliente) {
      return res.send("Email ya existe");
    }

    cliente.email = req.body.email;
    cliente.nombre = req.body.nombre;
    cliente.fechaActualizacion = new Date();

    cliente = await cliente.save();

    res.send(cliente);
  } catch (error) {
    console.log(error);
    res.send("ocurio un error");
  }
});

module.exports = router;
