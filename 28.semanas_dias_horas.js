/*Q28.lista1 - Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const horas = Number(readsync.question('Informe a quantidade de horas: '))

//Processamento
const semanas = Math.floor(horas/168)
const resto = horas % 168
const dias = Math.floor(resto/24)
const h = resto % 24

//Saída
console.log('\n>>> ', horas, 'hora(s)', 'equivale a', semanas, 'semanas,', dias, 'dias e', h, 'horas.')