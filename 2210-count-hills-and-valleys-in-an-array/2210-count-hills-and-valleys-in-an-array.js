var countHillValley = function(nums) {
    // Step 1: Remove consecutive duplicates
    const compressed = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            compressed.push(nums[i]);
        }
    }
    
    // Step 2: Count hills and valleys
    let count = 0;
    for (let i = 1; i < compressed.length - 1; i++) {
        const left = compressed[i - 1];
        const current = compressed[i];
        const right = compressed[i + 1];
        
        // Check if it's a hill (current > both neighbors)
        if (current > left && current > right) {
            count++;
        }
        // Check if it's a valley (current < both neighbors)
        else if (current < left && current < right) {
            count++;
        }
    }
    
    return count;
};