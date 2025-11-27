var kthCharacter = function(k) {
    let len = 1;
    while (len < k) len *= 2;
    
    let shift = 0;
    while (len > 1) {
        if (k > len / 2) {
            k -= len / 2;
            shift++;
        }
        len /= 2;
    }
    
    return String.fromCharCode(97 + (shift % 26));
};
