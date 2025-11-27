var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    
    return spells.map(spell => {
        const minPotion = Math.ceil(success / spell);
        
        // Use binary search to find insertion point
        let left = 0, right = m;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] < minPotion) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return m - left;
    });
};