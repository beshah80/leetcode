/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    const n = nums.length;

    // Helper to compute factorial modulo 10 (actually, we only need combinations)
    const comb = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        comb[i][0] = 1;
        comb[i][i] = 1;
        for (let j = 1; j < i; j++) {
            comb[i][j] = (comb[i-1][j-1] + comb[i-1][j]) % 10;
        }
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result = (result + nums[i] * comb[n-1][i]) % 10;
    }

    return result;
};
