/**
 * Arquivo: sc/models/post.js
 * Author: Denys Rodrigues 
 * Description: Arquivo responsável pelo modelo:'Post' para realizar a conexão a base de dados.
 * Data: 11/04/2019
 */

 /**
  * Infos inerentes a Classe:
  * === Post ====
  * id: number (gerado pelo MongoDb - GUID)
  * titulo: string
  * email: string
  * conteudo: string
  */

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  const PostSchema = new Schema(
      {
      titulo: {type: String, required: true},
      nome: { type: String, required: true},
      email: { type: String, required: true},
      conteudo: {type: String, required: true}
      },
      {
          versionKey: false,
      },
    );
    //
    module.export = mongoose.model('post', PostSchema);