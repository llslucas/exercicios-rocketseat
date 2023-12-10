// Bora praticar e rever tudo o que foi ensinado na aula? **💜**
// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// A soma dos dois números;
// A subtração dos dois números;
// A multiplicação dos dois números;
// A divisão dos dois números;
// O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

let number1 = Number(prompt("Insira o número 1"));
let number2 = Number(prompt("Insira o número 2"));

function soma(num1, num2){
    return num1 + num2;
}

function multiplica(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function resto(num1, num2){
    return num1 % num2;
}

function somaEhPar(num1, num2){
    return (num1 + num2) % 2 === 0;
}

function ehIgual(num1, num2){
    return num1 === num2;
}

alert(`
    Número 1: ${number1}
    Número 2: ${number2}
    Soma: ${soma(number1, number2)}
    Multiplicação: ${multiplica(number1, number2)}
    Divisão: ${divide(number1, number2)}
    resto: ${resto(number1, number2)}
    A soma é Par ou Ímpar: ${somaEhPar(number1, number2) ? "Par" : "Ímpar"}
    É igual: ${ehIgual(number1, number2) ? "Sim" : "Não"}
`)