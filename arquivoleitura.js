const fs = require('fs')

const caminho = __dirname + '/arquivo.json' /*pegando o caminho a 
* partir do diretorio atual
*/

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
/**
 * No caso do Sincrono todo o Eventloop do node sera carregado com esse evento 
 * e só continuara os outros processos quando o arquivo terminar de ser carregado
 */


//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)

  /**
   * No caso do Assincrono nós utilizaremos o metodo readFile passando nossa 
   * variavel caminho com o encode e depois passaremos uma callback que só ira 
   * ser disparada quando o arquivo for completamente carregado, tornando esse 
   * metedo mais interessante para fazer o processamento de algum arquivo. Lembrando
   * que tivemos que pegar o nosso arquivo Json e convertelo para Objeto para que
   * conseguissemos acessar o valor dos seus atributos
  */
})

/**
 * Nesse exemplo a baixo só exemplifiquei que necessariamente nós já
 * conseguimos ter um objeto a partir de um arquivo json a partir do require
 */

//lendo JSON
const config = require('./arquivo.json')
console.log(config.db)

/**
 * Lendo Pasta
 */

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})