function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([max= 600, min= 4]))
console.log(rand([max= 555]))
console.log(rand([,min= 555]))
console.log(rand([]))