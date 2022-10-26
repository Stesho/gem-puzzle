import './index.html';
import './styles/index.scss';
import html from './pages/home/home.html';
import renderHome from './js/home';

const start = () => {
  const body = document.querySelector('body');
  body.innerHTML = html;
  renderHome();
  // alert('Привет, если вас не затруднит, буду очень благодарен, если проверите позже');
};

start();
