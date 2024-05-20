# Knight Moves

This repository contains a JavaScript function for finding the shortest path for a knight to move from one square to another on a chessboard.

## Introduction

The `knightMoves` function calculates the shortest possible way for a knight to get from one square to another on a chessboard. It uses breadth-first search (BFS) algorithm to find the shortest path.

## Features

- Calculates the shortest path for a knight to move from one square to another on a chessboard.
- Uses breadth-first search (BFS) algorithm.
- Outputs the shortest path with the number of moves required.

## Technologies Used

- JavaScript (ES6)

## Setup and Usage

## Setup

Clone the project

```bash
  git clone https://github.com/AdishtJaglan/knights-travails.git
```

Go to the project directory

```bash
  cd knights-travails
```

Execute the file

```bash
  node knightMoves.js
```

### Usage

To use the `knightMoves` function, simply call it with the start and end positions as parameters. For example:

```javascript
knightMoves([0, 0], [1, 2]); // [[0, 0], [1, 2]]
knightMoves([0, 0], [3, 3]); // Possible outputs: [[0, 0], [2, 1], [3, 3]] or [[0, 0], [1, 2], [3, 3]]
knightMoves([3, 3], [0, 0]); // Possible outputs: [[3, 3], [1, 2], [0, 0]] or [[3, 3], [2, 1], [0, 0]]
knightMoves([0, 0], [7, 7]); // Output with one possible shortest path
```
