var replaceNonCoprimes = function(nums) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => (a / gcd(a, b)) * b;

    const stack = [];
    for (let num of nums) {
        while (stack.length > 0) {
            let top = stack[stack.length - 1];
            let g = gcd(top, num);
            if (g === 1) break; // coprime
            num = lcm(top, num);
            stack.pop(); // merge
        }
        stack.push(num);
    }

    return stack;
};
