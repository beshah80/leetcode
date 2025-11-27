/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let res = "";
    
    // Handle negative numbers
    if (Math.sign(numerator) !== Math.sign(denominator)) res += "-";
    
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    // Integer part
    const integerPart = Math.floor(numerator / denominator);
    res += integerPart;
    
    let remainder = numerator % denominator;
    if (remainder === 0) return res; // No fractional part

    res += ".";
    const map = new Map(); // remainder -> index in res

    while (remainder !== 0) {
        if (map.has(remainder)) {
            // Recurring detected
            const index = map.get(remainder);
            res = res.slice(0, index) + "(" + res.slice(index) + ")";
            break;
        }
        map.set(remainder, res.length);
        remainder *= 10;
        const digit = Math.floor(remainder / denominator);
        res += digit;
        remainder %= denominator;
    }

    return res;
};
