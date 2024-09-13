import {
  knightMoveCalculator,
  getShortestPath,
  finalOutput,
} from "./helperFuncs.js";

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
          return finalOutput(getShortestPath(backTrackArr, src, dst));
        }
      }
    }
  }
}

knightMoves([3, 3], [4, 3]);
