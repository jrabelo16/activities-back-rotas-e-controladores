const express = require("express");
const controladores = require("./controladores/imoveis");
const roteador = express();


roteador.get("/imoveis", controladores.consultarListaDeImoveis);
roteador.get("/imoveis/:id", controladores.consultarImoveisPorId);

module.exports = roteador;