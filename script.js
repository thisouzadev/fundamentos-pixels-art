const getColor = document.querySelectorAll('.color');
getColor[0].style.backgroundColor = 'black';
getColor[1].style.backgroundColor = 'yellow';
getColor[2].style.backgroundColor = 'green';
getColor[3].style.backgroundColor = 'blue';

const line = 5;
const columns = 5;

console.log(line.length);
function pixelsBoards(linha, coluna) {
  const pixelsBoards = document.querySelector('#pixel-board');
  for (let index = 0; index < linha; index += 1) {
    const div = document.createElement('div');
    div.className = 'line';
    pixelsBoards.appendChild(div);
    for (let i = 0; i < coluna; i += 1) {
      const button = document.createElement('button');
      div.appendChild(button);
      button.className = 'pixel';
    }
  }
}

pixelsBoards(line, columns);
