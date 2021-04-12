//map server pra gerar outro array com dados modificados
const nums = [1, 2, 3, 4, 5]

let result = nums.map(a => a * 20)

let func = (a, i) => a * i;
//func = (a, i, array) => ((a * i) + array.length)

result = nums.map(func)
console.log(result)

const soma = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e =>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const total = nums.map(soma).map(triplo).map(paraDinheiro)
console.log(total)