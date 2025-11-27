var numWaterBottles = function(numBottles, numExchange) {
    let total = 0;
    let empty = 0;
    
    while (numBottles > 0) {
        // Drink all full bottles
        total += numBottles;
        empty += numBottles;
        
        // Exchange empty bottles for new full bottles
        numBottles = Math.floor(empty / numExchange);
        empty = empty % numExchange;
    }
    
    return total;
};