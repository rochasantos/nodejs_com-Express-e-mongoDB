# Node Js com Express e MongoDB

## Versão no node e npm

> node 16.14.0
> npm 8.3.1

## Iniciando o projeto

> > mkdir alura-node
> > npm init -y
> > code .

Obs: Enquanto require() é uma instrução node.js que usa CommonJS, import() é usado apenas com ES6.

Criar o arquivo `serve.js` na raiz do projeto.

```js
// server.js
const http = require("http");
const port = 3000; // servidor local

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type", "text/plain"});
	res.end("Curso de Node");
})

server.listen(port, () => {
	console.log(`Servidor escutando em http://localhost: ${port}`);
})
```

## Utilizando o nodemon

> > npm install nodemon
> > No package.json adicionar

```json
"scripts" : {
  "dev": "nodemon server.js"
}
```

Para executar o arquivo

> > npm run dev

## Utilizando o express

Crie a pasta `src` na raiz do projeto. Dentro de `src` crie o arquivo `app.js`.

```js
// app.js
import express from 'express'

const app = express()

const livros = [
  { id: 1, livro: 'Senhor dos Aneis' },
  { id: 2, livro: 'Hobiit' }
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

export default app
```

```js
//server.js
import app from './src/app.js'

const port = process.env.PORT || 3000 // porta no ambiente de produção e a fixa.

app.listen(port, () => {
  console.log(`Servidor escutando em http:localhost:${port}`)
})
```

Adcionar no `package.json`

```json
"type": "module", // para trabalhar com import e export do ES6
```
