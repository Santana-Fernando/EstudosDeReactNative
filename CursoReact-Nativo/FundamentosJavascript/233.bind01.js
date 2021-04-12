const pessoa = {
    saldacao: "Bom DIa",
    falar() {
        console.log(this.saldacao)
    }
}

const falar = pessoa.falar.bind(pessoa)
falar()