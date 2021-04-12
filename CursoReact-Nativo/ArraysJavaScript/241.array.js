console.log(typeof Array, typeof new Array)

let aprovado = new Array('Bia', 'nando', 'ana')
console.log(aprovado.length)

aprovado = ['Cuka Beludo', 'Arom Bado', 'Crispin Tuddo']
console.log(aprovado)
console.log(aprovado[0])
console.log(aprovado[2])
console.log(aprovado[1])
aprovado.push("Paula Nabussa")

console.log(aprovado[3])
console.log(aprovado.length)

aprovado[9] = "Deide costa"
console.log(aprovado[9])
console.log(aprovado)
console.log(aprovado[5] == null)
aprovado.sort()
console.log(aprovado)
aprovado.splice(2, 0, "ELEMENTO")
console.log(aprovado)
console.log(aprovado[2])