# Knight-Travails

A program that returns the shortest path that a knight can take to go from one starting cell to a destination cell.<br>
Implemented with:<br>
- A matrix that represents the chess-board
- Each matrix cell contains the moves that a knight can make from that cell as an adjacency list
- BFS Traversal to find all possible moves from source cell to destination cell
- Path Tracing and Back-Tracking using objects to find the shortest path.

## Sample Output
  => knightMoves( [ 3, 3 ], [ 4, 3 ] );<br>
  => You made it in 3 moves!  Here's your path:<br>
&emsp;&ensp;[3,3]<br>
&emsp;&ensp;[4,5]<br>
&emsp;&ensp;[2,4]<br>
&emsp;&ensp;[4,3]<br>
