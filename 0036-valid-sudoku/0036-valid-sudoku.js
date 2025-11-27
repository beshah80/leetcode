var isValidSudoku = function(board) {
    const rows = Array(9).fill(0).map(() => new Set());
    const cols = Array(9).fill(0).map(() => new Set());
    const boxes = Array(9).fill(0).map(() => new Set());
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            
            // Skip empty cells
            if (num === '.') continue;
            
            // Check row
            if (rows[i].has(num)) return false;
            rows[i].add(num);
            
            // Check column
            if (cols[j].has(num)) return false;
            cols[j].add(num);
            
            // Check 3x3 box
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(num)) return false;
            boxes[boxIndex].add(num);
        }
    }
    
    return true;
};