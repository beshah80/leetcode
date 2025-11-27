var findDiagonalOrder = function(mat) {
    if (!mat || mat.length === 0) return [];
    
    const m = mat.length, n = mat[0].length;
    const result = [];
    let row = 0, col = 0, up = true;

    for (let i = 0; i < m * n; i++) {
        result.push(mat[row][col]);

        if (up) {
            if (col === n - 1) {       // hit last column
                row++;
                up = false;
            } else if (row === 0) {    // hit first row
                col++;
                up = false;
            } else {                    // move up-right
                row--;
                col++;
            }
        } else { // down-left
            if (row === m - 1) {       // hit last row
                col++;
                up = true;
            } else if (col === 0) {    // hit first column
                row++;
                up = true;
            } else {                    // move down-left
                row++;
                col--;
            }
        }
    }

    return result;
};
