/*Q45.lista1 - Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/

import * as readsync from 'readline-sync'

//Entrada
const quantia = Number(readsync.question('Informe o valor que você deseja sacar: '))


// Processamento
const nota_50 = Math.floor(quantia / 50) 
const resto = quantia % 50 

const nota_10 = Math.floor(resto / 10)
const res = resto % 10

const nota_5 = Math.floor(res / 5)
const r = res % 5

const nota_1 = Math.floor(r / 1)

//Saída
console.log('\n>>> No saque feito, a quantidade de notas de R$ 50,00 é:', nota_50 + ' nota(s); \nDe R$ 10,00 é de', nota_10 + ' nota(s); \nDe R$ 5,00 é de', nota_5 + ' nota(s); \nDe R$ 1,00 é de', nota_1 + ' nota(s).')

