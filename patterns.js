const patterns = {
  glider: () => {
    gol.setCell(1, 0, 1);
    gol.setCell(1, 1, 2);
    gol.setCell(1, 2, 0);
    gol.setCell(1, 2, 1);
    gol.setCell(1, 2, 2);
  },
};
