import './index.html';
import './styles/index.scss';
import html from './pages/home/home.html';
import Puzzle from './js/puzzle';
// import setHandlers from './js/home';

const start = () => {
  const body = document.querySelector('body');
  body.innerHTML = html;
  const puzzle = new Puzzle(9);

  puzzle.draw();
  // setHandlers(puzzle.moveCell);
  const cells = document.querySelectorAll('.canvas__cell');

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', () => {
      puzzle.moveCell(i);
    });
  }
};

start();
