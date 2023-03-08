/*Q30.lista1 - Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const minutos = Number(readsync.question('Informe a quantidade de minutos: '))

//Processamento
const dias = Math.floor(minutos / 1440)
const resto = minutos % 1440
const horas = Math.floor(resto / 60)
const min = resto % 50

//Saída
console.log('\n>>> ', minutos, 'dia(s)', 'equivale a', dias, 'dias,', horas, 'horas e', min, 'minutos.')