Array.prototype.reduce2 = function(callback, inicial){
    let indiceTotal = inicial ? 0 : 1
    let acumulador = inicial || this[0]
    for(let i = indiceTotal; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'Fernando', nota: 7.8, bolsista: false},
    {nome: 'Thomas', nota: 9.5, bolsista: true},
    {nome: 'Eduardo', nota: 8.8, bolsista: false},
    {nome: 'André', nota: 6.8, bolsista: true}
]

const totdosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(totdosOsBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))