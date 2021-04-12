const soma = function (x, y){
    return x + y
}

const imprimirResultados = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultados(5, 7, soma) 

imprimirResultados(5, 7, function(x, y) {
    return x * y
}) 

imprimirResultados(27, 9, (x, y) => {
    return x / y
}) 

const pessoa = {
    falar: () => {
        console.log('Olá')
    }
}

pessoa.falar()