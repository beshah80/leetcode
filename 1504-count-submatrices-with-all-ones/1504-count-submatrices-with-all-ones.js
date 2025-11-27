var numSubmat = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    // Step 1: Precompute heights (consecutive 1s above including current)
    const height = Array(m).fill(0).map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                height[i][j] = (i === 0) ? 1 : height[i-1][j] + 1;
            } else {
                height[i][j] = 0;
            }
        }
    }
    
    let total = 0;
    
    // Step 2: For each row, count submatrices ending at that row
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) continue;
            
            let minHeight = height[i][j];
            
            // Move left and count all submatrices with bottom-right at (i,j)
            for (let k = j; k >= 0; k--) {
                if (mat[i][k] === 0) break;
                
                minHeight = Math.min(minHeight, height[i][k]);
                total += minHeight;
            }
        }
    }
    
    return total;
};