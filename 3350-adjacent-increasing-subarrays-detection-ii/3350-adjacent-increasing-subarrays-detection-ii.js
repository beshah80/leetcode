/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    const inc = Array(n).fill(1);
    
    // Compute length of increasing subarray starting at each index
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            inc[i] = inc[i + 1] + 1;
        }
    }
    
    // Binary search on possible k
    let left = 1, right = Math.floor(n/2), ans = 0;
    
    const canHaveK = (k) => {
        for (let i = 0; i + 2*k <= n; i++) {
            if (inc[i] >= k && inc[i + k] >= k) return true;
        }
        return false;
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canHaveK(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return ans;
};
