// ====== PRIMEIRA PARTE DO CÓDIGO: CAPTAÇÃO DOS VALORES DO INPUT E DOS SELECTS ======== //
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV //




// Variável com escopo global para armazenar o valor do input
let valorCapturado = document.getElementById('inputMoedaOriginal').value;

// Variáveis com escopo global para armazenar os valores selecionados dos selects
let valorMoedaOriginalSelecionada = document.getElementById('selectMoedaOriginal').value;
let valorMoedaAlvoSelecionada = document.getElementById('selectMoedaAlvo').value;
document.getElementById('pReal').innerText = valorMoedaOriginalSelecionada;
document.getElementById('pDolar').innerText = valorMoedaAlvoSelecionada;

// Obtendo o elemento de imagem pelo ID
let imagemBrasil = document.getElementById("brasil");
let imagemEua = document.getElementById("eua");



// Variável com escopo global para armazenar a cotação final
let cotacaoFinal = 0;

// Função chamada sempre que o valor do input é atualizado
document.getElementById('inputMoedaOriginal').addEventListener('input', function () {
    // Verifica se o valor inserido é um número
    if (isNaN(this.value)) {
        alert("Por favor, insira apenas números no campo 'Valor a Converter'.\nPara casas decimais, não insira ','. Insira '.'.");

        // Define o valor do campo como vazio
        this.value = '';

        return;
    }

    valorCapturado = this.value;

    // Exemplo de como usar valorCapturado fora da função
    usarValoresForaDoEscopo();

    // Chama a função para encontrar o índice da moeda e atualizar a variável cotacaoFinal
    encontrarIndiceMoeda();

    // Atualiza dinamicamente o input "inputMoedaAlvo" com o valor da multiplicação
    document.getElementById('inputMoedaAlvo').value = (valorCapturado * cotacaoFinal).toFixed(2);
});

// Função chamada sempre que o valor do select de moeda original é atualizado
document.getElementById('selectMoedaOriginal').addEventListener('change', function () {
    valorMoedaOriginalSelecionada = this.value;
    document.getElementById('pReal').innerText = valorMoedaOriginalSelecionada;
    switch (valorMoedaOriginalSelecionada) {
        case "Real":
            imagemBrasil.src = "img/brasil.png";
            break;
        case "Dolar":
            imagemBrasil.src = "img/eua.png";
            break;
        case "Euro":
            imagemBrasil.src = "img/euro32.png";
            break;
        case "Libra":
            imagemBrasil.src = "img/reino.png";
            break;
        case "Iene":
            imagemBrasil.src = "img/japao.png";
            break;
        case "Won":
            imagemBrasil.src = "img/coreia.png";
            break;
        case "Peso":
            imagemBrasil.src = "img/argentina.png";
            break;
        default:
            imagemBrasil.src = "img/brasil.png";

    }

    // Exemplo de como usar valorMoedaOriginalSelecionada fora da função
    usarValoresForaDoEscopo();

    // Chama a função para encontrar o índice da moeda e atualizar a variável cotacaoFinal
    encontrarIndiceMoeda();

    // Atualiza dinamicamente o input "inputMoedaAlvo" com o valor da multiplicação
    document.getElementById('inputMoedaAlvo').value = (valorCapturado * cotacaoFinal).toFixed(2);
});

// Função chamada sempre que o valor do select de moeda alvo é atualizado
document.getElementById('selectMoedaAlvo').addEventListener('change', function () {
    valorMoedaAlvoSelecionada = this.value;
    document.getElementById('pDolar').innerText = valorMoedaAlvoSelecionada;
    switch (valorMoedaAlvoSelecionada) {
        case "Real":
            imagemEua.src = "img/brasil.png";
            break;
        case "Dolar":
            imagemEua.src = "img/eua.png";
            break;
        case "Euro":
            imagemEua.src = "img/euro32.png";
            break;
        case "Libra":
            imagemEua.src = "img/reino.png";
            break;
        case "Iene":
            imagemEua.src = "img/japao.png";
            break;
        case "Won":
            imagemEua.src = "img/coreia.png";
            break;
        case "Peso":
            imagemEua.src = "img/argentina.png";
            break;
        default:
            imagemEua.src = "img/eua.png";

    }

    // Exemplo de como usar valorMoedaAlvoSelecionada fora da função
    usarValoresForaDoEscopo();

    // Chama a função para encontrar o índice da moeda e atualizar a variável cotacaoFinal
    encontrarIndiceMoeda();

    // Atualiza dinamicamente o input "inputMoedaAlvo" com o valor da multiplicação
    document.getElementById('inputMoedaAlvo').value = (valorCapturado * cotacaoFinal).toFixed(2);
});

// Função para usar os valores fora do escopo das funções
function usarValoresForaDoEscopo() {
    console.log("Valores fora do escopo:");
    console.log("valorCapturado: " + valorCapturado);
    console.log("valorMoedaOriginalSelecionada: " + valorMoedaOriginalSelecionada);
    console.log("valorMoedaAlvoSelecionada: " + valorMoedaAlvoSelecionada);
    console.log("Cotação Final: " + cotacaoFinal);
}



// ====== SEGUNDA PARTE DO CÓDIGO: IMPLANTAÇÃO DO OBJETO E CAPTAÇÃO DA COTAÇÃO DE ACORDO COM O CÓDIGO ======== //
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV //

let objArray = [
    {
        moedaOriginal: "Real",
        moedaAlvo: "Real",
        cotacao: 1
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Real",
        cotacao: 4.8407
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Real",
        cotacao: 5.349
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Real",
        cotacao: 6.1559
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Real",
        cotacao: 0.0342
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Real",
        cotacao: 0.0037
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Real",
        cotacao: 0.006
    },
    {
        moedaOriginal: "Real",
        moedaAlvo: "Dolar",
        cotacao: 0.2066
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Dolar",
        cotacao: 1
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Dolar",
        cotacao: 1.105
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Dolar",
        cotacao: 1.2717
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Dolar",
        cotacao: 0.0071
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Dolar",
        cotacao: 0.0008
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Dolar",
        cotacao: 0.0012
    },
    {
        moedaOriginal: "Real",
        moedaAlvo: "Euro",
        cotacao: 0.1869
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Euro",
        cotacao: 0.9046
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Euro",
        cotacao: 1
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Euro",
        cotacao: 1.1504
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Euro",
        cotacao: 0.0064
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Euro",
        cotacao: 0.0007
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Euro",
        cotacao: 0.0011
    },
    {
        moedaOriginal: "Real",
        moedaAlvo: "Libra",
        cotacao: 0.1624
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Libra",
        cotacao: 0.7861
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Libra",
        cotacao: 0.8686
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Libra",
        cotacao: 1
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Libra",
        cotacao: 0.0056
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Libra",
        cotacao: 0.0006
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Libra",
        cotacao: 0.001
    },
    {
        moedaOriginal: "Real",
        moedaAlvo: "Iene",
        cotacao: 29.2227
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Iene",
        cotacao: 141.47
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Iene",
        cotacao: 156.3244
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Iene",
        cotacao: 179.9074
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Iene",
        cotacao: 1
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Iene",
        cotacao: 0.1089
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Iene",
        cotacao: 0.1751
    },
    {
        moedaOriginal: "Real",
        moedaAlvo: "Won",
        cotacao: 268.3843
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Won",
        cotacao: 1299.22
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Won",
        cotacao: 1435.6381
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Won",
        cotacao: 1652.2181
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Won",
        cotacao: 9.2037
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Won",
        cotacao: 1
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Won",
        cotacao: 1.6115
    },
    {
        moedaOriginal: "Real",
        moedaAlvo: "Peso",
        cotacao: 166.8892
    },
    {
        moedaOriginal: "Dolar",
        moedaAlvo: "Peso",
        cotacao: 807.97
    },
    {
        moedaOriginal: "Euro",
        moedaAlvo: "Peso",
        cotacao: 892.8069
    },
    {
        moedaOriginal: "Libra",
        moedaAlvo: "Peso",
        cotacao: 1027.4954
    },
    {
        moedaOriginal: "Iene",
        moedaAlvo: "Peso",
        cotacao: 5.7113
    },
    {
        moedaOriginal: "Won",
        moedaAlvo: "Peso",
        cotacao: 0.6219
    },
    {
        moedaOriginal: "Peso",
        moedaAlvo: "Peso",
        cotacao: 1
    }];



// Função para encontrar o índice da moeda com base na moedaoriginal e na moedaalvo
function encontrarIndiceMoeda() {
    if (valorMoedaOriginalSelecionada !== undefined && valorMoedaAlvoSelecionada !== undefined) {
        var indiceMoeda = objArray.findIndex(function (elemento) {
            return elemento.moedaOriginal === valorMoedaOriginalSelecionada && elemento.moedaAlvo === valorMoedaAlvoSelecionada;
        });

        console.log("O índice do objeto com moedaOriginal " + valorMoedaOriginalSelecionada + " e moedaAlvo " + valorMoedaAlvoSelecionada + " é:", indiceMoeda);

        // Armazena o valor da cotação final na variável cotacaoFinal
        cotacaoFinal = objArray[indiceMoeda].cotacao;

        //console.log para achar a cotação correspondente a este índice
        console.log("Cotação Final: " + cotacaoFinal);
    }
}

// Chamada de exemplo
usarValoresForaDoEscopo();




// ====== TERCEIRA PARTE DO CÓDIGO: ALTERAÇÃO DOS CAPTIONS ABAIXO DOS VALORES E BANDEIRAS  ======== //
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV //


// // Obtendo o elemento de imagem pelo ID
// var imagemBrasil = document.getElementById("brasil");

// // Alterando o valor do atributo src
// imagemBrasil.src = "img/eua.png";

// console.log('Valor novo de img: ' + imagemBrasil.src);

