const {
  createGameBoard,
  formatGameBoard,
  markGameBoard,
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
      it("the top left square contains a bomb and you click on it", () => {
        const board = createGameBoard();
        const outcome = [
          ["X", null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(markGameBoard(board)).toEqual(outcome);
      });
    });
  });
});
