// const test = [
//     [7, 9, 6, 8, 4],
//     [9, 7, 8, 6, 5],
//     [8, 8, 7, 9, 8]
// ];

function criterionCochtan(array) {
    const dispresion = [];
    array.forEach(element => {
        let averageValue = 0;
        let deviation = 0;
        averageValue = element.reduce((acc, el) => acc + el, 0) / element.length;
        deviation = element.reduce((acc, el) => acc + Math.pow(el - averageValue, 2), 0) / element.length;
        dispresion.push(deviation);
    });

    const criterion = Math.round((Math.max(...dispresion) / dispresion.reduce((acc, el) => acc + el)) * 1000) / 1000;
    return criterion;
}

module.exports = { criterionCochtan };