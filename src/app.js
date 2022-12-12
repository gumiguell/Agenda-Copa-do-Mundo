const express = require("express");
const route = require('./routes/route');

const app = express();

app.use(express.json());

app.use('/', route);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.listen(8080, () => {
    console.log("Servidor da Agenda da Copa rodando!");
})