const renderEmptyList = () => {
  const emptyList = document.querySelector('.top__emptyList');

  emptyList.classList.add('visibleBlock');
};

const renderList = (movesCount, time) => {
  const table = document.querySelector('.top__table');
  const list = document.querySelector('.top__list');
  const item = document.createElement('div');
  const moves = document.createElement('div');
  const timer = document.createElement('div');

  item.classList.add('top__listItem');
  moves.classList.add('top__listMoves');
  timer.classList.add('top__listTimer');
  table.classList.add('visibleBlock');

  moves.textContent = movesCount;
  timer.textContent = time;

  item.append(moves);
  item.append(timer);

  list.append(item);
};

const renderTop = () => {
  let top = localStorage.getItem('top') || '[]';
  top = JSON.parse(top);

  if (top.length === 0) {
    renderEmptyList();
  } else {
    for (let i = 0; i < top.length; i += 1) {
      renderList(top[i].moves, top[i].time);
    }
  }
};

export default renderTop;
