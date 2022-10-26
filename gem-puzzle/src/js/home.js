import puzzlePage from '../pages/puzzle/puzzle.html';
import topPage from '../pages/top/top.html';
import settingsPage from '../pages/settings/settings.html';
import renderGame from './game';
import renderTop from './top';
import { renderSettings } from './settings';

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
      renderSettings();
      break;
    default:
      break;
  }
};

const renderHome = () => {
  const buttons = document.querySelectorAll('.menu__list-item input');
  const pages = ['puzzle', 'top', 'settings'];

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      renderPage(pages[i]);
    });
  }

  renderPage(pages[0]);
};

export default renderHome;
