function possibleMoves(node) {
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
        if(item[0] >= 0 && item[0] <= 7 && item[1] >= 0 && item[1] <= 7) {
            return true;
        }
    });
}

function knightMoves(start, end) {
    let queue = [];
    let moves = {};
    let visited = [];

    queue.push(moves);
    moves.path = [];
    moves.path.push(start);

    moves.current = start;

    while(queue.length > 0) {
        let temp = queue.shift()
        let next = possibleMoves(temp.current);
        visited.push(temp.current);

        next = next.filter((item) => {
            for(let i = 0; i < visited.length; i++) {
                if(item[0] === visited[i][0] && item[1] === visited[i][1]) {
                    return false;
                }
            }
            return true;
        })

        for(let i = 0; i < next.length; i++) {
            let obj = {};
            obj.path = temp.path.slice();
            obj.path.push(next[i]);
            obj.current = next[i];

            queue.push(obj);
        }

        for(let i = 0; i < queue.length; i++) {
            if(queue[i].current[0] === end[0] && queue[i].current[1] === end[1]) {
                return queue[i].path;
            }
        } 
    }
}

console.log(knightMoves([0, 0], [7, 7])); 
