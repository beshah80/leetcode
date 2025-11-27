var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);
    const caseMap = new Map();
    const vowelMap = new Map();
    const vowels = new Set(['a','e','i','o','u']);

    const maskVowels = (word) => 
        word.toLowerCase().split('').map(ch => vowels.has(ch) ? '*' : ch).join('');

    // build maps
    for (let word of wordlist) {
        const lower = word.toLowerCase();
        if (!caseMap.has(lower)) caseMap.set(lower, word);
        const masked = maskVowels(word);
        if (!vowelMap.has(masked)) vowelMap.set(masked, word);
    }

    const res = [];
    for (let q of queries) {
        if (exact.has(q)) {
            res.push(q);
        } else if (caseMap.has(q.toLowerCase())) {
            res.push(caseMap.get(q.toLowerCase()));
        } else {
            const masked = maskVowels(q);
            res.push(vowelMap.get(masked) || '');
        }
    }

    return res;
};
