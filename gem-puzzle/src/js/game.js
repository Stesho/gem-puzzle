import Puzzle from './puzzle';

const setHandler = (handler) => {
  const cells = document.querySelectorAll('.canvas__cell');
  const moves = document.querySelector('.score__moves span');
  const timer = document.querySelector('.score__timer span');
  const result = document.querySelector('.modal__save');
  const restart = document.querySelector('.panel__start');

  for (let i = 0; i < cells.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    cells[i].addEventListener('click', () => {
      handler.moveCell(i);
      moves.textContent = handler.movesCount;
      if (handler.movesCount === 1) {
        handler.startTimer();
      }
      if (handler.checkArr()) {
        handler.stopTimer();
      }
    });
  }

  result.addEventListener('click', () => {
    let top = localStorage.getItem('top') || '[]';
    top = JSON.parse(top);

    top.push({
      moves: handler.movesCount,
      time: handler.timer.time,
    });
    localStorage.setItem('top', JSON.stringify(top));
  });

  restart.addEventListener('click', () => {
    handler.restart();
    moves.textContent = handler.movesCount;
    timer.textContent = '00:00';
  });
};

const renderGame = () => {
  const puzzle = new Puzzle(9);

  puzzle.draw();
  setHandler(puzzle);
};

export default renderGame;
