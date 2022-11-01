const express = require("express");
require("dotenv").config();

const { getconnection } = require("./db/db-connection-mongo");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

//implementar cors
app.use(cors());

getconnection();

// parseo JSON
app.use(express.json());

app.use("/cliente", require("./router/cliente"));
app.use("/etapa", require("./router/etapas"));
app.use("/proyecto", require("./router/proyecto"));
app.use("/tipo-proyecto", require("./router/tipoProyecto"));
app.use("/universidad", require("./router/universidad"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
