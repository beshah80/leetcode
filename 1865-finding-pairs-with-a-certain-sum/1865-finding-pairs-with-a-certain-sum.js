var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freq2 = new Map();
    for (let num of nums2) {
        this.freq2.set(num, (this.freq2.get(num) || 0) + 1);
    }
};

FindSumPairs.prototype.add = function(index, val) {
    let oldVal = this.nums2[index];
    this.freq2.set(oldVal, this.freq2.get(oldVal) - 1);
    if (this.freq2.get(oldVal) === 0) this.freq2.delete(oldVal);
    
    this.nums2[index] += val;
    let newVal = this.nums2[index];
    this.freq2.set(newVal, (this.freq2.get(newVal) || 0) + 1);
};

FindSumPairs.prototype.count = function(tot) {
    let res = 0;
    for (let num of this.nums1) {
        let complement = tot - num;
        if (this.freq2.has(complement)) {
            res += this.freq2.get(complement);
        }
    }
    return res;
};
