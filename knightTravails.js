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

const visited = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
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
      if (
        !(move[0] < 0) &&
        !(move[1] < 0) &&
        !(move[0] > 7) &&
        !(move[1] > 7)
      ) {
        knightTravails[x][y] = knightTravails[x][y].concat([move]);
      }
    });
  }
}

function knightMoves(src, dst) {
  let q = [],
    count = 0;

  visited[src[0]][src[1]] = true;
  src = knightTravails[src[0]][src[1]];
  q.push(src[0], src[1]);

  while (q.length) {
    const curr = q.shift();
    let knightTravArr = knightTravails[curr[0]][curr[1]];

    console.log(curr);
    visited[curr[0]][curr[1]] = true;

    for (const x of knightTravArr) {
      if (!visited[x[0]][x[1]]) {
        visited[x[0]][x[1]] = true;
        q.push(x);
        count++;
      }
    }

    if (curr[0] === dst[0] && curr[1] === dst[1]) {
      return count;
    }
  }
}

// console.log(knightTravails[1][6]);
// console.log(knightTravails[7][7]);
console.log(knightMoves([0, 0], [7, 7]));
