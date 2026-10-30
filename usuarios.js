const express = require('express')
const { writeFile } = require('fs')
const app = express()
const path = require('path')
const fs = require('fs');
app.use(express.json())
const db = require('./database')

const listarUsuarios = db.prepare(`
        SELECT * FROM usuarios
    `)
const adicionarUsuarios = db.prepare(`
        INSERT INTO usuarios (nome, email, telefone)
        VALUES (?, ?, ?)
    `)


let usuarios = []

function salvar() {
    const jsonData = JSON.stringify(usuarios, null, 2);
    fs.writeFile("usuarios.json", jsonData, 'utf-8', (err) => {
        if (err) {
            console.error('erro ao salvar arquivo', err)
        } else {
            console.log('arquivo salvo com sucesso');
        }
    })
}
function ler() {
    // fs.readFile("usuarios.json", (err, data) => {
    //     if (err) throw err
    //     usuarios = JSON.parse(data)
    //     console.log('Arquivo carregado com sucesso')
    // })
    dados = fs.readFileSync('usuarios.json')
    usuarios = JSON.parse(dados)
    console.log('Arquivo carregado com sucesso')
}
app.get("/usuarios", (req, res) => {
    ler()
    const resposta = listarUsuarios.all
    res.json(resposta)
})

app.get("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => req.params.id == usuario.id)
    ler()
    res.json(encontrado)
})
app.post("/criarusuario", (req, res) => {
    if (req.body.nome && req.body.email && req.body.telefone) {
        let novoUsuario = {
            id: Date.now(),
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
        }
        usuarios.push(novoUsuario)
        salvar()
        res.json(novoUsuario)
    } else {
        res.send("Erro")
    }
})

app.patch("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)

    if (encontrado) {
        let novosdados = {}
        if (req.body.nome) novosdados.nome = req.body.nome
        if (req.body.email) novosdados.email = req.body.email
        if (req.body.telefone) novosdados.telefone = req.body.telefone
        Object.assign(encontrado, novosdados)
    }
    salvar()
    res.json(encontrado)
})

app.delete("/usuarios/:id", (req, res) => {
    let encontrado = usuarios.find((usuario) => usuario.id == req.params.id)
    if (encontrado) {
        usuarios = usuarios.filter((usuario) => usuario.id != req.params.id)
        res.send("Deletado")
    } else {
        res.send("Usuario Não encontrado")
    }
    salvar()


})
app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");

})

// Atividade:salvar a lista de usuarios em um arquivo.json