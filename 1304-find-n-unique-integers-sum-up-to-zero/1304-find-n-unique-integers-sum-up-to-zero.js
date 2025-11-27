var sumZero = function(n) {
    const result = [];
    
    // Add symmetric pairs
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i);
        result.push(-i);
    }
    
    // If n is odd, add 0
    if (n % 2 === 1) {
        result.push(0);
    }
    
    return result;
};