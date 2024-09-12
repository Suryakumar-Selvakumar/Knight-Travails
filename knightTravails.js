const knightTravails = [
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
];

function knightMoveCalculator(x, y) {
  const knightMoves = [
    [x - 2, y - 1],
    [x - 1, y - 2],
    [x + 1, y - 2],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x - 2, y + 1],
  ];
  return knightMoves;
}

for (let x = 0; x < knightTravails.length; x++) {
  for (let y = 0; y < knightTravails.length; y++) {
    const knightMoves = knightMoveCalculator(x, y);
    knightMoves.forEach((move) => {
      if (!(move[0] < 0) && !(move[1] < 0)) {
        knightTravails[x][y] = knightTravails[x][y].concat([move]);
      }
    });
  }
}

function knightMoves(src, dst) {
  let f = src[0],
    l = src[1],
    q = [],
    visited = Array(8).fill(false),
    count = 0;

  visited[src] = true;
  src = knightTravails[f][l];
  q.push(src);
  console.log(dst);
  while (q.length) {
    if (q[0].length === 0) {
      q.shift();
    }
    const curr = q[0].shift();
    console.log("Queue:", q);

    if (!visited[curr] && curr !== undefined) {
      visited[curr] = true;
      q.push(knightTravails[curr[0]][curr[1]]);
      count++;
    }
    // for (const x of knightTravails[curr[0]][curr[1]]) {

    // }
    if (curr === dst) {
      return count;
    }
  }
}

// console.log(knightTravails[2][1]);
// console.log(knightTravails[7][7]);
console.log(knightMoves([0, 0], [7, 7]));
