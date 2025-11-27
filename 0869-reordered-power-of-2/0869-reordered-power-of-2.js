var reorderedPowerOf2 = function(n) {
    // Helper: convert number to a string and count digits
    const countDigits = (num) => {
        const count = Array(10).fill(0);
        for (let digit of num.toString()) {
            count[digit]++;
        }
        return count.join('#'); // make it comparable as a string
    };

    const nCount = countDigits(n);

    // Check all powers of 2 up to 10^9
    for (let i = 0; i < 31; i++) { // 2^30 < 10^9
        if (countDigits(1 << i) === nCount) {
            return true;
        }
    }

    return false;
};
