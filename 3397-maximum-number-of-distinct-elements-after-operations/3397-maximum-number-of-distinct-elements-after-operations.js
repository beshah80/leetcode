var maxDistinctElements = function(nums, k) {
    // Sort the array to process in order
    nums.sort((a, b) => a - b);
    
    let count = 0;
    let lastAssigned = -Infinity;
    
    for (const num of nums) {
        // Calculate the range this number can be assigned to
        const minPossible = Math.max(lastAssigned + 1, num - k);
        const maxPossible = num + k;
        
        // If there's a valid position in the range, assign it
        if (minPossible <= maxPossible) {
            count++;
            lastAssigned = minPossible;
        }
    }
    
    return count;
};