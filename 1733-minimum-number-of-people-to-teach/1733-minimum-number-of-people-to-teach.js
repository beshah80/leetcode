var minimumTeachings = function(n, languages, friendships) {
    const m = languages.length;
    const langSets = Array(m+1).fill(0).map(() => new Set());

    // Build sets for each user
    for (let i = 0; i < m; i++) {
        for (let l of languages[i]) {
            langSets[i+1].add(l); // users are 1-indexed
        }
    }

    const cannotTalk = [];
    for (let [u, v] of friendships) {
        let common = false;
        for (let l of langSets[u]) {
            if (langSets[v].has(l)) {
                common = true;
                break;
            }
        }
        if (!common) {
            cannotTalk.push([u, v]);
        }
    }

    let minTeach = Infinity;
    for (let lang = 1; lang <= n; lang++) {
        const usersToTeach = new Set();
        for (let [u, v] of cannotTalk) {
            if (!langSets[u].has(lang)) usersToTeach.add(u);
            if (!langSets[v].has(lang)) usersToTeach.add(v);
        }
        minTeach = Math.min(minTeach, usersToTeach.size);
    }

    return minTeach;
};
