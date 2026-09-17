import { signosData } from './signos.js';

const btnDescobrir = document.getElementById('btn-descobrir');
const inputData = document.getElementById('data-nascimento');
const resultadoBox = document.getElementById('resultado');
const fundoPaisagem = document.getElementById('fundo-paisagem');

btnDescobrir.addEventListener('click', () => {
  const dataValor = inputData.value;
  
  if (!dataValor) {
    alert("Por favor, selecione uma data valida!");
    return;
  }

  const [ano, mes, dia] = dataValor.split('-');
  const dataFormatada = `${mes}-${dia}`;

  const signoEncontrado = signosData.find(signo => {
    if (signo.nome === "Capricórnio" || signo.nome === "Capricornio") {
      return dataFormatada >= signo.inicio || dataFormatada <= signo.fim;
    }
    return dataFormatada >= signo.inicio && dataFormatada <= signo.fim;
  });

  if (signoEncontrado) {
    document.getElementById('signo-nome').innerText = signoEncontrado.nome;
    document.getElementById('signo-frase').innerText = signoEncontrado.frase;
    document.getElementById('signo-conselho').innerText = signoEncontrado.conselho;
    document.getElementById('signo-comp').innerText = signoEncontrado.comp;
    
    resultadoBox.classList.remove('escondido');

    fundoPaisagem.innerHTML = `<img src="${signoEncontrado.bg}" style="width: 100vw; height: 100vh; object-fit: cover; position: fixed; top: 0; left: 0; z-index: -1; animation: fadeIn 1.2s ease-in-out;">`;
  }
});
