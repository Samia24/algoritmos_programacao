/*Q27.lista1 - Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const segundos = Number(readsync.question('Informe a quantidade de segundos: '))

//Processamento
const h = Math.floor(segundos / 3600)
const resto = segundos % 3600
const min = Math.floor(resto / 60)
const s = resto % 60

//Saída
console.log('\n>>> '+ segundos.toFixed(1) + ' segundo(s)', 'equivale a', h + 'h', min + 'min', s + 's.' )