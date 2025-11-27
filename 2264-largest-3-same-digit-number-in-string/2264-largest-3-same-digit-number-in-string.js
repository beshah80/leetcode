var largestGoodInteger = function(num) {
    let maxGood = "";

    for (let i = 0; i <= num.length - 3; i++) {
        let substring = num.slice(i, i + 3);
        if (substring[0] === substring[1] && substring[1] === substring[2]) {
            if (substring > maxGood) {
                maxGood = substring;
            }
        }
    }

    return maxGood;
};
