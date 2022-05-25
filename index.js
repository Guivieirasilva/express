const express = require("express")
const path =  require("path")

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get("/", (req,res) => {

    res.send("<h1>Hello World From GET</h1>")
})

app.post("/",(req,res) => {
    
        res.send("<h1>Hello World From POST</h1>")
    })
app.put("/",(req,res) => {
    
        res.send("<h1>Hello World From PUT</h1>")
    })
app.delete("/",(req,res) => {
    
        res.send("<h1>Hello World From DELETE</h1>")
    })


const PORT = 5000

app.listen(PORT,() => { 
    console.log(`Servidor Rodando na porta ${PORT}`)
}) 














//  res.type('.html');
//  res.type('html');
//  res.type('json');
//  res.type('application/json');
//  res.type('png');