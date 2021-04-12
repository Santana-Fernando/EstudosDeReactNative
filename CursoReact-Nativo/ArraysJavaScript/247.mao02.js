const carrinho = [
    '{"nome":"Lapis", "preço":"1.00"}',
    '{"nome":"Caderno", "preço":"13.90"}',
    '{"nome":"Mochila", "preço":"45.00"}',
    '{"nome":"Estojo", "preço":"14.00"}',
]

//Retornar um array apenas com os preços

let novo_carrinho = carrinho.map(c => {
    let object = JSON.parse(c)
    return `R$ ${parseFloat(object['preço']).toFixed(2).replace('.',',')}`
})

console.log(novo_carrinho)