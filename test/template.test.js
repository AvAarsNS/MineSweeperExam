const { createGameBoard, formatGameBoard } = require("../src/template");

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
        board.every((row) => row.every((space) => space === null))
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
});
