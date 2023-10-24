const resultadoElement = document.getElementById("resultado");
const tentativasRestantesElement = document.getElementById("tentativasRestantes");
const tentativaElement = document.getElementById("tentativa");
let numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 0;

function checarTentativa() {
    const numeroTentativa = parseInt(tentativaElement.value);

    if (numeroTentativa === numeroSecreto) {
        resultadoElement.textContent = "Parabéns! Você acertou o número.";
        tentativaElement.disabled = true;
    } else {
        tentativas++;
        if (tentativas < 3) {
            tentativasRestantesElement.textContent = `Tentativas Restantes: ${3 - tentativas}`;
            resultadoElement.textContent = "Tente novamente.";
        } else {
            tentativasRestantesElement.textContent = "Tentativas Restantes: 0";
            resultadoElement.textContent = `Você não conseguiu acertar. O número secreto era ${numeroSecreto}.`;
            tentativaElement.disabled = true;
        }
    }
}

function reiniciarJogo() {
    // Gere um novo número secreto
    numeroSecreto = Math.floor(Math.random() * 11);

    // Reinicie as variáveis
    tentativas = 0;
    resultadoElement.textContent = "";
    tentativasRestantesElement.textContent = "Tentativas Restantes: 3";
    tentativaElement.value = "";
    tentativaElement.disabled = false;
}