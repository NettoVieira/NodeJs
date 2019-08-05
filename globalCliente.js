require('./global') //requirindo um objeto que inclui no modulo global

console.log(MinhaApp.saudacao()) /*Posso chamar de qualquer lugar*/

MinhaApp.nome = 'Eita' /*No entanto os Atributos ou valores no meu objeto
ficam passiveis de mundaças em qualquer modulo do projeto, sendo assim
sempre usar com cuidade quando for colcar algo em algum modulo global.
Como mostrado no Exemplo em outro modulo eu consigo alterar o valor 
do atributo do meu objeto. -> UMA FORMA DE EVITAR ISSO É UTILIZANDO O FREEZE.
NO ENTANTO CUIDADE AO TOCAR NO ESCOPO GLOBAL, NO ENTANTO PODE SER QUE ATENDA A ALGUMA SITUAÇÃO
MAS CUIDADE AO UTILIZA-LO*/

console.log(MinhaApp.nome)