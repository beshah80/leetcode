var minimumSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // Step 1: Collect all positions of 1s
    const ones = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                ones.push([i, j]);
            }
        }
    }
    
    const totalOnes = ones.length;
    let minArea = Infinity;
    
    // Step 2: Try all possible ways to partition ones into 3 groups
    // We'll use bitmask to represent partitions
    // Since there are at most 30×30 = 900 ones, but actually much less due to constraints
    
    // For small number of ones, we can iterate through all partitions
    // But with 900 ones, 3^900 is too big, so we need a smarter approach
    
    // Alternative: Try all possible horizontal and vertical cuts
    for (let cut1 = 0; cut1 <= m; cut1++) {
        for (let cut2 = cut1 + 1; cut2 <= m; cut2++) {
            // Three horizontal regions: [0, cut1), [cut1, cut2), [cut2, m)
            const regions = [
                { minRow: 0, maxRow: cut1 - 1, minCol: 0, maxCol: n - 1 },
                { minRow: cut1, maxRow: cut2 - 1, minCol: 0, maxCol: n - 1 },
                { minRow: cut2, maxRow: m - 1, minCol: 0, maxCol: n - 1 }
            ];
            
            minArea = Math.min(minArea, calculateMinArea(grid, regions));
        }
    }
    
    for (let cut1 = 0; cut1 <= n; cut1++) {
        for (let cut2 = cut1 + 1; cut2 <= n; cut2++) {
            // Three vertical regions
            const regions = [
                { minRow: 0, maxRow: m - 1, minCol: 0, maxCol: cut1 - 1 },
                { minRow: 0, maxRow: m - 1, minCol: cut1, maxCol: cut2 - 1 },
                { minRow: 0, maxRow: m - 1, minCol: cut2, maxCol: n - 1 }
            ];
            
            minArea = Math.min(minArea, calculateMinArea(grid, regions));
        }
    }
    
    // Also try mixed cuts (2 horizontal + 1 vertical, etc.)
    for (let hCut = 1; hCut < m; hCut++) {
        for (let vCut = 1; vCut < n; vCut++) {
            // Various combinations of mixed cuts
            const combinations = [
                // Top-left, top-right, bottom
                [
                    { minRow: 0, maxRow: hCut - 1, minCol: 0, maxCol: vCut - 1 },
                    { minRow: 0, maxRow: hCut - 1, minCol: vCut, maxCol: n - 1 },
                    { minRow: hCut, maxRow: m - 1, minCol: 0, maxCol: n - 1 }
                ],
                // Top, bottom-left, bottom-right
                [
                    { minRow: 0, maxRow: hCut - 1, minCol: 0, maxCol: n - 1 },
                    { minRow: hCut, maxRow: m - 1, minCol: 0, maxCol: vCut - 1 },
                    { minRow: hCut, maxRow: m - 1, minCol: vCut, maxCol: n - 1 }
                ],
                // Left, top-right, bottom-right
                [
                    { minRow: 0, maxRow: m - 1, minCol: 0, maxCol: vCut - 1 },
                    { minRow: 0, maxRow: hCut - 1, minCol: vCut, maxCol: n - 1 },
                    { minRow: hCut, maxRow: m - 1, minCol: vCut, maxCol: n - 1 }
                ],
                // Top-left, bottom-left, right
                [
                    { minRow: 0, maxRow: hCut - 1, minCol: 0, maxCol: vCut - 1 },
                    { minRow: hCut, maxRow: m - 1, minCol: 0, maxCol: vCut - 1 },
                    { minRow: 0, maxRow: m - 1, minCol: vCut, maxCol: n - 1 }
                ]
            ];
            
            for (const regions of combinations) {
                minArea = Math.min(minArea, calculateMinArea(grid, regions));
            }
        }
    }
    
    return minArea;
};

// Helper function to calculate minimum area for given regions
function calculateMinArea(grid, regions) {
    let totalArea = 0;
    
    for (const region of regions) {
        let minR = Infinity, maxR = -Infinity;
        let minC = Infinity, maxC = -Infinity;
        let hasOne = false;
        
        // Find bounding box of 1s in this region
        for (let i = region.minRow; i <= region.maxRow; i++) {
            for (let j = region.minCol; j <= region.maxCol; j++) {
                if (grid[i][j] === 1) {
                    hasOne = true;
                    minR = Math.min(minR, i);
                    maxR = Math.max(maxR, i);
                    minC = Math.min(minC, j);
                    maxC = Math.max(maxC, j);
                }
            }
        }
        
        if (hasOne) {
            const area = (maxR - minR + 1) * (maxC - minC + 1);
            totalArea += area;
        } else {
            // If a region has no 1s, we can use area 0
            // But we must have exactly 3 rectangles covering all 1s
            // So if a region has no 1s, it's still valid (area 0)
        }
    }
    
    // Check if all 1s are covered
    if (!allOnesCovered(grid, regions)) {
        return Infinity; // Invalid partition
    }
    
    return totalArea;
}

// Helper function to check if all 1s are covered
function allOnesCovered(grid, regions) {
    const m = grid.length;
    const n = grid[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let covered = false;
                for (const region of regions) {
                    if (i >= region.minRow && i <= region.maxRow && 
                        j >= region.minCol && j <= region.maxCol) {
                        covered = true;
                        break;
                    }
                }
                if (!covered) return false;
            }
        }
    }
    return true;
}