/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    const count = new Map();
    for (const p of power) {
        count.set(p, (count.get(p) || 0) + p);
    }
    
    const vals = Array.from(count.keys()).sort((a,b) => a-b);
    const dp = [];
    
    for (let i = 0; i < vals.length; i++) {
        const take = count.get(vals[i]);
        
        // Find last non-conflicting index
        let prevIndex = i - 1;
        while (prevIndex >= 0 && vals[prevIndex] >= vals[i] - 2) prevIndex--;
        
        const takeVal = take + (prevIndex >= 0 ? dp[prevIndex] : 0);
        const skipVal = i > 0 ? dp[i-1] : 0;
        
        dp[i] = Math.max(skipVal, takeVal);
    }
    
    return dp[dp.length - 1];
};
