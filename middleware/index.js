const express = require('express')
const app = express()

const HELLO =  (req, res) => {
    res.send("hello World")
}

app.get("/", HELLO)

app.post("/", HELLO)

app.listen(3000, () => {
    console.log("Servidor Rodando Corretamente");
})