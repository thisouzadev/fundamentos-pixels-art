const getColor = document.querySelectorAll('.color');
getColor[0].style.backgroundColor = 'black';
getColor[1].style.backgroundColor = 'yellow';
getColor[2].style.backgroundColor = 'green';
getColor[3].style.backgroundColor = 'blue';

const line = 5;
const columns = 5;

console.log(line.length);
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
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', () => {
      const getSelect = document.querySelector('.selected');
      const getPixels = document.querySelectorAll('.pixels');
      getPixels[0].style.backgroundColor = 'black';
    });
  }
}
changeColor();
