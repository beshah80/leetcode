var minScoreTriangulation = function(values) {
    const n = values.length;
    
    // Create DP table
    const dp = Array(n).fill(0).map(() => Array(n).fill(0));
    
    // Fill the table diagonally
    for (let len = 2; len < n; len++) {
        for (let i = 0; i + len < n; i++) {
            const j = i + len;
            dp[i][j] = Infinity;
            
            // Try all possible vertices k between i and j to form triangle (i, k, j)
            for (let k = i + 1; k < j; k++) {
                const score = dp[i][k] + dp[k][j] + values[i] * values[k] * values[j];
                dp[i][j] = Math.min(dp[i][j], score);
            }
        }
    }
    
    return dp[0][n - 1];
};