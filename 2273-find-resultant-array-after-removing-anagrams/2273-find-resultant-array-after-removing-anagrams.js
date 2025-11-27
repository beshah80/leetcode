/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const res = [];
    
    for (let word of words) {
        const sortedWord = word.split('').sort().join('');
        if (res.length === 0 || sortedWord !== res[res.length - 1].split('').sort().join('')) {
            res.push(word);
        }
    }
    
    return res;
};
