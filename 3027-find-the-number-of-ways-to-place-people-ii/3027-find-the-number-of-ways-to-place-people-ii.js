var numberOfPairs = function(points) {
    // Sort points by x (ascending), and by y (descending) for same x
    // This ensures when we iterate, Alice comes before Bob in ordering
    points.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return b[1] - a[1]; // For same x, higher y first
    });
    
    let count = 0;
    const n = points.length;
    
    for (let i = 0; i < n; i++) {
        const alice = points[i];
        
        // Track the maximum y-coordinate we've seen for Bob candidates
        let maxBobY = -Infinity;
        
        for (let j = i + 1; j < n; j++) {
            const bob = points[j];
            
            // Check if Bob is to the right and below Alice
            if (bob[0] >= alice[0] && bob[1] <= alice[1]) {
                // Check if this Bob has higher y than any previous valid Bob
                // This ensures no points between Alice and Bob in the rectangle
                if (bob[1] > maxBobY) {
                    count++;
                    maxBobY = bob[1];
                }
            }
        }
    }
    
    return count;
};