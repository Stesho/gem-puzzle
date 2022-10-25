import puzzlePage from '../pages/puzzle/puzzle.html';
import topPage from '../pages/top/top.html';
import Puzzle from './puzzle';

const setHandler = (handler) => {
  const cells = document.querySelectorAll('.canvas__cell');

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', () => {
      handler.moveCell(i);
    });
  }
};

const renderPage = (page, puzzle) => {
  const main = document.querySelector('.page');

  switch (page) {
    case 'puzzle':
      main.innerHTML = puzzlePage;
      puzzle.draw();
      setHandler(puzzle);
      break;
    case 'top':
      main.innerHTML = topPage;
      break;
    default:
      break;
  }
};

const renderHome = () => {
  const buttons = document.querySelectorAll('.menu__list-item button');
  const main = document.querySelector('.page');
  const pages = ['puzzle', 'top'];
  const puzzle = new Puzzle(9);
  main.innerHTML = puzzle;

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      renderPage(pages[i], puzzle);
    });
  }

  renderPage(pages[0], puzzle);
  setHandler(puzzle);
};

export { setHandler, renderHome };
