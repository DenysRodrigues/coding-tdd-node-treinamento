/**
* Arquivo: src/controller/posts.js
* Author: Denys R
* Description: Arquivo reponsavel por tratar a Lógica das rotas da api 'POST'
* Data: 14/04/2019
*/

const _ = require('lodash');

const models = require('..//models.post');

module.exports = {
    findAll: findAll,
    findOne: findOne,
    createOne: createOne,
    updateOne: updateOne,
    deleteOne: deleteOne
};

//Método responsavel por Criar um novo 'Post': POST: http:/Localhost:8000/v1/posts

function createOne(req, res){
    postMessage.createOne({
    //models.findOne({
        titulo: req.body.titulo,
        nome: req.body.nome,
        email: req.body.email,
        conteudo: req.body.conteudo
    })
};