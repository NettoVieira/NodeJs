/*Como passar um parametro para um modulo? Se um modulo retornar uma função
Vocẽ pode retornar essa função passando os parametros, então seria assim
que passariamos paramentros para um modulo. Como exemplo a seguir ->*/
module.exports = function(...nomes) {
  return nomes.map(nome => `Boa Semana ${nome}`)
}

/*Então como no exemplo nós retornamos uma função que recebe um argumento variavel
de nomes, e esse Array de nomes vai retornar uma saudação para cada nome que passarmos.
No Arquivo: passandoParametrosCliente.js vamos fazer o exemplo*/