var zeroFilledSubarray = function(nums) {
    let total = 0;
    let currentLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currentLength++;
        } else {
            // Process the zero segment we just finished
            if (currentLength > 0) {
                total += currentLength * (currentLength + 1) / 2;
                currentLength = 0;
            }
        }
    }
    
    // Don't forget the last segment if it ends with zeros
    if (currentLength > 0) {
        total += currentLength * (currentLength + 1) / 2;
    }
    
    return total;
};