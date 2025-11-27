var smallestNumber = function(n) {
    // Generate numbers with all set bits: 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, ...
    let x = 1;
    
    while (x < n) {
        x = (x << 1) | 1; // Equivalent to x = 2*x + 1
    }
    
    return x;
};