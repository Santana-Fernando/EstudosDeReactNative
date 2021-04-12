Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Lapis", "preço":"1.00"}',
    '{"nome":"Caderno", "preço":"13.90"}',
    '{"nome":"Mochila", "preço":"45.00"}',
    '{"nome":"Estojo", "preço":"14.00"}',
]

//Retornar um array apenas com os preços


let novo_carrinho = carrinho.map2(c => {
    let object = JSON.parse(c)
    return `R$ ${parseFloat(object['preço']).toFixed(2).replace('.',',')}`
})

console.log(novo_carrinho)