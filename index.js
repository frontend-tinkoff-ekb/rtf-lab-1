/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let base = 0;
    for(let i = 0; i < array.length; ++i)
    {
        let digit = array[i];
        if(!Number.isInteger(digit) || digit > 9 || digit < 0)
            return null;
        base += Math.pow(10, array.length - i - 1) * digit;
    }
    let resultNumber = base + number, result = [];
    do
    {
        let digit = resultNumber % 10;
        resultNumber -= digit;
        resultNumber /= 10;
        result.push(digit);
    }
    while(resultNumber > 0)
    result.reverse();
    return result;
}

module.exports = {
    addNumber
};