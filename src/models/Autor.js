import mongoose from 'mongoose'

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
  },
  {
    versionKey: false
  }
)

const autorModel = mongoose.model('autores', autorSchema) // cria a coleção autores e relaciona ao esquema autorSchema

export default autorModel
