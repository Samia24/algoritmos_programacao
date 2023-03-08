/*Q24.lista1 - Leia um valor em m, calcule e escreva o equivalente em cm.*/

import * as readsync from 'readline-sync'

//Entrada
const m = Number(readsync.question('Informe um valor em metros: '))

//Processamento
const cm = m * 100

//Saída
console.log('\n>>> '+ m.toFixed(1) + ' metro(s)', 'equivale a', cm.toFixed(1) + 'centímetros.')