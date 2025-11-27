var numOfUnplacedFruits = function(fruits, baskets) {
    const n = fruits.length;
    const used = new Array(n).fill(false); // Track which baskets are used
    let unplaced = 0;
    
    for (let i = 0; i < n; i++) {
        const fruit = fruits[i];
        let placed = false;
        
        // Look for the leftmost available basket that can hold this fruit
        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruit) {
                // Place the fruit in this basket
                used[j] = true;
                placed = true;
                break;
            }
        }
        
        // If no basket found, increment unplaced count
        if (!placed) {
            unplaced++;
        }
    }
    
    return unplaced;
};