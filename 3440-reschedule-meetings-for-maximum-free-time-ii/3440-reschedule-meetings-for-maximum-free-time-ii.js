/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    const n = startTime.length;
    
    // 1. Calculate all gaps between meetings
    // There are n meetings, so there are n + 1 gaps.
    const gaps = new Array(n + 1);
    
    gaps[0] = startTime[0];
    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];
    
    // 2. Find the Top 3 largest gaps (value and index)
    // We need indices to ensure we don't pick a gap that is adjacent 
    // to the meeting we are currently trying to move.
    let top3 = []; // Stores objects { val, idx }

    for (let i = 0; i <= n; i++) {
        top3.push({ val: gaps[i], idx: i });
        // Keep only top 3 sorted descending
        top3.sort((a, b) => b.val - a.val);
        if (top3.length > 3) top3.pop();
    }
    
    let maxFree = 0;

    // 3. Iterate through each meeting to see what happens if we move it
    for (let i = 0; i < n; i++) {
        const duration = endTime[i] - startTime[i];
        
        // The space created by removing this meeting (merging left/right gaps)
        const mergedGap = gaps[i] + gaps[i+1] + duration;
        
        // Find the largest valid gap elsewhere to place this meeting
        let m1 = -1; // Largest available
        let m2 = -1; // Second largest available
        
        // Filter top3 to exclude the gaps adjacent to current meeting i
        const available = [];
        for (let k = 0; k < top3.length; k++) {
            if (top3[k].idx !== i && top3[k].idx !== i + 1) {
                available.push(top3[k].val);
            }
        }
        
        if (available.length > 0) m1 = available[0];
        if (available.length > 1) m2 = available[1];

        // Calculate best result for moving meeting i
        let currentResult = 0;

        if (m1 >= duration) {
            // CASE A: We can move the meeting to gap m1.
            // Result is max of:
            // 1. The new big empty space (mergedGap)
            // 2. The remaining space in the target gap (m1 - duration) or m2 (if m2 exists and is larger)
            
            // If we have a second large gap m2 >= duration, we could place the meeting there
            // to preserve m1.
            if (m2 >= duration) {
                currentResult = Math.max(mergedGap, m1);
            } else {
                // We MUST place it in m1 (it's the only one big enough)
                currentResult = Math.max(mergedGap, m1 - duration); 
            }
        } else {
            // CASE B: We cannot move the meeting completely out.
            // We can only slide it within its current merged space.
            // The max gap is simply the sum of adjacent gaps.
            currentResult = gaps[i] + gaps[i+1];
        }

        maxFree = Math.max(maxFree, currentResult);
    }
    
    return maxFree;
};