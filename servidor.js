const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Página inicial")
})

app.get("/sobre", (req,res) => {
    res.send("Página sobre o projeto")
})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
    
})