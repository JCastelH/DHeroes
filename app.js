const express = require( 'express' )
const app = express ()
const path = require ("path");

app.use(express.static(path.join(__dirname, "./public")))

app.listen (3030, () =>{
    console.log("Servidor funcionando en localhost 3030")
})

app.get ( "/" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"))

})

app.get ( "/babbage" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./babbage.html"))

})

app.get ( "/berners-lee" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./berners-lee.html"))

})

app.get ( "\clarke" , (req, res) => {
    res.sendFile(path.resolve(__dirname, ".\clarke.html"))

})

app.get ( "/hamilton" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./hamilton.html"))

})

app.get ( "/hopper" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./hopper.html"))

})

app.get ( "/lovelace" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./lovelace.html"))

})

app.get ( "/turing" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "./turing.html"))

})