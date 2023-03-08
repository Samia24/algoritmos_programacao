/*Q26.lista1 - Leia um número inteiro de dias, calcule e escreva 
quantas semanas e quantos dias ele corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const dias = Number(readsync.question('Informe a quantidade de dias: '))

//Processamento
const semanas = Math.floor(dias / 7)
const d = dias % 7

//Saída
console.log('\n>>> '+ dias.toFixed(1) + ' dia(s)', 'equivale a', semanas.toFixed(1) + ' semanas e', d.toFixed(1), 'dias.')