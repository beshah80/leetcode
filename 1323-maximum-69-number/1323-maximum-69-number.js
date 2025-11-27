var maximum69Number = function(num) {
    // Convert the number to a string
    let numStr = num.toString();
    
    // Replace the first '6' with '9'
    numStr = numStr.replace('6', '9');
    
    // Convert back to number
    return parseInt(numStr);
};
