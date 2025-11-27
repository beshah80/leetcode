var findClosest = function(x, y, z) {
    const dist1 = Math.abs(x - z);
    const dist2 = Math.abs(y - z);

    if (dist1 < dist2) return 1;
    else if (dist1 > dist2) return 2;
    else return 0;
};
