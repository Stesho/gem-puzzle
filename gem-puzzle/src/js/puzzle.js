class Puzzle {
  constructor(cellCount) {
    this.cellCount = cellCount;
    this.emptyIndex = [];
    this.cellArr = this.shuffle();
  }

  draw() {
    const count = Math.sqrt(this.cellCount);
    const canvas = document.querySelector('.canvas');
    const canvasPadding = getComputedStyle(canvas).padding.split('px')[0];
    let itemWidth = (canvas.clientWidth - (count + 1) * canvasPadding) / count;
    itemWidth += 'px';

    for (let i = 0; i < count; i += 1) {
      for (let j = 0; j < count; j += 1) {
        const item = document.createElement('div');
        item.classList.add('canvas__cell');
        item.style.width = itemWidth;
        item.style.height = itemWidth;
        item.textContent = this.cellArr[i][j];
        canvas.append(item);
      }
    }

    this.render();
  }

  render() {
    const cells = document.querySelectorAll('.canvas__cell');

    for (let i = 0; i < this.cellCount; i += 1) {
      const [row, col] = this.getRowCol(i);

      cells[i].textContent = this.cellArr[row][col];

      if (cells[i].classList.contains('canvas__emptyCell')) {
        cells[i].classList.remove('canvas__emptyCell');
      }

      if (this.cellArr[row][col] === null) {
        cells[i].classList.add('canvas__emptyCell');
      }
    }
  }

  shuffle() {
    const count = this.cellCount;
    const sqrtCount = Math.sqrt(this.cellCount);
    const tempArr = [];
    const cellArr = [];

    for (let i = 0; i < count - 1; i += 1) {
      tempArr[i] = i + 1;
    }
    tempArr.push(null);

    for (let i = tempArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }

    for (let i = 0; i < sqrtCount; i += 1) {
      cellArr[i] = [];
    }

    for (let i = 0; i < count; i += 1) {
      const [row, col] = this.getRowCol(i);
      cellArr[row][col] = tempArr[i];
      if (tempArr[i] === null) {
        this.emptyIndex = [row, col];
      }
    }

    return cellArr;
  }

  moveCell(cellIndex) {
    const [row, col] = this.getRowCol(cellIndex);
    const [emptyRow, emptyCol] = this.emptyIndex;
    // console.log(this.cellArr[emptyRow][emptyCol]);
    if (this.isClickable(cellIndex)) {
      // eslint-disable-next-line max-len
      [this.cellArr[row][col], this.cellArr[emptyRow][emptyCol]] = [this.cellArr[emptyRow][emptyCol], this.cellArr[row][col]];
      this.emptyIndex = [row, col];
      console.log(this.cellArr);
      this.render();
    }
  }

  isClickable(cellIndex) {
    const shift = Math.sqrt(this.cellCount);
    const [row, col] = this.getRowCol(cellIndex);

    if (
      (row < shift - 1 && this.cellArr[row + 1][col] === null)
      || (row > 0 && this.cellArr[row - 1][col] === null)
      || this.cellArr[row][col + 1] === null
      || this.cellArr[row][col - 1] === null
    ) {
      return true;
    }

    return false;
  }

  getRowCol(cellIndex) {
    const shift = Math.sqrt(this.cellCount);
    const row = Math.trunc(cellIndex / shift);
    const col = cellIndex % shift;

    return [row, col];
  }
}

export default Puzzle;
