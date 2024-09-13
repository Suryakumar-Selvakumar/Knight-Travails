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
  let f = src[0],
    l = src[1],
    q = [],
    visited = new Array(8).fill(false).map(() => new Array(8).fill(false)),
    count = 0;

  visited[f][l] = true;
  src = knightTravails[f][l];
  q.push(src[0], src[1]);

  while (q.length) {
    // console.log("BEGIN", q, "END");
    const curr = q.shift();

    if (!visited[curr[0]][curr[1]]) {
      visited[curr[0]][curr[1]] = true;
      //   console.log("BEGIN", knightTravails[curr[0]][curr[1]], "END");
      knightTravails[curr[0]][curr[1]].forEach((edge) => {
        if (edge) {
          console.log(edge);
          if (!visited[edge[0]][edge[1]]) {
            q.push(edge);
            count++;
          }
        }
      });
    }

    if (curr[0] === dst[0] && curr[1] === dst[1]) {
      return count;
    }
  }
}

// console.log(knightTravails[1][6]);
// console.log(knightTravails[7][7]);
console.log(knightMoves([0, 0], [7, 7]));
