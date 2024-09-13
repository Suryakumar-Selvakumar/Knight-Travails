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
    count = 0,
    edgeArr = [];

  edgeArr.push(src);
  visited[src[0]][src[1]] = true;
  let firstCell = knightTravails[src[0]][src[1]];
  for (const adjCells of firstCell) {
    q.push(adjCells);
  }

  while (q.length) {
    const curr = q.shift();
    let knightTravArr = knightTravails[curr[0]][curr[1]];

    edgeArr.push(curr);
    visited[curr[0]][curr[1]] = true;

    for (const edge of knightTravArr) {
      if (edge[0] === dst[0] && edge[1] === dst[1]) {
        edgeArr.push(edge);
        return edgeArr;
      }
    }

    for (const x of knightTravArr) {
      if (!visited[x[0]][x[1]]) {
        visited[x[0]][x[1]] = true;
        q.push(x);
      }
    }
  }
}

// console.log(knightTravails[2][1]);
// console.log(knightTravails[7][7]);
console.log(knightMoves([3, 3], [0, 0]));
