/**
* Arquivo: server.js
* Author: Denys R
* Description: Arquivo principal e reponsavel por executar a API.
* Data: 09/04/2019
*/

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url, { useNewUrlParser: true }).then(() => {
    Console.log('Base de dados conectado com sucesso!');
}).catch((err)=> {
    console.log('Não conseguimos conectar com a Base de Dados. Fechando agora...:', err);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// ROTA DEFAULT: http://localhost:8000/
app.get('/',(req, res) => {
    res.json({message: 'Sejam Bem-Vindos(as) a API: Live Coding - Denys R!'});
});

//Aqui estamos fazendo a chamada das Rotas da api 'POST'
//require('./app/routes/routes')(app);
app.listen(8000, () => {
    console.log('Aplicação sendo executada na porta 8000')
})

module.exports = app;