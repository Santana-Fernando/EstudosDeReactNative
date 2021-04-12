const escola = [
    {
        nome: 'TurmaM1',
        alunos: [
            {
                nome: 'Gustavo',
                nota: 8.1
            }, {
                nome: 'ana',
                nota: 9.3
            }, 
        ]  
    },
    {
        nome: 'TurmaM2',
        alunos: [
            {
                nome: 'Eduardo',
                nota: 8.5
            }, {
                nome: 'Jeane',
                nota: 7.3
            }, 
        ]  
    },
]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)