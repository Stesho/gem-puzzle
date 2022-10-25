import game from '../pages/game/game.html';
import top from '../pages/top/top.html';
import Puzzle from './puzzle';

const setHandler = (callback) => {
  const cells = document.querySelectorAll('.canvas__cell');

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', () => {
      callback(i);
    });
  }
};

const renderPage = (page, callback) => {
  const main = document.querySelector('.page');

  switch (page) {
    case 'game':
      main.innerHTML = game;
      callback();
      break;
    case 'top':
      main.innerHTML = top;
      break;
    default:
      break;
  }
};

const renderHome = () => {
  const buttons = document.querySelectorAll('.menu__list-item button');
  const main = document.querySelector('.page');
  const pages = ['game', 'top'];
  const puzzle = new Puzzle(9);
  main.innerHTML = game;

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      renderPage(pages[i], () => puzzle.draw());
    });
  }

  renderPage(pages[0], () => puzzle.draw());
  setHandler(puzzle.moveCell);
};

export { setHandler, renderHome };
