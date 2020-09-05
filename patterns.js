const patterns = {
  glider: () => {
    gol.setCell(1, 0, 1);
    gol.setCell(1, 1, 2);
    gol.setCell(1, 2, 0);
    gol.setCell(1, 2, 1);
    gol.setCell(1, 2, 2);
  },
  diamond: () => {
    gol.setCell(1, 4, 12);
    gol.setCell(1, 5, 11);
    gol.setCell(1, 5, 12);
    gol.setCell(1, 5, 13);
    gol.setCell(1, 8, 4);
    gol.setCell(1, 8, 20);
    gol.setCell(1, 9, 3);
    gol.setCell(1, 9, 19);
    gol.setCell(1, 9, 4);
    gol.setCell(1, 9, 20);
    gol.setCell(1, 9, 5);
    gol.setCell(1, 9, 21);
    gol.setCell(1, 14, 12);
    gol.setCell(1, 15, 11);
    gol.setCell(1, 15, 12);
    gol.setCell(1, 15, 13);
  },
  diamCornGliders: () => {
    gol.setCell(1, 0, 1);
    gol.setCell(1, 0, 23);
    gol.setCell(1, 1, 2);
    gol.setCell(1, 1, 22);
    gol.setCell(1, 2, 0);
    gol.setCell(1, 2, 1);
    gol.setCell(1, 2, 2);
    gol.setCell(1, 2, 22);
    gol.setCell(1, 2, 24);
    gol.setCell(1, 2, 23);
    gol.setCell(1, 4, 12);
    gol.setCell(1, 5, 11);
    gol.setCell(1, 5, 12);
    gol.setCell(1, 5, 13);
    gol.setCell(1, 8, 4);
    gol.setCell(1, 8, 20);
    gol.setCell(1, 9, 3);
    gol.setCell(1, 9, 19);
    gol.setCell(1, 9, 4);
    gol.setCell(1, 9, 20);
    gol.setCell(1, 9, 5);
    gol.setCell(1, 9, 21);
    gol.setCell(1, 14, 12);
    gol.setCell(1, 15, 11);
    gol.setCell(1, 15, 12);
    gol.setCell(1, 15, 13);
    gol.setCell(1, 17, 0);
    gol.setCell(1, 17, 1);
    gol.setCell(1, 17, 2);
    gol.setCell(1, 17, 22);
    gol.setCell(1, 17, 23);
    gol.setCell(1, 17, 24);
    gol.setCell(1, 18, 2);
    gol.setCell(1, 18, 22);
    gol.setCell(1, 19, 1);
    gol.setCell(1, 19, 23);
  },
  CornGliders: () => {
    gol.setCell(1, 0, 1);
    gol.setCell(1, 0, 23);
    gol.setCell(1, 1, 2);
    gol.setCell(1, 1, 22);
    gol.setCell(1, 2, 0);
    gol.setCell(1, 2, 1);
    gol.setCell(1, 2, 2);
    gol.setCell(1, 2, 22);
    gol.setCell(1, 2, 24);
    gol.setCell(1, 2, 23);
    gol.setCell(1, 17, 0);
    gol.setCell(1, 17, 1);
    gol.setCell(1, 17, 2);
    gol.setCell(1, 17, 22);
    gol.setCell(1, 17, 23);
    gol.setCell(1, 17, 24);
    gol.setCell(1, 18, 2);
    gol.setCell(1, 18, 22);
    gol.setCell(1, 19, 1);
    gol.setCell(1, 19, 23);
  },
};
