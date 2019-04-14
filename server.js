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

const port = process.env.PORT || 8000;
const configdb = require('./src/config/database');
//const routes = require('./src/routes/routes');

//mongoose.Promise = global.Promise;

//mongoose.connect(configdb.url, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'Erro ao realizar a conexão com a base de Dados..;: '));

/**if (configDb.util.getEnv('NODE_ENV') !== 'Test'){
    app.use(morgan('combined'));
} */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// ROTA DEFAULT: http://localhost:8000/v1
app.get('/v1',(req, res) => res.json({message: 'Sejam Bem-Vindos(as) a API: Live Coding - Glaucia Lemos!'}));

app.listen(port);
console.log(`Aplicação executando na porta...: ${port}`);

module.exports = app;