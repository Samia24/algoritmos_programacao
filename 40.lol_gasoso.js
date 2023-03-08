/*Q40.lista1 - Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de 
anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).*/

import * as readsync from 'readline-sync'

//Entrada
const anos = Number(readsync.question('Informe há quantos anos você fuma:  '))
const qtd_cig = Number(readsync.question('Informe quantos cigarros você fuma por dia: '))
const preco = Number(readsync.question('Informe o preço da carteira de cigarros: '))

// Processamento
const valor_uni = qtd_cig * preco / 20

const dias = anos * 365

const valor_tot = valor_uni * dias

console.log('\n>>> O valor gasto por um fumante é de R$', valor_tot.toFixed(2) + '.')
