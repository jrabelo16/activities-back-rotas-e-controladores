const express = require("express");
const controlador = require("./controladores/alunos");
const roteador = express();

roteador.get("/alunos", controlador.consultarListaDeAlunos);
roteador.get("/alunos/:id", controlador.consultarAlunosPorId);
roteador.post("/alunos", controlador.criarAluno);
roteador.delete("/alunos/:id", controlador.excluirAluno);

module.exports = roteador;
