var maximumGain = function(s, x, y) {
    if (x >= y) {
        return removeSub(s, 'a', 'b', x, 'b', 'a', y);
    } else {
        return removeSub(s, 'b', 'a', y, 'a', 'b', x);
    }
};

function removeSub(s, first, second, firstPoints, otherFirst, otherSecond, otherPoints) {
    let stack = [];
    let total = 0;
    
    for (let ch of s) {
        if (stack.length && stack[stack.length - 1] === first && ch === second) {
            stack.pop();
            total += firstPoints;
        } else {
            stack.push(ch);
        }
    }
    
    let newStack = [];
    for (let ch of stack) {
        if (newStack.length && newStack[newStack.length - 1] === otherFirst && ch === otherSecond) {
            newStack.pop();
            total += otherPoints;
        } else {
            newStack.push(ch);
        }
    }
    
    return total;
}
