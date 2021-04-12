const array = ['Aries', 'Touro', 'Gemeos', 'Cancer']
array.forEach((a, indice) => {
    console.log(`${indice + 1}º ${a}`)
})
/*
const exibir = (a, i) => console.log(`${i+1}º ${a}`)
array.forEach(exibir)*/

const exibir = (a, i, array) => console.log(`${i+1}º ${a} ${array}`)
array.forEach(exibir)