
module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    matrix = matrix.map(line => line.slice()); // ensure immutability
    matrix.forEach((line, i) => {
        if (i % 2)                             // towel sort
            line.reverse();
    });
    return matrix.flat();
}
