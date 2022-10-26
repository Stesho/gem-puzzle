const setIsSound = (value) => {
  localStorage.setItem('isSoundOn', value);
};

const setPuzzleType = (value) => {
  localStorage.setItem('puzzleType', value);
};

const setupSettings = () => {
  if (!localStorage.getItem('isSoundOn')) {
    setIsSound(true);
  }
  if (!localStorage.getItem('puzzleType')) {
    setPuzzleType(3);
  }
};

const renderSettings = () => {
  const soundBtns = document.querySelectorAll('.settings__sound input');
  const typeBtns = document.querySelectorAll('.settings__type input');
  const isSoundOn = localStorage.getItem('isSoundOn') || 'true';
  const puzzleType = localStorage.getItem('puzzleType') || '3';

  soundBtns.forEach((item) => {
    if (item.value === isSoundOn) {
      // eslint-disable-next-line no-param-reassign
      item.checked = true;
    }
    item.addEventListener('click', () => {
      const value = item.value === 'true';
      setIsSound(value);
    });
  });

  typeBtns.forEach((item) => {
    if (item.value === puzzleType) {
      // eslint-disable-next-line no-param-reassign
      item.checked = true;
    }
    item.addEventListener('click', () => {
      setPuzzleType(item.value);
    });
  });
};

export { setupSettings, renderSettings };
