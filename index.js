/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    const newArray = [];
    let helperNum = 0;
    if (array.length === 0) {
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number' || array[i] < 0 || array[i] > 9) {
            return null;
        }
    }
    if (number < 0 || Number.isInteger(number) === false) {
        return null;
    }
    let j = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        helperNum += array[i] * (10 ** j);
        j++;
    }

    helperNum += number;
    let x = helperNum;
    let helperCount = 0;
    while (x >= 1) {
        x /= 10;
        helperCount++;
    }

    for (let i = helperCount - 1; i >= 0; i--) {
        newArray[i] = helperNum % 10;
        helperNum -= helperNum % 10;
        helperNum /= 10;
    }

    return newArray;
    // Решение задачи
}

module.exports = {
    addNumber,
};
