const flat = arr => arr.reduce((a, row) => a.concat(row), []);

module.exports = function towelSort (matrix) {
    return matrix ? flat(matrix.map((line, i) => i % 2? line.reverse() : line.slice())) : [];
}

// module.exports = matrix => matrix ? matrix.map((row, i) => row[['slice', 'reverse'][i % 2]]()).flat() : [];
