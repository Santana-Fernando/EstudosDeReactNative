function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 600, min: 4}))
console.log(rand({max: 555}))
console.log(rand({}))