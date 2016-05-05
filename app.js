var express = require('express');
var app = express();
app.use(app.router);

app.get('/saludo', function(req, res) {
    var nombre = req.query.nombre;
    res.send('<h1>Hola ' + saludador.saludar(nombre) + '</h1>');
});

app.get('/despedida', function(req, res) {
    var nombre = req.query.nombre;
    res.send('<h1>Chau ' + saludador.saludar(nombre) + '</h1>');
});
