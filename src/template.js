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

function markGameBoard() {
  return [
    ["X", null, null],
    [null, null, null],
    [null, null, null],
  ];
}

module.exports = { createGameBoard, formatGameBoard, markGameBoard };
