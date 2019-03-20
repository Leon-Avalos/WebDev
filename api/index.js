//importar las librerias
var express = require('express')
var parser = require('body-parser')

//Inicializar la libreria
var app = express()

//Usando body-parser
app.use(parser.json())

//Primera ruta
app.get('/', function(req, res){
    console.log(req)

    let test = {}
    test.message = 'Estoy en el json message'
    res.send(test)
})

app.post('/', function(req, res){
    res.send('Estoy en el POST')

})

/**
 * CREAR TAREA
 * REQ: SOLICITUD -> BODY (TAREA A REGISTRAR)
 * 
 */

//Array de tareas
var tareas = []

//Leyendo tareas
app.get('/tareas', function(req, res){
    tareas.push(req.body)
    res.send(tareas)


})

//Agregando tareas
app.post('/tareas', function(req, res){
    //Capturar el body
    let body = req.body
    res.send(body)
    console.log(body)
})



//Creando server
var port = 3000

app.listen(port, function(){
    console.log(`API ejecutando en http://localhost:${port}`)

})

