const imoveis = require("../dados/imoveis");

function consultarListaDeImoveis(req, res) {
    res.json(imoveis);
};

function consultarImoveisPorId(req, res) {
    const id = Number(req.params.id);
    console.log(req.params.id);

    const idExiste = imoveis.find(imovel => imovel.id === id);
    if (idExiste) {
        res.json(idExiste);
    } else {
        res.json({ erro: "Nenhum imóvel cadastrado para este ID." });
    };
};

module.exports = { consultarListaDeImoveis, consultarImoveisPorId };