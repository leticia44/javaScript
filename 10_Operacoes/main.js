//Declaração de variáveis
let operacao = prompt("Informe a operação desejada:")
let numero1 = Number(prompt("Informe o primeiro número"))
let numero2 = Number(prompt("Informe o segundo número"))

//Definir a variável resultado antes do bloco condicional
let resultado;

//Verificar a operação matematica selecionada
if (operacao == "+") {
    resultado = numero1 + numero2
    console.log("O resultado da soma é " + resultado + ".")
}

else if (operacao == "-") {
    resultado = numero1 - numero2
    console.log("O resultado da subtração é " + resultado + ".")
}
else if (operacao == "*") {
    resultado = numero1 * numero2
    console.log("O resultado da Multiplicação é " + resultado + ".")
}
else if (operacao == "/") {
    resultado = numero1 / numero2
    console.log("O resultado da Divisão é " + resultado + ".")
}

// Exibir o resultado no HTML
let resultadoElement = document.getElementById("resultado");
resultadoElement.textContent = `O resultado da ${operacao} é ${resultado}.`;