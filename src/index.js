
module.exports = function towelSort (matrix) {
    return matrix ? matrix.map((line, i) => i % 2? line.reverse() : line.slice()).flat() : [];
}
