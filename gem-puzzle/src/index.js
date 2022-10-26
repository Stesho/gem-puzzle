import './index.html';
import './styles/index.scss';
import html from './pages/home/home.html';
import renderHome from './js/home';
import { setupSettings } from './js/settings';

const start = () => {
  const body = document.querySelector('body');
  body.innerHTML = html;
  renderHome();
  setupSettings();
  // alert('Привет, если вас не затруднит, буду очень благодарен, если проверите позже');
};

start();
