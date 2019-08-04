const moduloA = require('../../moduloA') // sempre se atentar as letras maiusculas dos modulos
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./PastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
  res.write('bom dia!')
  res.end()
}).listen(3000)