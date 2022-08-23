import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://adriano:xxxx@livros.sslg7dg.mongodb.net')

const db = mongoose.connection

export default db
