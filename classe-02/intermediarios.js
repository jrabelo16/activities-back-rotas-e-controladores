
function travaDeSenha(req, res, next) {
    const senha = req.query.senha;
    console.log(senha);

    if (senha === "cubos123") {
        next();
    } else if (senha === undefined) {
        res.status(401);
        res.json({ mensagem: "É necessário informar senha." });
    } else {
        res.status(401);
        res.json({ mensagem: "Senha incorreta." });
    }
};


module.exports = { travaDeSenha };