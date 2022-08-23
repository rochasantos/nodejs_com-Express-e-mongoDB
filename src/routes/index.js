import express from 'express'
import livrosRoutes from './livrosRoutes.js'
import autoresRoutes from './autoresRoutes.js'

const routes = app => {
  app.get('/', (req, res) => {
    res.status(200).send('Curso Node com Express e MongoDB')
  })

  app.use(express.json(), livrosRoutes, autoresRoutes)
}

export default routes
