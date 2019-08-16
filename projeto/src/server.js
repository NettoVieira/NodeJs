const express = require('express');
const bancoDeDados = require('./bancoDeDados')

const porta = 3003;

const app = express();

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtpos', (req, res, next) =>{
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}`)
})