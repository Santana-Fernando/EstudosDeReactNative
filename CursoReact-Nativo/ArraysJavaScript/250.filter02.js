Array.prototype.filter2 = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'NotBook', preco: 3251, fragil: true},
    {nome: 'carro', preco: 50236, fragil: false},
    {nome: 'Smartphone', preco: 2510, fragil: true},
]

const caro = p => p.preco > 3000
const fragil = p => p.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))