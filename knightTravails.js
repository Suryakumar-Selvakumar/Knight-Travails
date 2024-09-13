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
    backTrackArr = [],
    edgeArr = [];

  edgeArr.push(src);
  visited[src[0]][src[1]] = true;
  let firstCell = knightTravails[src[0]][src[1]];
  for (const adjCells of firstCell) {
    backTrackArr.push({ prev: src, adjCell: adjCells });
    q.push(adjCells);
  }
  q.push(null);
  edgeArr.push(null);

  while (q.length) {
    const curr = q.shift();
    edgeArr.push(curr);
    if (curr === null) {
      if (q.length > 0) {
        q.push(null);
      }
    } else {
      let knightTravArr = knightTravails[curr[0]][curr[1]];
      visited[curr[0]][curr[1]] = true;

      for (const x of knightTravArr) {
        if (!visited[x[0]][x[1]]) {
          visited[x[0]][x[1]] = true;
          backTrackArr.push({ prev: curr, adjCell: x });
          q.push(x);
        }
      }

      for (const edge of knightTravArr) {
        if (edge[0] === dst[0] && edge[1] === dst[1]) {
          edgeArr.push(edge);
          const spth = getShortestPath(backTrackArr, src, dst);
          return finalOutput(spth);
        }
      }
    }
  }
}

function getShortestPath(backTrackArr, src, dst) {
  if (JSON.stringify(src) === JSON.stringify(dst)) {
    return [src];
  }

  for (const obj of backTrackArr) {
    if (JSON.stringify(obj.adjCell) === JSON.stringify(dst)) {
      dst = obj.prev;
      return [obj.adjCell].concat(getShortestPath(backTrackArr, src, dst));
    }
  }
}

function finalOutput(shortestPath) {
  console.log(
    `You made it in ${shortestPath.length - 1} moves! Here's your path:`
  );
  for (let i = shortestPath.length - 1; i >= 0; i--) {
    console.log(shortestPath[i]);
  }
  return;
}

knightMoves([0, 0], [7, 7]);
