var maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Frequency counters
    const vowelFreq = new Map();
    const consonantFreq = new Map();
    
    // Count frequencies
    for (const char of s) {
        if (vowels.has(char)) {
            vowelFreq.set(char, (vowelFreq.get(char) || 0) + 1);
        } else {
            consonantFreq.set(char, (consonantFreq.get(char) || 0) + 1);
        }
    }
    
    // Find maximum vowel frequency
    let maxVowel = 0;
    for (const freq of vowelFreq.values()) {
        maxVowel = Math.max(maxVowel, freq);
    }
    
    // Find maximum consonant frequency
    let maxConsonant = 0;
    for (const freq of consonantFreq.values()) {
        maxConsonant = Math.max(maxConsonant, freq);
    }
    
    return maxVowel + maxConsonant;
};