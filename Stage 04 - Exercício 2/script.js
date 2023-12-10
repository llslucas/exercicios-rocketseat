// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// Crie uma **função** que irá calcular a média das notas de cada aluno;
// Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

const estudantes = [
    {
        nome: "Lucas",
        nota1: 9,
        nota2: 10
    },
    {
        nome: "Luiz",
        nota1: 5,
        nota2: 2
    },
    {
        nome: "Fernando",
        nota1: 2,
        nota2: 10
    },
    {
        nome: "Laura",
        nota1: 5,
        nota2: 8
    }
]

for (const estudante of estudantes) {
    let media = (estudante.nota1 + estudante.nota2) / 2;
    alert(`
        Nome: ${estudante.nome}
        Média: ${media}
        ${media >= 7 ? "Parabéns, você passou!" : "Que pena, você reprovou :/"}        
    `)
}