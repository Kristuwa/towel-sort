// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) {
        return [];
    }
    const newMatrix = matrix.map((item, i, arr) => {
        if (i % 2 === 0) {
            return [...item].sort((a, b) => a - b);
        } else {
            return [...item].sort((a, b) => b - a);
        }
    });
    const arr = newMatrix.flat();
    return arr;
};
