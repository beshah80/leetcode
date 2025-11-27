var canBeTypedWords = function(text, brokenLetters) {
    // Convert broken letters to a set for O(1) lookup
    const brokenSet = new Set(brokenLetters);
    
    // Split text into words
    const words = text.split(' ');
    let count = 0;
    
    // Check each word
    for (const word of words) {
        let canType = true;
        
        // Check if any character in the word is broken
        for (const char of word) {
            if (brokenSet.has(char)) {
                canType = false;
                break;
            }
        }
        
        if (canType) {
            count++;
        }
    }
    
    return count;
};