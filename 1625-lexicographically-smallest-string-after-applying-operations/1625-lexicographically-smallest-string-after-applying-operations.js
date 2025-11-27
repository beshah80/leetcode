/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const visited = new Set();
    let minStr = s;

    const dfs = (cur) => {
        if (visited.has(cur)) return;
        visited.add(cur);
        if (cur < minStr) minStr = cur;

        // Operation 1: Add a to all odd indices
        const arr = cur.split('').map(Number);
        for (let i = 1; i < arr.length; i += 2) {
            arr[i] = (arr[i] + a) % 10;
        }
        dfs(arr.join(''));

        // Operation 2: Rotate by b
        const rotated = cur.slice(-b) + cur.slice(0, -b);
        dfs(rotated);
    };

    dfs(s);
    return minStr;
};
