function possibleMoves(node, visited = null) {
    let moves = [];
    moves.push([node[0]+2, node[1]+1]);
    moves.push([node[0]+1, node[1]+2]);
    moves.push([node[0]-2, node[1]+1]);
    moves.push([node[0]-1, node[1]+2]);
    moves.push([node[0]-2, node[1]-1]);
    moves.push([node[0]-1, node[1]-2]);
    moves.push([node[0]+2, node[1]-1]);
    moves.push([node[0]+1, node[1]-2]);

    return moves.filter(function(item) {
        if(visited !== null && visited[0] === item[0] && visited[1] === item[1]) {
            return false;
        }
        if(item[0] >= 0 && item[0] <= 7 && item[1] >= 0 && item[1] <= 7) {
            return true;
        }
    });
}

function knightMoves(start, end) {

}

// console.log(knightMoves([3, 3], [7, 7]));
// console.log(possibleMoves([1,2]));