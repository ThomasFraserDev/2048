export function emptyBoard() {
    return [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
    ];
}

export function addRandomTile(board) {
    const empty = [];
    board.forEach((row, r) =>
        row.forEach((val, c) => {
            if (val === 0) empty.push([r, c]);
        })
    );

    if (empty.length === 0) return board;
    const [r, c] = empty[Math.floor(Math.random() * empty.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
    return board;
}