let numeroTentativas = 1;

function verificaNumeroValido (chute) {
    // transforma o chute de string para inteiro
    const numero = +chute;
    
    if (Number.isNaN(numero)){
        if (chute.toUpperCase() === 'GAME OVER'){
            document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";

        } else {
            elementoChute.innerHTML += '<div>Valor inválido</div>';
        }
        return
    }

    if (chute < menorValor || chute > maiorValor){
        elementoChute.innerHTML += `<div>Valor inválido: Escolha um número entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número Secreto era: ${numeroSecreto}</h3>
            <h3>Você tentou: ${numeroTentativas++} vezes</h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>
        `
        numeroTentativas++;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>
        `
        numeroTentativas++;
    } 
}

document.body.addEventListener('click', event => {
    if (event.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})