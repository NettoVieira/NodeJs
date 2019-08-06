
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtraPais = funcionario => funcionario.pais === 'China' 
const filtraGenero = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data

  console.log(funcionarios.filter(filtraGenero).filter(filtraPais).reduce(menorSalario))
})



