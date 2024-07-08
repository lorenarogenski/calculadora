// Projeto calculadora

const prompt = require('prompt-sync')();
let resultado;

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao (a, b) {
    return a / b;
}

function porcentagem(numero, percentual) {
    return (percentual / 100) * numero;
}

function calcular(){
    let operacao = prompt("Insira a operação matemática que deseja calcular: ");

switch (operacao) {
    case "+":
    case "-":
    case "*":
    case "/":
        let primeiroNumero = parseFloat(prompt("Insira o primeiro número: "));
        let segundoNumero = parseFloat(prompt("Insira o segundo número: "));

        switch (operacao) {
            case "+":
                resultado = adicao(primeiroNumero, segundoNumero);
                console.log(`O resultado de ${primeiroNumero} + ${segundoNumero} é ${resultado}`);
                break;

            case "-":
                resultado = subtracao(primeiroNumero, segundoNumero);
                console.log(`O resultado de ${primeiroNumero} - ${segundoNumero} é ${resultado}`)
                break;

            case "*":
                resultado = multiplicacao(primeiroNumero, segundoNumero);
                console.log(`O resultado de ${primeiroNumero} x ${segundoNumero} é ${resultado}`)
                break;

            case "/":
                resultado = divisao(primeiroNumero, segundoNumero);
                console.log(`O resultado de ${primeiroNumero} / ${segundoNumero} é ${resultado}`)
                break;

            default:
                console.log("Dados inválidos. Tente novamente. ");
                break;
            }
            
            break;

    case "%":
        let numero = parseFloat(prompt("Insira o número para calcular a porcentagem: "));
        let percentual = parseFloat(prompt("Insira o número do percentual: "));
        resultado = porcentagem(numero, percentual);
        console.log(`O resultado da operação é ${resultado}`)
        break;

    default:
        console.log("Dados inválidos. Tente novamente. ")
        break;
}

}

calcular();