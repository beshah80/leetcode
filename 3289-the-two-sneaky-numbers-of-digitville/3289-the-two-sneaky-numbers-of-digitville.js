var getSneakyNumbers = function(nums) {
    const freq = new Array(nums.length).fill(0);
    const res = [];

    for (let num of nums) {
        freq[num]++;
        if (freq[num] === 2) {
            res.push(num);
        }
    }

    return res;
};
