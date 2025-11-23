let score = 0; // Initialising score
let lmScore = 0; // Initialising the last move score
let highestVal = 0; // Initialising the highest value

// -------------------- Board Management --------------------

export function emptyBoard() { // Function that creates an empty board, with empty tiles reprsented by 0
    return [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
    ];
}

export function addRandomTile(board) { // Funtion that adds either 2 or 4 to an empty tile on the board
    const empty = [];
    board.forEach((row, r) =>
        row.forEach((val, c) => { // For each tile
            if (val === 0) empty.push([r, c]); // Store the tile's position if it's empty
        })
    );

    if (empty.length === 0) return board; // Return the board as it is if no empty tiles exist
    const [r, c] = empty[Math.floor(Math.random() * empty.length)]; // Pick the position of a random empty tile
    board[r][c] = Math.random() < 0.9 ? 2 : 4; // Fill the tile with either 2 (90% chance) or 4 (10% chance)
    return board;
}

export function boardsEqual(board1, board2) { // Function that checks if two boards are the same
    return board1.every((row, r) => 
        row.every((val, c) => val === board2[r][c]) // Compare each value in board1 to each value in board2
    );
}

// -------------------- Shifting Tiles --------------------

/*
The logic for moving and merging tiles is implemented by only sliding rows to the left. Depending on the direction of movement, the board is flipped and rotated to fit this implementation.
For example, with the following board:
0   0   0   32
0   2   0   0
4   2   16  0
0   0   0   0
to moving tiles upwards:
    1. Rotate the board 90° counter clockwise

       32  0   0   0
       0   0   16  0
       0   2   2   0
       0   0   4   0

    2. Slide rows left

       32  0   0   0
       16  0   0   0
       4   0   0   0
       4   0   0   0

    3. Rotate the 90° board clockwise

       4  4   16  32
       0  0   0   0
       0  0   0   0
       0  0   0   0
*/

function slideRow(row) { // Function that slides the values within a row to the left
    let nonEmpty = row.filter(val => val !== 0); // Initialise nonEmpty as a list of all non empty (0) tiles within a row
    let newRow = [];
    let i = 0; // Initialise i as a counter for the amount of non empty tiles handled
    
    while (i < nonEmpty.length) { // While there exists unhandled non empty tiles
        if (i + 1 < nonEmpty.length && nonEmpty[i] === nonEmpty[i + 1]) { // If the value of a non empty tile is equal to the value of the non empty value of the tile to the right
            newRow.push(nonEmpty[i] * 2) // Combine the values of the two tiles and push it into the new row
            score += (nonEmpty[i] * 2);
            lmScore += nonEmpty[i] * 2;
            i += 2; // Increment the amount of non empty tiles handled by 2
        } else { // If a non empty tile is unable to merge
            newRow.push(nonEmpty[i]); // Push it into the new row
            i += 1; // Increment the amount of non empty tiles handled by 1
        }
    }
    
    while (newRow.length < 4) { // Fill any remaining spaces in the new row with empty tiles
        newRow.push(0);
    }
    return newRow;
}

function rotateClockwise(board) { // Function that rotates the board clockwise
    return board[0].map((_, c) => // For each column in the board 
        board.map(row => row[c]).reverse() // Remake the board with the rows as each column reversed (rotated clockwise)
    );
}

function rotateCntrClockwise(board) { // Function that rotates the board counter clockwise
    const len = board.length;
    return board[0].map((_, c) =>  // For each column in the board 
        board.map(row => row[len - 1 - c]) // Takes the columns from right to left and turns them into rows
    );
}

export function moveLeft(board) { // Function that moves all the values in the board left
    lmScore = 0; // Reset last move score
    return board.map(row => slideRow(row));
}

export function moveRight(board) { // Function that moves all the values in the board right
    lmScore = 0; // Reset last move score
    return board.map(row => slideRow([...row].reverse()).reverse());
}

export function moveUp(board) { // Function that moves all the values in the board up
    lmScore = 0; // Reset last move score
    let rotated = rotateCntrClockwise(board);
    rotated = rotated.map(row => slideRow(row));
    rotated = rotateClockwise(rotated);
    return rotated;
}

export function moveDown(board) { // Function that moves all the values in the board down
    lmScore = 0; // Reset last move score
    let rotated = rotateClockwise(board);
    rotated = rotated.map(row => slideRow(row));
    rotated = rotateCntrClockwise(rotated);
    return rotated;
}

// -------------------- Stat Management --------------------

export function getScore(board) { // Function that returns the score of the current board (sum of each merge)
    return score;
}

export function resetScore() { // Function that resets the score
    score = 0;
}

export function getLMScore() { // Function that returns the score of the last move made
    return lmScore;
}

export function getAvgVal(board) { // Function that calculates and returns the average value of filled tiles within the board
    let avgVal = 0;
    let i = 0; // Initialising a counter of filled tiles
    board.forEach((row) =>
        row.forEach((val) => { // For each tile
            if (val != 0) { // If the tile is filled
                avgVal += val; // Increment the running total
                i +=1; // Increment the counter
            }
        })
    );
    avgVal = (avgVal / i).toFixed(2); // Calculate the average, rounded to 2 DP
    return avgVal;
}

export function getHighestVal(board) { // Function that calculates and returns the highest value within the board (if it's greater than the previous highest value)
    board.forEach((row) =>
        row.forEach((val) => { // For each tile
            if (highestVal < val) { // If the current tile's value is greater than the current highest value
                highestVal = val; // Update the highest value
            }
        })
    );
    return highestVal;
}