const testCochran = require('cochrans');
const test = [
    [7, 9, 11, 8, 4],
    [9, 7, 8, 6, 5, 7],
    [8, 8, 7, 9, 8]
];
const criterionCochran = testCochran.criterionCochtan(test);
console.log(criterionCochran);