/*Q34.lista1 - Leia 3 números, calcule e escreva a média dos números..*/

import * as readsync from 'readline-sync'

//Entrada
const num1 = Number(readsync.question('Informe o primeiro número: '))
const num2 = Number(readsync.question('Informe o segundo número: '))
const num3 = Number(readsync.question('Informe o terceiro número: '))

//Processamento
const media = (num1 + num2 + num3) / 3

//Saída
console.log('\n>>> A média dos números', num1 + ' ,' + num2 + ' e ' + num3 + ' é >>>', media + '.')