let n1 = prompt('Digite um número:')
let n2 = prompt('Digite outro número:')
alert('Digite o código da operação que você deseja fazer: \n Soma: 1 \n Multiplicação: 2 \n Divisão: 3 \n Subtração: 4')


let conta = parseInt(prompt('Qual conta você quer fazer?'))

switch(conta){
    case 1:
        let resultado = parseFloat(n1) + parseFloat(n2)
        alert('O resultado da sua conta é: ' +resultado)
        break

    case 2:
        resultado = parseFloat(n1) * parseFloat(n2)
        alert('O resultado da sua conta é: ' +resultado)
        break
    case 3:
        resultado = parseFloat(n1) / parseFloat(n2)
        alert('O resultado da sua conta é: ' +resultado)
        break
    case 4:
        resultado = parseFloat(n1) - parseFloat(n2)
        alert('O resultado da sua conta é: ' +resultado)
        break
    default:
    alert('Código invalido.')
}

