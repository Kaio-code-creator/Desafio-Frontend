const choices = ["tesoura", "pedra", "papel"];
    let playerScore = 0;
    let computerScore = 0;
    let darkMode = false;

    document.getElementById("tesoura").addEventListener("click", () => playRound("tesoura"));
    document.getElementById("pedra").addEventListener("click", () => playRound("pedra"));
    document.getElementById("papel").addEventListener("click", () => playRound("papel"));
    document.getElementById("reset").addEventListener("click", resetGame);

    function computerPlay() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(playerSelection) {
        const computerSelection = computerPlay();
        let result = "";

    if (playerSelection === computerSelection) {
        result = "Empate!";
    } else if (
        (playerSelection === "tesoura" && computerSelection === "papel") ||
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra")
    ) {
        result = `Você ganhou! ${playerSelection} vence ${computerSelection}.`;
        playerScore++;
    } else {
        result = `Você perdeu! ${computerSelection} vence ${playerSelection}.`;
        computerScore++;
    }

    updateScore();
    updateResult(result);
}

function updateScore() {
    document.getElementById("score").textContent = `Pontos: Você ${playerScore} - ${computerScore} Máquina`;
}

function updateResult(resultText) {
    document.getElementById("result").textContent = resultText;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    updateResult("Esperando sua jogada...");
}

function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-button');

    if (darkMode) {
      body.classList.remove('dark');
      themeButton.textContent = 'Alterar Tema';
    } else {
      body.classList.add('dark');
      themeButton.textContent = 'Tema Padrão';
    }

    darkMode = !darkMode;
  }