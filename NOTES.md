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
- Bomb on (0,0), click on (0,0), mark (0,0) with X ✔
- Bomb on (0,1), click on (0,1), mark (0,1) with X ✔
- Bomb on (1,1), click on (1,1), mark (1,1) with X ✔
- Bombs on (0,0) and (2,2), click on (2,2), mark (2,2) with X ✔
- Bomb on (2,2), click on (0,0), nothing marked ✔

### Detect if you have clicked a bomb
- No X in the grid, not game over
- (0,0) marked with X, game over
- (2,2) marked with X, game over

### Format the board to be able to see the X
- Board with X on (0,0), (0,0) is X
- Board with X on (2,1), (2,1) is X

## 🍅 2: Continue and Finish with UAT 2

### When clicking on a bomb, mark it with X
- Bomb on (0,0), click on (0,0), mark (0,0) with X ✔
- Bomb on (0,1), click on (0,1), mark (0,1) with X ✔
- Bomb on (1,1), click on (1,1), mark (1,1) with X ✔
- Bombs on (0,0) and (2,2), click on (2,2), mark (2,2) with X ✔
- Bomb on (2,2), click on (0,0), nothing marked ✔

## 🍅 3: Continue UAT 2 and maybe even finish it ;)

### Detect if you have clicked a bomb
- No X in the grid, not game over ✔
- (0,0) marked with X, game over ✔
- (2,2) marked with X, game over ✔

### Format the board to be able to see the X
- Board with X on (0,0), (0,0) is X ✔
- Board with X on (2,1), (2,1) is X ✔

## UAT 3: Click on a square and get the number of bombs around in the right square
- Board with bombs on (0,0), (1,0) and (1,1)
- Click on (2, 2), get a 1
- Click on (2, 1), get a 2
- Click on (0, 1), get a 3

## 🍅 4: Continue with UAT 3
## Calculate number of bombs around
- Board with bombs on (0,0), (1,0) and (1,1)
- (2, 2), get a 1 ✔
- (2, 1), get a 2 ✔
- (0, 1), get a 3 ✔

### Click on a square and get the number of bombs around in the right square
- Click on (2, 2), get a 1 on (2,2)
- Click on (2, 2), get a 1 on (2,2)