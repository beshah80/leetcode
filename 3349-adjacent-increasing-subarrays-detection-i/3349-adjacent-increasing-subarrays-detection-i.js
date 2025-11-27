var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;
    
    // Check all possible starting positions for the first subarray
    for (let i = 0; i <= n - 2 * k; i++) {
        const firstStart = i;
        const secondStart = i + k;
        
        // Check if both subarrays are strictly increasing
        if (isStrictlyIncreasing(nums, firstStart, k) && 
            isStrictlyIncreasing(nums, secondStart, k)) {
            return true;
        }
    }
    
    return false;
};

// Helper function to check if a subarray is strictly increasing
function isStrictlyIncreasing(nums, start, length) {
    for (let i = start; i < start + length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            return false;
        }
    }
    return true;
}