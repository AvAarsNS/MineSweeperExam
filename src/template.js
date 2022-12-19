const bombMarker = "X";

function createGameBoard() {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
}

function formatGameBoard(board) {
  let formattedBoard = `${"+-".repeat(board.length)}+`;

  board.forEach((row) => {
    formattedBoard += "\n";
    row.forEach((square) => {
      formattedBoard += `|${square || " "}`;
    });
    formattedBoard += `|\n${"+-".repeat(row.length)}+`;
  });

  return formattedBoard;
}

function openSquare(board, bombLocations, clickLocation) {
  const newBoard = JSON.parse(JSON.stringify(board));
  const [clickX, clickY] = clickLocation;

  if (
    bombLocations.some(([bombX, bombY]) => bombX === clickX && bombY === clickY)
  )
    newBoard[clickY][clickX] = bombMarker;
  return newBoard;
}

function isGameOver(board) {
  return board.some((row) => row.includes(bombMarker));
}

function calculateBombsAround(bombs, [locX, locY]) {
  let amount = 0;
  bombs.forEach(([bombX, bombY]) => {
    if (Math.abs(bombX - locX) <= 1 && Math.abs(bombY - locY) <= 1) amount += 1;
  });
  return amount;
}

module.exports = {
  createGameBoard,
  formatGameBoard,
  openSquare,
  isGameOver,
  calculateBombsAround,
};
