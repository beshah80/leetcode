var largestTriangleArea = function(points) {
    let maxArea = 0;
    const n = points.length;
    
    // Try all combinations of 3 points
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const area = calculateArea(points[i], points[j], points[k]);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    
    return maxArea;
};

function calculateArea(A, B, C) {
    const [x1, y1] = A;
    const [x2, y2] = B;
    const [x3, y3] = C;
    
    // Shoelace formula
    const area = Math.abs(
        x1 * (y2 - y3) + 
        x2 * (y3 - y1) + 
        x3 * (y1 - y2)
    ) / 2;
    
    return area;
}