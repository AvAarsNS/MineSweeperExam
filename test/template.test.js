const {
  createGameBoard,
  formatGameBoard,
  openSquare,
  isGameOver,
} = require("../src/template");

describe("This is a test suite for a minesweeper game", () => {
  const emptyBoard = createGameBoard();
  describe("We want to be able to generate an empty game board.\nThe board:", () => {
    it("is 3 high", () => {
      expect(emptyBoard.length).toEqual(3);
    });
    it("is 3 wide", () => {
      expect(emptyBoard.every((row) => row.length === 3)).toEqual(true);
    });
    it("is filled with empty spaces", () => {
      expect(
        emptyBoard.every((row) => row.every((square) => square === null))
      ).toEqual(true);
    });
  });
  describe("We want to display a board when it:", () => {
    it("is empty", () => {
      expect(formatGameBoard(emptyBoard)).toEqual(`+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`);
    });
    it("contains a bomb in the top left", () => {
      const boardWithBombTopLeft = openSquare(emptyBoard, [[0, 0]], [0, 0]);
      expect(formatGameBoard(boardWithBombTopLeft)).toEqual(`+-+-+-+
|X| | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`);
    });
    it("contains a bomb in the middle right", () => {
      const boardWithBombMiddleRight = openSquare(emptyBoard, [[2, 1]], [2, 1]);
      expect(formatGameBoard(boardWithBombMiddleRight)).toEqual(`+-+-+-+
| | | |
+-+-+-+
| | |X|
+-+-+-+
| | | |
+-+-+-+`);
    });
  });
  describe("We want to be able to detect clicking on a board, and we want to fail the game when that happens.", () => {
    describe("We want to mark the square with X when:", () => {
      it("the top left square contains a bomb and you click on it", () => {
        const clickLocation = [0, 0];
        const bombs = [[0, 0]];
        const outcome = [
          ["X", null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(openSquare(emptyBoard, bombs, clickLocation)).toEqual(outcome);
      });
      it("the middle left square contains a bomb and you click on it", () => {
        const clickLocation = [0, 1];
        const bombs = [[0, 1]];
        const outcome = [
          [null, null, null],
          ["X", null, null],
          [null, null, null],
        ];
        expect(openSquare(emptyBoard, bombs, clickLocation)).toEqual(outcome);
      });
      it("the center square contains a bomb and you click on it", () => {
        const clickLocation = [1, 1];
        const bombs = [[1, 1]];
        const outcome = [
          [null, null, null],
          [null, "X", null],
          [null, null, null],
        ];
        expect(openSquare(emptyBoard, bombs, clickLocation)).toEqual(outcome);
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
        expect(openSquare(emptyBoard, bombs, clickLocation)).toEqual(outcome);
      });
      it("the top left square contains a bomb and you click on the bottom right square, nothing is marked", () => {
        const clickLocation = [2, 2];
        const bombs = [[0, 0]];
        const outcome = [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ];
        expect(openSquare(emptyBoard, bombs, clickLocation)).toEqual(outcome);
      });
    });
    describe("We want to be able to detect if a player has clicked on a bomb, so if the grid:", () => {
      it("contains no X, the game is not over", () => {
        expect(isGameOver(emptyBoard)).toEqual(false);
      });
      it("contains an X in the top left", () => {
        const topLeftX = openSquare(emptyBoard, [[0, 0]], [0, 0]);
        expect(isGameOver(topLeftX)).toEqual(true);
      });
      it("contains an X in the bottom right", () => {
        const bottomRightX = openSquare(emptyBoard, [[2, 2]], [2, 2]);
        expect(isGameOver(bottomRightX)).toEqual(true);
      });
    });
  });
});
