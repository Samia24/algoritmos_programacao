/*Q31.lista1 - Leia um número inteiro (4 dígitos binários), calcule e escreva 
o equivalente na base decimal.*/

import * as readsync from 'readline-sync'

//Entrada
const num = Number(readsync.question('Informe um número inteiro de 4 dígitos: '))

//Processamento
//Separando os números
const milhar = Math.floor(num / 1000) 
const resto = num % 1000 

const centena = Math.floor(resto / 100)
const res = resto % 100

const dezena = Math.floor(res / 10)
const unidade = res % 10

// Convertendo para base decimal
const decimal = (unidade * (2 ** 0)) + (dezena * (2 ** 1)) + (centena * (2 ** 2)) + (milhar * (2 ** 3))

//Saída
console.log('\nMilhar:', milhar)
console.log('Centena:', centena)
console.log('Dezena:', dezena)
console.log('Unidade:', unidade)
console.log('\n>>> O número binário digitado pelo usuário é', milhar, centena, dezena, unidade + ',', 'que convertido para base decimal equivale a', decimal + '.')
