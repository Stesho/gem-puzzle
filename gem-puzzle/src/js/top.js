const sortByField = (field) => (a, b) => (a[field] > b[field] ? 1 : -1);

const renderEmptyList = () => {
  const emptyList = document.querySelector('.top__emptyList');

  emptyList.classList.add('visibleBlock');
};

const renderList = (positionNumber, movesCount, time) => {
  const table = document.querySelector('.top__table');
  const list = document.querySelector('.top__list');
  const item = document.createElement('div');
  const position = document.createElement('div');
  const moves = document.createElement('div');
  const timer = document.createElement('div');

  const minutes = Math.trunc(time / 60).toString().padStart(2, 0);
  const seconds = (time % 60).toString().padStart(2, 0);
  item.classList.add('top__listItem');
  position.classList.add('top__listPosition');
  moves.classList.add('top__listMoves');
  timer.classList.add('top__listTimer');
  table.classList.add('visibleBlock');

  moves.textContent = movesCount;
  timer.textContent = `${minutes}:${seconds}`;
  position.textContent = positionNumber;

  item.append(position);
  item.append(timer);
  item.append(moves);

  list.append(item);
};

const renderTop = () => {
  let top = localStorage.getItem('top') || '[]';
  top = JSON.parse(top);

  top.sort(sortByField('time'));

  if (top.length === 0) {
    renderEmptyList();
  } else {
    for (let i = 0; i < top.length; i += 1) {
      renderList(i + 1, top[i].moves, top[i].time);
    }
  }
};

export default renderTop;
