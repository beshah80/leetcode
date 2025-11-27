var smallestSubarrays = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // We'll track the last positions where each bit appears
    // Since numbers can be up to 10^9, we need 30 bits (2^30 > 10^9)
    const lastPos = new Array(30).fill(-1);
    
    // Process from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Update last positions for all bits in current number
        for (let bit = 0; bit < 30; bit++) {
            if (nums[i] & (1 << bit)) {
                lastPos[bit] = i;
            }
        }
        
        // Find the maximum last position among all bits in maxOr[i]
        // The maxOr[i] is the OR of all unique bits that appear from i to end
        let maxLastPos = i;
        for (let bit = 0; bit < 30; bit++) {
            if (lastPos[bit] !== -1) {
                maxLastPos = Math.max(maxLastPos, lastPos[bit]);
            }
        }
        
        // The smallest subarray is from i to maxLastPos
        answer[i] = maxLastPos - i + 1;
    }
    
    return answer;
};