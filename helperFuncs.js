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

export { knightMoveCalculator, getShortestPath, finalOutput };
