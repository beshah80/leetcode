var new21Game = function(n, k, maxPts) {
    // Edge cases
    if (k === 0 || n >= k + maxPts) {
        return 1.0;
    }
    
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;
    
    let windowSum = 1.0; // Sum of probabilities in the current window
    let result = 0.0;
    
    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;
        
        if (i < k) {
            windowSum += dp[i];
        } else {
            result += dp[i];
        }
        
        // Remove the element that falls out of the window
        if (i >= maxPts) {
            windowSum -= dp[i - maxPts];
        }
    }
    
    return result;
};