var totalFruit = function(fruits) {
    const n = fruits.length;
    const basket = new Map(); // To store fruit type -> count in current window
    let left = 0;
    let maxFruits = 0;
    
    for (let right = 0; right < n; right++) {
        // Add current fruit to basket
        const currentFruit = fruits[right];
        basket.set(currentFruit, (basket.get(currentFruit) || 0) + 1);
        
        // If we have more than 2 types of fruits, shrink the window
        while (basket.size > 2) {
            const leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            
            // Remove fruit type if count becomes 0
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            
            left++;
        }
        
        // Update maximum fruits collected
        maxFruits = Math.max(maxFruits, right - left + 1);
    }
    
    return maxFruits;
};