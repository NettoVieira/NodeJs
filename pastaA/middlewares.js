// middleware pattern (chain of responsibility)

/**
 * criaremos 3 paços como funções onde os parametros 'ctx', 'next' atribuiram 
 * valor ao objeto ctx.valor e chamaremos após o next como uma função até o passo 3
 */
const passo1 = (ctx, next) => {
  ctx.valor1 =  'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

/**
 * após chamarmos os paços iremos construir uma função que recebera os valores dos ctx
 * e um array com os middlewares (mid1, mid2, mid3)
 */
const exec = (ctx, ...middlewares) => {
  /**
   * após criaremos outra função que executara os paços de acordo com as validações
   * dos paramestros da função.
   */
  const execPasso = indice => {
    middlewares && indice < middlewares.length && middlewares[indice](ctx, () =>
      execPasso(indice + 1))
  }

  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)

console.log(ctx)