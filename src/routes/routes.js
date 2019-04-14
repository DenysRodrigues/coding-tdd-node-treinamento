/**
* Arquivo: src/routes/routes.js
* Author: Denys R
* Description: Arquivo reponsavel pelas rotas da aplicação - rotas 'POST'
* Data: 14/04/2019
*/

//HTTP: GET | GET by Id | PUT | DELETE | POST

const express = require('expres');
const router = express.router;
const posts = require('../controllers/posts');

//Vamos definir as rotas da nossa api: 'Post'

// ROTA DEFAULT: http://localhost:8000/v1/posts
router.get('/posts/', posts.findAll)

// ROTA DEFAULT: http://localhost:8000/v1/posts/:id
router.get('/post/:id', posts.findOne)

// ROTA DEFAULT: http://localhost:8000/v1/posts
router.post('/posts', posts.createOne)

// ROTA DEFAULT: http://localhost:8000/v1/posts:id
router.put('/posts:id', post.posts.uddateOne)

// ROTA DEFAULT: http://localhost:8000/v1/post:id
router.delete('/post', post.deleteOne);
