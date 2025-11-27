var findSmallestInteger = function(nums, value) {
    // Count frequencies of remainders
    const freq = new Array(value).fill(0);
    
    for (const num of nums) {
        // Handle negative numbers by adjusting modulo
        let remainder = num % value;
        if (remainder < 0) remainder += value;
        freq[remainder]++;
    }
    
    // Find the smallest mex where we run out of numbers
    for (let mex = 0; ; mex++) {
        const remainder = mex % value;
        if (freq[remainder] === 0) {
            return mex;
        }
        freq[remainder]--;
    }
};