import autores from '../models/Autor.js'

class AutoresController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      if (err) res.status(500).send({ message: err.message })
      else res.status(200).send(autores)
    })
  }

  static listarAutorPeloId = (req, res) => {
    const id = req.params.id
    autores.findById(id, (err, autor) => {
      if (err) res.status(500).send({ messsage: err.message })
      else res.status(200).send(autor)
    })
  }

  static cadastrarAutor = (req, res) => {
    const autor = new autores(req.body)
    autor.save(err => {
      if (err) {
        res.status(400).send({ message: err.message })
      } else {
        res.status(201).send('Autor cadastrado com sucesso!')
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const id = req.params.id
    autores.findByIdAndUpdate(id, { $set: req.body }, (err, autor) => {
      if (err) res.status(400).send({ message: err.message })
      else res.status(200).send(autor)
    })
  }

  static excluirAutor = (req, res) => {
    const { id } = req.params
    autores.findByIdAndDelete(id, err => {
      if (err) res.status(500).send({ message: err.message })
      else res.status(200).send('Autor excluido com sucesso!')
    })
  }
}

export default AutoresController
