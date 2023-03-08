/*Q29.lista1 - Leia um número inteiro de meses, calcule e 
escreva quantos anos e quantos meses ele corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const meses = Number(readsync.question('Informe a quantidade de meses: '))

//Processamento
const anos = Math.floor(meses/12)
const m = meses % 12

//Saída
console.log('\n>>>', meses, 'meses', 'equivale a', anos, 'anos e', m, 'mes(es).')