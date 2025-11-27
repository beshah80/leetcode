var hasSameDigits = function(s) {
    // Convert string to array of numbers
    let arr = s.split('').map(Number);
    
    // Keep applying operations until only 2 digits remain
    while (arr.length > 2) {
        const newArr = [];
        
        // For each pair of consecutive digits
        for (let i = 0; i < arr.length - 1; i++) {
            const sum = (arr[i] + arr[i + 1]) % 10;
            newArr.push(sum);
        }
        
        arr = newArr;
    }
    
    // Check if the final two digits are equal
    return arr[0] === arr[1];
};