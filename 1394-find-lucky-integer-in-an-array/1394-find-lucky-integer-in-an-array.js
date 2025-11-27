var findLucky = function(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    let maxLucky = -1;
    for (let num in freq) {
        if (parseInt(num) === freq[num]) {
            maxLucky = Math.max(maxLucky, parseInt(num));
        }
    }
    
    return maxLucky;
};
