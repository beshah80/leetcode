/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let count = 0;
    const n = nums.length;

    // Fix the largest side nums[k]
    for (let k = n - 1; k >= 2; k--) {
        let i = 0, j = k - 1;

        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                // All pairs (i, i+1,..., j-1) with nums[j] form a valid triangle
                count += j - i;
                j--; // move the right pointer
            } else {
                i++; // move the left pointer
            }
        }
    }

    return count;
};
