const modal = document.querySelector('.modal-container');
const modall = document.querySelector('.modal-container-01');

function openModal() {
  // Adiciona a classe 'active' ao elemento 'modal-container'
  modal.classList.add('active');

  // Adiciona um evento de clique à janela modal
  modal.onclick = e => {

    // Verifica se o clique foi fora do elemento 'modal-container'
    if (e.target.className.indexOf('modal-container') !== -1) {
      
      // Remove a classe 'active' do elemento 'modal-container'
      modal.classList.remove('active');
    };
  };  
};

function openJanela() {
  // Adiciona a classe 'active' ao elemento 'modal'
  modall.classList.add('active');

  // Seleciona o elemento de vídeo dentro da janela modal
  const video = modall.querySelector('video');

  // Reinicia o tempo do vídeo para 0 quando a janela modal é aberta
  video.currentTime = 0;

  // Adiciona um evento de clique à janela modal
  modall.onclick = e => {
    // Verifica se o clique foi fora do elemento 'modal-container-01'
    if (e.target.className.indexOf('modal-container-01') !== -1) {
      // Remove a classe 'active' do elemento 'modal'
      modall.classList.remove('active');

      // Pausa o vídeo
      video.pause();
    };
  };  
};

