var countMaxOrSubsets = function(nums) {
    const n = nums.length;
    let maxOr = 0;
    let count = 0;
    
    // Generate all subsets using bitmask
    for (let mask = 1; mask < (1 << n); mask++) {
        let currentOr = 0;
        
        // Calculate OR for current subset
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                currentOr |= nums[i];
            }
        }
        
        // Update maxOr and count
        if (currentOr > maxOr) {
            maxOr = currentOr;
            count = 1;
        } else if (currentOr === maxOr) {
            count++;
        }
    }
    
    return count;
};