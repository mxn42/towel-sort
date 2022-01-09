
module.exports = function towelSort (matrix) {
    return matrix ? matrix.map((line, i) => i % 2? line.reverse() : line.slice()).flat() : [];
}

// module.exports = matrix => matrix ? matrix.map((row, i) => row[['slice', 'reverse'][i % 2]]()).flat() : [];
