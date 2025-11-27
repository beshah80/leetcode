var subarrayBitwiseORs = function(arr) {
    let distinct = new Set();
    let current = new Set();
    
    for (const num of arr) {
        const next = new Set();
        
        // Add the current number itself
        next.add(num);
        
        // For each OR value from previous position, OR with current number
        for (const val of current) {
            next.add(val | num);
        }
        
        // Add all new OR values to the distinct set
        for (const val of next) {
            distinct.add(val);
        }
        
        current = next;
    }
    
    return distinct.size;
};