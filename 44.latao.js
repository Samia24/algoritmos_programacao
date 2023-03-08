/*Q44.lista1 - Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/

import * as readsync from 'readline-sync'

//Entrada
const qtd_latao = Number(readsync.question('Informe a quantidade de latão: '))


// Processamento
const cobre = qtd_latao * 0.70
const zinco = qtd_latao * 0.30

console.log('\n>>> A quantidade de cobre é de', cobre.toFixed(1), 'e a de zinco é de', zinco.toFixed(1) + ',', 'que compõem o latão.')

