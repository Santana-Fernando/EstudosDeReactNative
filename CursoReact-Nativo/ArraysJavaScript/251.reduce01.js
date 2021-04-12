const alunos = [
    {nome: 'Fernando', nota: 7.8, bolsista: true},
    {nome: 'Thomas', nota: 9.5, bolsista: true},
    {nome: 'Eduardo', nota: 8.8, bolsista: true},
    {nome: 'André', nota: 6.8, bolsista: true}
]

let notas = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)