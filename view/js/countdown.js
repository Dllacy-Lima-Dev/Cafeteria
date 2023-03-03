// Define o tempo em segundos
const tempoParaFechar = 10;

// Seleciona o elemento HTML
const countdown = document.querySelector('#countdown');

// Define a função para atualizar o contador regressivo
function atualizarContador(segundos) {
  countdown.textContent = `EM ${segundos} SEGUNDOS VOLTAREMOS A PAGINA ANTERIOR`;

  // Verifica se o contador chegou a zero
  if (segundos === 0) {
    clearInterval(intervalId); // Para o setInterval
    window.history.back(); // Volta para a página anterior
  }
}

// Inicializa o contador regressivo
let segundosRestantes = tempoParaFechar;
atualizarContador(segundosRestantes);

// Define a função que será chamada a cada segundo
const intervalId = setInterval(() => {
  segundosRestantes--;
  atualizarContador(segundosRestantes);
}, 1000);
