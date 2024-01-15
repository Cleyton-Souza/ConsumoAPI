function calcular() {
    event.preventDefault();


    // Valor capturado no inpur e guardado nas variaveis n1 e n2
    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);

    // valor capturado no selecct e guardado na operacao
    const operacao = document.getElementById("operacao").value;

    // alert("tá funcionando por enquanto")

    var resultado; 

    switch (operacao) {
        case "soma": {
            resultado = n1 + n2
            break;
        }
        case "subtracao": {
            resultado = n1 - n2
            break;
        }
        case "divisao": {
            resultado = n1 / n2
            break;
        }
        case "multiplicacao": {
            resultado = n1 * n2
            break;
        }


    }

    if (operacao == "operacao") {
        document.getElementById("resultado").innerHTML = "Escolha uma operação para realizar o cálculo";
    }
    else if (operacao == "divisao" && (n2 == 0 || n1 == 0)) {
        document.getElementById("resultado").innerHTML = "não é possível dividir por zero";
    }
    else {
        document.getElementById("resultado").innerHTML = resultado;
    }



}