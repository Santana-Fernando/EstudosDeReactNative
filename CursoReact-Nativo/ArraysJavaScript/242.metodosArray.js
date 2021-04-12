const array = ['Aries', 'Touro', 'Gemeos', 'Cancer']

array.pop() //Sempre vai tirar o último elemento do Array
console.log(array)

array.push('Leao') //Insere um elemento na ultima posição do array
console.log(array)

array.shift() //Tira o primeiro elemento do array
console.log(array)

array.unshift('Aries') //Insere um elemento na primeira posição do array
console.log(array)

//O método splice adiciona ou remove elementos de um array
/*array.splice(indice de inicio, quantos elementos a partir dele seram removidos, valores a partir do indice...)*/

//Adicionando
array.splice(2, 0, 'Virgem', 'Libra')
console.log(array)

//Remover
array.splice(2, 1)
console.log(array)

//o método slice retorna um novo array
//array.slice(indice de inicio, inidice de fim) = irá gerar um novo array a aprtir do indice 2

const novoArray = array.slice(2, 5)
console.log(novoArray)