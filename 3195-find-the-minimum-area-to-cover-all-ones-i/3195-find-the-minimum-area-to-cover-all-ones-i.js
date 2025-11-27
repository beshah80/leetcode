var minimumArea = function(grid) {
    let top = Infinity, bottom = -Infinity, left = Infinity, right = -Infinity;
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                top = Math.min(top, i);
                bottom = Math.max(bottom, i);
                left = Math.min(left, j);
                right = Math.max(right, j);
            }
        }
    }

    return (bottom - top + 1) * (right - left + 1);
};
