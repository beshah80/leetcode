var findXSum = function(nums, k, x) {
    const n = nums.length;
    const result = [];
    
    // Process each sliding window
    for (let i = 0; i <= n - k; i++) {
        const subarray = nums.slice(i, i + k);
        
        // Count frequencies
        const freq = new Map();
        for (const num of subarray) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        
        // Convert to array and sort by frequency (desc) then value (desc)
        const sorted = Array.from(freq.entries())
            .sort((a, b) => {
                if (a[1] !== b[1]) return b[1] - a[1]; // Higher frequency first
                return b[0] - a[0]; // Higher value first for ties
            });
        
        // Calculate x-sum
        let sum = 0;
        const elementsToTake = Math.min(x, sorted.length);
        
        for (let j = 0; j < elementsToTake; j++) {
            const [num, count] = sorted[j];
            sum += num * count;
        }
        
        result.push(sum);
    }
    
    return result;
};