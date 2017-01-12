/*
 * Utilitary Functions
 */

const createTable = (width, height) => {
  const cells = [];
  const table = document.createElement("tbody");
  for (let h = 0; h < height; h++) {
    const tr = document.createElement("tr");
    for (let w = 0; w < width; w++) {
      const td = document.createElement("td");
      td.dataset.row = h;
      td.dataset.col = w;
      cells.push(td);
      tr.append(td);
    }
    table.append(tr);
  }

  // add table to the #board element
  var board = document.getElementById("board");
  board.append(table);
  return cells;
};

const paint = tds => {
  tds.forEach(td => {
    const cellValue = gol.getCell(td.dataset.row, td.dataset.col);
    if (cellValue === 1) {
      td.classList.add("alive");
    } else {
      td.classList.remove("alive");
    }
  });
};


/* 
 * Game of life instance & Board
 */

const gol = new GameOfLife(25, 20);
const tds = createTable(25, 20);


/* 
 * Event Handlers
 */

document.getElementById("board").addEventListener("click", event => {
  gol.toggleCell(event.target.dataset.row, event.target.dataset.col);
  paint(tds);
});

// Buttons
document.getElementById("step_btn").addEventListener("click", () => {
  gol.step();
  paint(tds);
});

let interval = null;
document.getElementById("play_btn").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      gol.step();
      paint(tds);
    }, 100);
  } else {
    clearInterval(interval);
    interval = null;
  }
});

document.getElementById("reset_btn").addEventListener("click", () => {
  gol.forEachCell((row, col) => {
    gol.setCell(Math.round(Math.random()), row, col);
  })
  paint(tds);
});

document.getElementById("clear_btn").addEventListener("click", () => {
  gol.forEachCell((row, col) => {
    gol.setCell(0, row, col);
  })

  paint(tds);
});
