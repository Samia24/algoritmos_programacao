/*Q42.lista1 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/

import * as readsync from 'readline-sync'

//Entrada
const ponto1_x1 = Number(readsync.question('Informe o valor da coordenada x1: '))
const ponto1_y1 = Number(readsync.question('Informe o valor da coordenada y1: '))

const ponto2_x2 = Number(readsync.question('\nInforme o valor da coordenada x2: '))
const ponto2_y2 = Number(readsync.question('Informe o valor da coordenada y2: '))

// Processamento
const dist = ((ponto2_x2 - ponto1_x1)**2) + ((ponto2_y2 - ponto1_y1)**2)
const d = Math.sqrt(dist, 1/2)

//Saída
console.log('\n>>> A distância entre os pontos um e dois é', d.toFixed(1) + '.')