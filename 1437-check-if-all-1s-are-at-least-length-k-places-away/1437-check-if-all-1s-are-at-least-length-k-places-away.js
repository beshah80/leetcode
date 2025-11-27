var kLengthApart = function(nums, k) {
    let lastOne = -1; // Position of last 1 found
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (lastOne !== -1 && i - lastOne - 1 < k) {
                return false;
            }
            lastOne = i;
        }
    }
    
    return true;
};