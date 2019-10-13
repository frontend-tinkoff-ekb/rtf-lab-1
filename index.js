/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    if (array.every((elem) => Number.isInteger(elem) && elem >= 0 && elem <= 9)) {
        let result = array.reduce((stringNum, current) => stringNum + current, '');
        result = +result;
        result += number;

        return result.toString().split('').map((elem) => +elem);
    }

    return null;
}

module.exports = {
    addNumber,
};
