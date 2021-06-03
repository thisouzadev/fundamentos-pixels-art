const getColor = document.querySelectorAll('.color');
for (let index = 1; index < getColor.length; index += 1) {
  getColor[index].style.backgroundColor = `rgb(${(Math.random() * 255)}, 
    ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
}
getColor[0].style.backgroundColor = 'black';

const line = 5;
const columns = 5;

function pixelsBoards(linha, coluna) {
  const getPixelsBoards = document.querySelector('#pixel-board');
  for (let index = 0; index < linha; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    getPixelsBoards.appendChild(div);
    for (let i = 0; i < coluna; i += 1) {
      const button = document.createElement('button');
      div.appendChild(button);
      button.className = 'pixel';
    }
  }
}
pixelsBoards(line, columns);

function selectedColor() {
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', (event) => {
      for (let j = 0; j < getColor.length; j += 1) {
        getColor[j].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
selectedColor();

function changeColor() {
  const getPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', (event) => {
      const getSelected = document.querySelector('.selected');
      const getEventTarget = event.target;
      getEventTarget.style.backgroundColor = getSelected.style.backgroundColor;
    });
  }
}
changeColor();

function clearBoard() {
  const getclear = document.querySelector('#clear-board');
  getclear.addEventListener('click', () => {
    const getPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < getPixel.length; index += 1) {
      getPixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
clearBoard();

// bonus
// referencia:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
// para remover todos os filhos
// dica do lucas Caribe atribuir '' vazia pra remover
function changeBoardSize() {
  const getGenerateBoard = document.querySelector('#generate-board');
  const getInput = document.querySelector('#board-size');
  getGenerateBoard.addEventListener('click', () => {
    if (getInput.value === '') {
      alert('Board inválido!');
    }
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.innerHTML = '';
    if (getInput.value <= 5) {
      getInput.value = 5;
    } else if (getInput.value >= 50) {
      getInput.value = 50;
    }
    pixelsBoards(getInput.value, getInput.value);
    selectedColor();
    changeColor();
  });
}
changeBoardSize();
