/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);

    // Check each triplet starting from the largest numbers
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i+1] + nums[i+2]) {
            // Valid triangle found
            return nums[i] + nums[i+1] + nums[i+2];
        }
    }

    // No valid triangle found
    return 0;
};
