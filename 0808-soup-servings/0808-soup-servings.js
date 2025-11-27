var soupServings = function(n) {
    if (n >= 4800) return 1.0;
    
    // Convert to servings of 25mL to reduce state space
    const servings = Math.ceil(n / 25);
    const memo = new Map();
    
    function dfs(a, b) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;
        
        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);
        
        // Operations in terms of servings (each serving = 25mL)
        const result = 0.25 * (
            dfs(a - 4, b) +      // (100, 0) = (4, 0) servings
            dfs(a - 3, b - 1) +  // (75, 25) = (3, 1) servings
            dfs(a - 2, b - 2) +  // (50, 50) = (2, 2) servings
            dfs(a - 1, b - 3)    // (25, 75) = (1, 3) servings
        );
        
        memo.set(key, result);
        return result;
    }
    
    return dfs(servings, servings);
};