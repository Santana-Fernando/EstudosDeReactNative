const cliente = {
    nome: 'Fernando',
    idade: 21,
    peso: 80,
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
}

const { endereco: { rua, numero } } = cliente

console.log(numero)