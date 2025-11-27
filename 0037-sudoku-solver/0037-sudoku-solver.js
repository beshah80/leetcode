var solveSudoku = function(board) {
    solve(board);
};

function solve(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                // Try all possible numbers
                for (let num = 1; num <= 9; num++) {
                    const char = num.toString();
                    
                    if (isValid(board, i, j, char)) {
                        board[i][j] = char;
                        
                        // Recursively solve the rest
                        if (solve(board)) {
                            return true;
                        }
                        
                        // Backtrack
                        board[i][j] = '.';
                    }
                }
                return false; // No valid number found
            }
        }
    }
    return true; // All cells filled
}

function isValid(board, row, col, num) {
    // Check row
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === num) return false;
    }
    
    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) return false;
    }
    
    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[boxRow + i][boxCol + j] === num) return false;
        }
    }
    
    return true;
}