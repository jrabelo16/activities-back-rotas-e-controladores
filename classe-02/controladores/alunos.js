const alunos = require("../dados/alunos");
const cursos = [
    "Desenvolvimento de Software",
    "Programação do Zero",
    "Design UX/UI",
    "Flutter",
    "Product Management"
];

function validarAluno(aluno) {
    if (!aluno.nome) {
        return "O campo 'nome' é obrigatório.";
    };

    if (!aluno.sobrenome) {
        return "O campo 'sobrenome' é obrigatório.";
    };

    if (!aluno.idade) {
        return "O campo 'idade' é obrigatório.";
    };

    if (!aluno.curso) {
        return "O campo 'curso' é obrigatório.";
    };

    if (typeof aluno.nome !== "string") {
        return "O campo 'nome' deve ser preenchido com um texto.";
    } else if (aluno.nome.split(" ").some(letra => !letra)) {
        return "O campo 'nome' deve ser preenchido com um texto.";
    };

    if (typeof aluno.sobrenome !== "string") {
        return "O campo 'sobrenome' deve ser preenchido com um texto.";
    };

    if (typeof aluno.idade !== "number") {
        return "O campo 'idade' deve ser preenchido com um número.";
    };

    if (typeof aluno.curso !== "string") {
        return "O campo 'curso' deve ser preenchido com um texto.";
    };

    if (aluno.idade < 18) {
        return "O aluno deve ser maior de idade.";
    };

    if (!cursos.includes(aluno.curso)) {
        return "O curso informado não é válido.";
    };

};

function validarId(id) {
    if (typeof id !== "number") {
        return "O ID deve ser um número válido."
    }
};

function consultarListaDeAlunos(req, res) {
    res.status(200);
    res.json(alunos);
};

function consultarAlunosPorId(req, res) {
    const id = Number(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);
    const erro = validarId(id);

    if (erro) {
        res.status(400);
        res.json({ mensagem: erro });
        return;
    };

    if (!aluno) {
        res.status(404);
        res.json({ mensagem: "Não existe aluno para o ID buscado." });
        return;
    };

    res.status(200);
    res.json(aluno);
};

function criarAluno(req, res) {
    let id = Number(alunos.length + 1);

    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({ mensagem: erro });
        return;
    };

    const novoAluno = {
        id: id,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    };

    res.status(201);
    res.json(novoAluno);
    alunos.push(novoAluno);
};

function excluirAluno(req, res) {
    const id = Number(req.params.id);
    const indexDeAlunoExcluido = alunos.findIndex(aluno => aluno.id === id);

    if (indexDeAlunoExcluido) {
        res.status(200);
        res.json(alunos[indexDeAlunoExcluido]);
        alunos.splice(indexDeAlunoExcluido, 1);
    } else {
        res.status(404);
        res.json({ mensagem: "Não existe aluno para o ID informado." });
    };
};

module.exports = { consultarListaDeAlunos, consultarAlunosPorId, criarAluno, excluirAluno };