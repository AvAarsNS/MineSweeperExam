# 🍅 1 : Setup and first UAT tests
- Setup of readme

## UAT 1: create a game board and format it to be readable for the user

### Creating an empty board
- Board is 3 high ✔
- Board is 3 wide ✔
- All spaces are empty ✔

### Formatting the board
- Format the board to be readable ✔

## UAT 2: be able to open a square, and finding out that there is a bomb

### When clicking on a bomb, mark it with X
- Bomb on (0,0), click on (0,0), mark (0,0) with X
- Bomb on (0,1), click on (0,1), mark (0,0) with X
- Bomb on (1,1), click on (1,1), mark (0,0) with X
- Bombs on (0,0), click on (2,2), mark (2,2) with X

### Detect if you have clicked a bomb
- No X in the grid, not game over
- (0,0) marked with X, game over
- (2,2) marked with X, game over

### Format the board to be able to see the X
- Board with X on (0,0), (0,0) is X
- Board with X on (2,1), (2,1) is X