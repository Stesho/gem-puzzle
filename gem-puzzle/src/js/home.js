import puzzlePage from '../pages/puzzle/puzzle.html';
import topPage from '../pages/top/top.html';
import settingsPage from '../pages/settings/settings.html';
import renderGame from './game';
import renderTop from './top';

const renderPage = (page) => {
  const main = document.querySelector('.page');

  switch (page) {
    case 'puzzle':
      main.innerHTML = puzzlePage;
      renderGame();
      break;
    case 'top':
      main.innerHTML = topPage;
      renderTop();
      break;
    case 'settings':
      main.innerHTML = settingsPage;
      // renderTop();
      break;
    default:
      break;
  }
};

const renderHome = () => {
  const buttons = document.querySelectorAll('.menu__list-item button');
  const pages = ['puzzle', 'top', 'settings'];
  // const puzzle = new Puzzle(9);

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      renderPage(pages[i]);
      // renderPage(pages[i], puzzle);
    });
  }

  renderPage(pages[0]);
  // renderPage(pages[0], puzzle);
  // setHandler(puzzle);
};

export default renderHome;
// export { setHandler, renderHome };
