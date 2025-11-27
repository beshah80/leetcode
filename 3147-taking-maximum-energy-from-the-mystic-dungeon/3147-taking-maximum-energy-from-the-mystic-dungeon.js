var maximumEnergy = function(energy, k) {
    const n = energy.length;
    let maxEnergy = -Infinity;
    
    // Process each chain (each remainder group)
    for (let start = 0; start < k; start++) {
        let currentSum = 0;
        
        // Traverse the chain from end to start
        for (let i = n - 1 - ((n - 1 - start) % k); i >= start; i -= k) {
            currentSum += energy[i];
            maxEnergy = Math.max(maxEnergy, currentSum);
        }
    }
    
    return maxEnergy;
};