import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://adriano:1122@livros.sslg7dg.mongodb.net')

const db = mongoose.connection

export default db
