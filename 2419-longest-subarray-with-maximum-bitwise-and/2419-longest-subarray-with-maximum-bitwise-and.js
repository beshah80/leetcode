var longestSubarray = function(nums) {
    // Step 1: Find the maximum element
    const maxVal = Math.max(...nums);
    
    // Step 2: Find the longest contiguous sequence of maxVal
    let maxLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxVal) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }
    
    return maxLength;
};