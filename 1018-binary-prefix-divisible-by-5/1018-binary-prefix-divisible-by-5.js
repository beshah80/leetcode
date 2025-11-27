var prefixesDivBy5 = function(nums) {
    const result = [];
    let current = 0;
    
    for (const bit of nums) {
        current = (current * 2 + bit) % 5;
        result.push(current === 0);
    }
    
    return result;
};