const express = require("express");
const server = express();

server.use("/", express.static("ImpuestoPredial"));

server.listen(3000, () => {
    console.log('Impuesto predial corriendo en el puerto 3000');
});