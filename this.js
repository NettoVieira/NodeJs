console.log(this === global)/**Isso é falso pois o this aponta para module exports e nao para o global */
console.log(this === module)/**Falso pelos mesmo argumento do comentario a cima*/

console.log(this === module.exports)/**true pois o this aponta para module.exports */
console.log(this === exports)/* True pois o exports extende o module pra onde o this aponta */

/*outra coisa que devemos se atentar ao this é quando você acessa uma função que está dentro do modulo*/
function logThis() {
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
}

logThis() /*como podemos ver o resultado: Chamando a função vemos que quando falamos que
o this é igual ao exports ele retorna falso, pois dentro de uma função o this não
aponta para o exports e fora de uma função ele aponta. Então devemos prestar bastante atenção
nessa situação. Mas para onde que o this aponta dentro de uma função?! Se executar o codigo a cima vera
que dentro de uma função o this aponta para modulo global Por isso devemos ter muita atenção 
da onde estamos utilizando o this...*/