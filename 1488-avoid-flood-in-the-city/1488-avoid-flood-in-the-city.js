/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const n = rains.length;
    const ans = new Array(n).fill(1); // default dry lake
    const full = new Map(); // lake -> last full day
    const dryDays = []; // indices of days we can dry
    
    for (let i = 0; i < n; i++) {
        const lake = rains[i];
        if (lake === 0) {
            dryDays.push(i);
        } else {
            if (full.has(lake)) {
                // need to find a dry day after last full
                let idx = binarySearch(dryDays, full.get(lake));
                if (idx === dryDays.length) return []; // no dry day available
                ans[dryDays[idx]] = lake; // dry this lake
                dryDays.splice(idx, 1); // remove used dry day
            }
            full.set(lake, i);
            ans[i] = -1; // rain day
        }
    }
    
    return ans;
};

// binary search: find first element > target
function binarySearch(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > target) right = mid;
        else left = mid + 1;
    }
    return left;
}
