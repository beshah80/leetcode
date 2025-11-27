/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let n = word.length;
    if (n === 0) return 0;
    
    let res = 1;
    let i = 0;
    
    while (i < n) {
        let j = i + 1;
        while (j < n && word[j] === word[i]) {
            j++;
        }
        let L = j - i;
        if (L >= 2) {
            res += L - 1;
        }
        i = j;
    }
    
    return res;
};
