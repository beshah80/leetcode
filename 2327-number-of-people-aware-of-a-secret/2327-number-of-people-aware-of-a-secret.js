var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    
    // Day 1: first person discovers the secret
    dp[1] = 1;
    
    for (let day = 1; day <= n; day++) {
        // For each day, people who learned between [day-forget+1, day-delay] can share today
        for (let shareDay = day + delay; shareDay < day + forget && shareDay <= n; shareDay++) {
            dp[shareDay] = (dp[shareDay] + dp[day]) % MOD;
        }
    }
    
    // Sum up people who haven't forgotten by day n
    let total = 0;
    for (let day = Math.max(1, n - forget + 1); day <= n; day++) {
        total = (total + dp[day]) % MOD;
    }
    
    return total;
};