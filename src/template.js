function createGameBoard() {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
}

module.exports = { createGameBoard };
