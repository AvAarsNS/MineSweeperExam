function createGameBoard() {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
}

function formatGameBoard() {
  return `+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`;
}

function openSquare(board, bombLocations, clickLocation) {
  const newBoard = JSON.parse(JSON.stringify(board));
  const [clickX, clickY] = clickLocation;

  if (
    bombLocations.some(([bombX, bombY]) => bombX === clickX && bombY === clickY)
  )
    newBoard[clickY][clickX] = "X";
  return newBoard;
}

module.exports = { createGameBoard, formatGameBoard, openSquare };
