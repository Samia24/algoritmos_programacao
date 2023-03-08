/*Q35.lista1 - Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. 
Ex.: número = 9534 ; soma = 9+5+3+4 = 21.*/

import * as readsync from 'readline-sync'

// entrada
const numero = Number(readsync.question('Número: ')) 

// processamento 
const milhar = Math.floor(numero / 1000) 
const resto = numero % 1000 

const centena = Math.floor(resto / 100) 
const res = resto % 100

const dezena = Math.floor(res / 10) 
const unidade = res % 10

const soma = milhar + centena + dezena + unidade

// saída
console.log('\n >>> Soma:', soma)