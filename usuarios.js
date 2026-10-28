const express = require('express')
const app = express()
let usuarios = [
    {
        id: 1,
        nome: "raimunda",
        email: "mundinha@hotmail.com",
        telefone: "(85)98456-7587",

    },
    {
        id: 2,
        nome: "antonio",
        email: "antonio@gmail.com",
        telefone: "(11)940028922",
    },
    {
        id: 3,
        nome: "Ruan",
        email: "ruan@hotmail.com",
        telefone: "(21)988003232",
    },
    {
        id: 4,
        nome: "Lia",
        email: "htinha@gmail.com",
        telefone: "(85)966404829",
    },
    {
        id: 5,
        nome: "Gerardo",
        email: "gerardocastro@gmail.com ",
        telefone: "(85)988888888",
    }
]

app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})

app.get("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => req.params.id == usuario.id)
    res.json(encontrado)
})
app.get("/criarusuario", (req, res) => {
    if (req.query.nome && req.query.email && req.query.telefone) {
        let novoUsuario = {
            id: Date.now(),
            nome: req.query.nome,
            email: req.query.email,
            telefone: req.query.telefone
        }
        usuarios.push(novoUsuario)
        res.json(novoUsuario)
    } else {
        res.send("Erro")
    }
})

app.get("/alterarusuario/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)

    if (encontrado) {
        let novosdados = {}
        if (req.query.nome) novosdados.nome = req.query.nome
        if (req.query.email) novosdados.email = req.query.email
        if (req.query.telefone) novosdados.telefone = req.query.telefone
        Object.assign(encontrado, novosdados)
    }
    res.json(encontrado)
})

app.get("/deletarusuario/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        usuarios = usuarios.filter((usuario) => usuario.id != req.params.id)
        res.send("Deletado")
    }   else{
        res.send("Usuario Não encontrado")
    }


})
app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");

})