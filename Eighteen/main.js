let casas = document.querySelectorAll("td");
let mensagem = document.querySelector('p');
let botaoReset = document.querySelector('button');
let jogadorAtual = "O";

// Adiciona evento de clique para cada célula
casas.forEach(casa => {
    casa.addEventListener("click", () => {
        if (casa.innerText === "") {
            casa.innerText = jogadorAtual;
            if (verificarGanhador()) {
                mensagem.innerText = `Jogador ${jogadorAtual} venceu!`;
                desativarJogo();
            } else if (verificarEmpate()) {
                mensagem.innerText = "Empate!";
                desativarJogo();
            } else {
                alternarJogador();
            }
        }
    });
});

// Função para alternar entre os jogadores
function alternarJogador() {
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    mensagem.innerText = `Próximo a jogar: ${jogadorAtual}`;
}

// Função para verificar se há um ganhador
function verificarGanhador() {
    let combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    // Verifica todas as combinações possíveis de vitória
    for (let combinacao of combinacoes) {
        let [a, b, c] = combinacao;
        if (casas[a].innerText !== "" && casas[a].innerText === casas[b].innerText && casas[a].innerText === casas[c].innerText) {
            return true; // Jogador venceu
        }
    }
    return false; // Nenhum vencedor
}

// Função para verificar se houve empate
function verificarEmpate() {
    return Array.from(casas).every(casa => casa.innerText !== ""); // Verifica se todas as casas estão preenchidas
}

// Função para desativar o jogo após vitória ou empate
function desativarJogo() {
    casas.forEach(casa => {
        casa.style.pointerEvents = "none"; // Impede mais jogadas ao desativar o clique nas casas
    });
}

// Reseta o jogo
botaoReset.addEventListener("click", () => {
    casas.forEach(casa => {
        casa.innerText = "";
        casa.style.pointerEvents = "auto"; // Reativa o clique nas casas
    });
    jogadorAtual = "O";
    mensagem.innerText = "Primeiro a jogar: O";
});
