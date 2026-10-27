const express = require("express")
const app = express()
const path = require("path");
const usuarios = [
    {
        nome: "Valter Rodrigues",
        cargo: "Desenvolvedor FullStack",
        contato: "(85)98453-6385",
    },
    {
        nome: "Antonio",
        cargo: "Desenvolvedor FullStack",
        contato: "(85)98453-6385",
    },
    {
        nome: "Kelvin",
        cargo: "Desenvolvedor FullStack",
        contato: "(85)98453-6385",
    },
    {
        nome: "Rodrigues",
        cargo: "Desenvolvedor FullStack",
        contato: "(85)98453-6385",
    },
    {
        nome: "Sabrina",
        cargo: "Desenvolvedor FullStack",
        contato: "(85)98453-6385"
    },]

app.get("/", (req, res) => {
    res.send("Página inicial")
})

app.get("/sobre", (req, res) => {
    res.send("Página sobre o projeto")
})
app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})

app.get("/usuarios/:id", (req, res) => {
    if (req.query.campo) res.json(usuarios[req.params.id - 1][req.query.campo])
    else (res.json(usuarios[req.params.id - 1])
    )
})
app.get("/adicionar", (req, res) => {
    const novoUsuario = {
        nome: req.query.nome,
        cargo: req.query.cargo,
        contato: req.query.contato
    }
    usuarios.push(novoUsuario);
    res.json({
        mensagem: "Usuário adicionado!",
        usuario: novoUsuario[0]
    });
});
app.get("/deletar/:id", (req, res) => {
    const id = Number(req.params.id);
    const usuarioRemovido = usuarios.splice(id - 1, 1);
    res.json({
        mensagem: "Usuário removido!",
        usuario: usuarioRemovido[0]
    });
});
app.get("/modificar/:id", (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios[id - 1];
    
    if (req.query.nome) usuario.nome = req.query.nome;
    if (req.query.cargo) usuario.cargo = req.query.cargo;
    if (req.query.contato) usuario.contato = req.query.contato;

    res.json({
        mensagem: "Usuário modificado com sucesso",
        usuario: usuario
    });
});



app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");

})