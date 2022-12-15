const {
  createGameBoard,
  formatGameBoard,
  openSquare,
} = require("../src/template");

describe("This is a test suite for a minesweeper game", () => {
  describe("We want to be able to generate an empty game board.\nThe board:", () => {
    const board = createGameBoard();
    it("is 3 high", () => {
      expect(board.length).toEqual(3);
    });
    it("is 3 wide", () => {
      expect(board.every((row) => row.length === 3)).toEqual(true);
    });
    it("is filled with empty spaces", () => {
      expect(
        board.every((row) => row.every((square) => square === null))
      ).toEqual(true);
    });
  });
  describe("We want to display a board when it:", () => {
    const board = createGameBoard();
    it("is empty", () => {
      expect(formatGameBoard(board)).toEqual(`+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`);
    });
  });
  describe("We want to be able to detect clicking on a board, and we want to fail the game when that happens.", () => {
    describe("We want to mark the square with X when:", () => {
      const board = createGameBoard();
      it("the top left square contains a bomb and you click on it", () => {
        const clickLocation = [0, 0];
        const bombs = [[0, 0]];
        const outcome = [
          ["X", null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(openSquare(board, bombs, clickLocation)).toEqual(outcome);
      });
      it("the middle left square contains a bomb and you click on it", () => {
        const clickLocation = [0, 1];
        const bombs = [[0, 1]];
        const outcome = [
          [null, null, null],
          ["X", null, null],
          [null, null, null],
        ];
        expect(openSquare(board, bombs, clickLocation)).toEqual(outcome);
      });
      it("the center square contains a bomb and you click on it", () => {
        const clickLocation = [1, 1];
        const bombs = [[1, 1]];
        const outcome = [
          [null, null, null],
          [null, "X", null],
          [null, null, null],
        ];
        expect(openSquare(board, bombs, clickLocation)).toEqual(outcome);
      });
      it("the top left square and bottom right contain a bomb and you click on the bottom right square", () => {
        const clickLocation = [2, 2];
        const bombs = [
          [0, 0],
          [2, 2],
        ];
        const outcome = [
          [null, null, null],
          [null, null, null],
          [null, null, "X"],
        ];
        expect(openSquare(board, bombs, clickLocation)).toEqual(outcome);
      });
      it("the top left square contains a bomb and you click on the bottom right square, nothing is marked", () => {
        const clickLocation = [2, 2];
        const bombs = [[0, 0]];
        const outcome = [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(openSquare(board, bombs, clickLocation)).toEqual(outcome);
      });
    });
  });
});
