var totalMoney = function(n) {
    const completeWeeks = Math.floor(n / 7);
    const remainingDays = n % 7;
    
    let total = 0;
    
    // Sum for complete weeks
    for (let week = 0; week < completeWeeks; week++) {
        const weekStart = week + 1;
        // Sum of arithmetic sequence: 7 terms, first term = weekStart, last term = weekStart + 6
        const weekSum = 7 * weekStart + 21; // 7*weekStart + (0+1+2+3+4+5+6)
        total += weekSum;
    }
    
    // Sum for remaining days in the last week
    if (remainingDays > 0) {
        const lastWeekStart = completeWeeks + 1;
        // Sum of arithmetic sequence: remainingDays terms, first term = lastWeekStart
        const remainingSum = remainingDays * lastWeekStart + (remainingDays - 1) * remainingDays / 2;
        total += remainingSum;
    }
    
    return total;
};