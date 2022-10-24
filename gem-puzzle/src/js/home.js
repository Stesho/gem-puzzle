const setHandler = (callback) => {
  const cells = document.querySelectorAll('.canvas__cell');

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', () => {
      callback(i);
    });
  }
};

export default setHandler;
