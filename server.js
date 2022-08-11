const http = require('http')
const port = 3000

const rotas = [
  { '/': 'Curso Node' },
  { '/livros': 'Entrei na página de livros' },
  { '/autores': 'Listagem de autores' }
]

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  console.log('req.url ->', req.url)
  res.end(rotas[req.url])
})

server.listen(port, () => {
  console.log(`Servidor escutando em http:localhost: ${port}`)
})
