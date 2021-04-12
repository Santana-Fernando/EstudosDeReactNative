let alunos =[
    { nome: 'João', nota: 7.9 },
    { name: 'Marioa', nota: 9.2 }
]

// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declaratica
const pegarNotaDoAuluno = aluno => aluno.nota
const somaValorDasNotas = (total, atual) => total + atual
const total2 = alunos.map(pegarNotaDoAuluno).reduce(somaValorDasNotas)

console.log(total2 / alunos.length)

//declarativa é muito mais interessante