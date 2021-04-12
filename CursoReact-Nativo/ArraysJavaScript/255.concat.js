const filhas = ['ana', 'bia']
const filhos = ['nando', 'diego']
/*
const familia = filhas.concat(filhos)
console.log(familia)

familia = filhas.concat(filhos, 'Eduardo')
console.log(familia)*/
const familia = filhas.concat(filhos, {nome: 'Fernando', idade: [1, 3]})
console.log(familia)