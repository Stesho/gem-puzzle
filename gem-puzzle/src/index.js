import './index.html';
import './styles/index.scss';
import html from './pages/home/home.html';
import { renderHome } from './js/home';

const start = () => {
  const body = document.querySelector('body');
  body.innerHTML = html;
  renderHome();
};

start();
