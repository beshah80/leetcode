var isOneBitCharacter = function(bits) {
    let i = 0;
    const n = bits.length;
    
    while (i < n - 1) {  // stop before the last bit
        if (bits[i] === 1) {
            i += 2;  // two-bit character
        } else {
            i += 1;  // one-bit character
        }
    }
    
    // If we reach the last bit, it must be a one-bit character
    return i === n - 1;
};
