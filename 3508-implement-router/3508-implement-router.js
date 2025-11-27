var Router = function(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.queue = []; // store packets in FIFO order
    this.packetSet = new Set(); // to check duplicates
    this.destMap = new Map(); // destination -> sorted timestamps
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    const key = `${source}|${destination}|${timestamp}`;
    if (this.packetSet.has(key)) return false; // duplicate

    // if memory full, remove oldest packet
    if (this.queue.length === this.memoryLimit) {
        const old = this.queue.shift();
        const oldKey = `${old[0]}|${old[1]}|${old[2]}`;
        this.packetSet.delete(oldKey);
        
        // remove timestamp from destMap
        const arr = this.destMap.get(old[1]);
        arr.shift(); // oldest first
        if (arr.length === 0) this.destMap.delete(old[1]);
    }

    // add new packet
    this.queue.push([source, destination, timestamp]);
    this.packetSet.add(key);

    if (!this.destMap.has(destination)) this.destMap.set(destination, []);
    this.destMap.get(destination).push(timestamp);

    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (this.queue.length === 0) return [];
    const [source, destination, timestamp] = this.queue.shift();
    const key = `${source}|${destination}|${timestamp}`;
    this.packetSet.delete(key);

    // remove timestamp from destMap
    const arr = this.destMap.get(destination);
    arr.shift();
    if (arr.length === 0) this.destMap.delete(destination);

    return [source, destination, timestamp];
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    if (!this.destMap.has(destination)) return 0;
    const arr = this.destMap.get(destination);

    // binary search for lower bound
    let l = 0, r = arr.length;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (arr[m] >= startTime) r = m;
        else l = m + 1;
    }
    const left = l;

    // binary search for upper bound
    l = 0; r = arr.length;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (arr[m] > endTime) r = m;
        else l = m + 1;
    }
    const right = l;

    return right - left;
};
