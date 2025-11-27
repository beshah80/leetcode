var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonalSq = 0;
    let maxArea = 0;
    
    for (const [length, width] of dimensions) {
        // Calculate diagonal squared (avoid square root for comparison)
        const diagonalSq = length * length + width * width;
        const area = length * width;
        
        if (diagonalSq > maxDiagonalSq) {
            // Found a rectangle with longer diagonal
            maxDiagonalSq = diagonalSq;
            maxArea = area;
        } else if (diagonalSq === maxDiagonalSq) {
            // Same diagonal length, choose maximum area
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    
    return maxArea;
};