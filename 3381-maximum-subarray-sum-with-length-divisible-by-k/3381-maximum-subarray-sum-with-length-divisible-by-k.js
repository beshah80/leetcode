var maxSubarraySum = function(nums, k) {
    let n = nums.length;
    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let minPrefix = new Array(k).fill(Infinity);
    minPrefix[0] = 0;

    let maxSum = -Infinity;

    for (let i = 1; i <= n; i++) {
        let mod = i % k;

        if (minPrefix[mod] !== Infinity) {
            maxSum = Math.max(maxSum, prefix[i] - minPrefix[mod]);
        }

        minPrefix[mod] = Math.min(minPrefix[mod], prefix[i]);
    }

    return maxSum;
};
