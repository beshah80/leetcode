var sortVowels = function(s) {
    // Helper function to check if a character is a vowel
    function isVowel(char) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        return vowels.has(char);
    }
    
    // Step 1: Collect vowels and their positions
    const vowelPositions = [];
    const vowels = [];
    
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            vowelPositions.push(i);
            vowels.push(s[i]);
        }
    }
    
    // Step 2: Sort vowels by ASCII value
    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    // Step 3: Build the result string
    const result = s.split('');
    
    // Replace vowels at their original positions with sorted vowels
    for (let i = 0; i < vowelPositions.length; i++) {
        result[vowelPositions[i]] = vowels[i];
    }
    
    return result.join('');
};