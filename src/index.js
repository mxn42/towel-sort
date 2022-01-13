
module.exports = function towelSort (matrix) {
    return matrix ? matrix.map(line => line.slice()).map((line, i) => i % 2 ? line.reverse() : line).flat() : [];
}
