var finalValueAfterOperations = function(operations) {
    let x = 0;
    
    for (const op of operations) {
        if (op.includes('++')) {
            x++;
        } else if (op.includes('--')) {
            x--;
        }
    }
    
    return x;
};