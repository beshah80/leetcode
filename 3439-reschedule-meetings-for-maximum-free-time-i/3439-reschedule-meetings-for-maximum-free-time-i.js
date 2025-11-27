/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    let n = startTime.length;
    // There are n meetings, which create n+1 possible gaps (free time intervals).
    // Gap 0 is between t=0 and the first meeting.
    // Gap i (for 1 <= i < n) is between meeting i-1 and meeting i.
    // Gap n is between the last meeting and t=eventTime.
    let gaps = new Array(n + 1);

    // Calculate initial sizes of all gaps.
    gaps[0] = startTime[0] - 0;
    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];

    // The key insight is that moving a meeting $M_i$ to the left effectively merges 
    // gap $G_i$ into gap $G_{i+1}$, setting $G_i$ to 0. Moving it to the right merges 
    // $G_{i+1}$ into $G_i$.
    // With $k$ moves, we can choose a contiguous block of $k$ meetings and push them 
    // all in one direction. This results in merging $k+1$ adjacent initial gaps into 
    // a single large gap.
    // To maximize the free time, we need to find the maximum sum of any $k+1$ 
    // consecutive gaps.

    let windowSize = k + 1;
    let currentSum = 0;

    // Initialize the sliding window with the first 'windowSize' gaps.
    for (let i = 0; i < windowSize; i++) {
        currentSum += gaps[i];
    }

    let maxFree = currentSum;

    // Slide the window over the rest of the gaps array.
    for (let i = windowSize; i <= n; i++) {
        // Add the new gap entering the window.
        currentSum += gaps[i];
        // Remove the old gap leaving the window.
        currentSum -= gaps[i - windowSize];
        // Update the maximum sum found so far.
        maxFree = Math.max(maxFree, currentSum);
    }

    return maxFree;
};