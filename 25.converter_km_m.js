/*Q25.lista1 - Leia um número inteiro de metros, calcule e escreva 
quantos Km e quantos metros ele corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const m = Number(readsync.question('Informe um valor em metros: '))

//Processamento
const km = Math.floor(m / 1000)
const metros = m % 1000

//Saída
console.log('\n>>> '+ m.toFixed(1) + ' metro(s)', 'equivale a', km.toFixed(1) + 'quilômetros e', metros.toFixed(1), 'metros.')