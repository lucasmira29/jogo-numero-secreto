const menorValor = 1;
const maiorValor = 1000;

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

const numeroSecreto = sortearNumeroSecreto();
console.log("Número Secreto: ", numeroSecreto);

function sortearNumeroSecreto () {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;