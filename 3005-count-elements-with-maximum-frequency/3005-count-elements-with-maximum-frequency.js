/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freqMap = new Map();
    let maxFreq = 0;

    // Count frequency of each number
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
        maxFreq = Math.max(maxFreq, freqMap.get(num));
    }

    // Sum the counts of elements that have the maximum frequency
    let result = 0;
    for (const [num, count] of freqMap) {
        if (count === maxFreq) result += count;
    }

    return result;
};
