const form = document.querySelector('form');
const nomeInput = document.querySelector('input[type="text"]');
const cafeSelect = document.querySelector('select');
const descricaoTextarea = document.querySelector('textarea');
const dadosString = localStorage.getItem('dados');
const dados = JSON.parse(dadosString);
console.log(dados);

// função para quando retorna a pagina limpar os campos selecionados
window.addEventListener('pageshow', function(event) {
  // Verifica se a página está sendo carregada através do cache
  if (event.persisted) {
    // Limpa os valores dos campos do formulário
    nomeInput.value = '';
    cafeSelect.value = '';
    descricaoTextarea.value = '';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // impede o formulário de ser enviado imediatamente

  const nome = nomeInput.value.trim();
  const cafe = cafeSelect.value;
  const descricao = descricaoTextarea.value.trim();

  // Verifica se todos os campos foram preenchidos e se o comprimento do nome e da descrição estão dentro do limite máximo
  if (nome === '' || cafe === '' || descricao === '' || nome.length > 100 || descricao.length > 200) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  };

  // Cria um objeto com os dados do formulário
  const dados = {
    nome: nome,
    cafe: cafe,
    descricao: descricao
  };

  // Armazena o objeto no localStorage
  localStorage.setItem('dados', JSON.stringify(dados));

  // Exibe uma mensagem de confirmação
  alert('Os dados foram salvos com sucesso.');
  form.reset();

  // Redireciona o usuário para outra página
  const newWindow = window.open('index.html', '_blank');

  // Define o tempo em milissegundos para fechar a nova guia
  const tempoParaFechar = 10000; // 10 segundos

  // Função para fechar a nova guia após o tempo especificado
  setTimeout(() => {
    newWindow.close();
  }, tempoParaFechar);

  // Volta para a página anterior após 5 segundos
  setTimeout(() => {
    window.history.back();
  }, tempoParaFechar);
});