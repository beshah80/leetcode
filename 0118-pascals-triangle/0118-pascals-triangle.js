var generate = function(numRows) {
    if (numRows === 0) return [];
    
    const triangle = [[1]]; // First row is always [1]
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const newRow = [1]; // First element is always 1
        
        // Calculate middle elements
        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        
        newRow.push(1); // Last element is always 1
        triangle.push(newRow);
    }
    
    return triangle;
};