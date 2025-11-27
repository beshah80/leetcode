var countValidSelections = function(nums) {
    let n = nums.length;
    let ans = 0;

    function simulate(start, dir) {
        const arr = nums.slice(); // copy of nums
        let curr = start;
        let d = dir; // 1 for right, -1 for left

        while (curr >= 0 && curr < n) {
            if (arr[curr] === 0) {
                curr += d;
            } else {
                arr[curr]--;
                d *= -1;
                curr += d;
            }
        }

        // Check if all zeros
        return arr.every(x => x === 0);
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (simulate(i, 1)) ans++; // right
            if (simulate(i, -1)) ans++; // left
        }
    }

    return ans;
};
