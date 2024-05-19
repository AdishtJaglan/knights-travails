function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  function bfs(start, end) {
    let queue = [[start]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      let path = queue.shift();
      let [x, y] = path[path.length - 1];

      if (x === end[0] && y === end[1]) {
        return path;
      }

      for (let [dx, dy] of moves) {
        let nx = x + dx;
        let ny = y + dy;

        if (isValid(nx, ny) && !visited.has([nx, ny].toString())) {
          visited.add([nx, ny].toString());
          queue.push([...path, [nx, ny]]);
        }
      }
    }
  }

  let path = bfs(start, end);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let position of path) {
    console.log(position);
  }
  return path;
}

knightMoves([0, 0], [1, 2]); // [[0, 0], [1, 2]]
knightMoves([0, 0], [3, 3]); // Possible outputs: [[0, 0], [2, 1], [3, 3]] or [[0, 0], [1, 2], [3, 3]]
knightMoves([3, 3], [0, 0]); // Possible outputs: [[3, 3], [1, 2], [0, 0]] or [[3, 3], [2, 1], [0, 0]]
knightMoves([0, 0], [7, 7]); // Output with one possible shortest path
