function Pessoa() {
    this.idade = 0
    const vm = this
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(vm), 1000)
}

new Pessoa