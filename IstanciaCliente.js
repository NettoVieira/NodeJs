const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const ContadorC = require('./IstanciaNova')()
const ContadorD = require('./IstanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor)


ContadorD.inc()
ContadorD.inc()
console.log(ContadorC.valor, ContadorD.valor)