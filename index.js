function addNumber(array, number) {
    {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] == "number") {

                if (array[i] < 0 || array[i] > 9) {
                    return null;
                }
            } else {
                return null;
            }
        }

        if (number < 0 || !Number.isInteger(number)) {
            return null;
        }
        let arrayNumber = 0;
        for (let i = 0; i < array.length - 1; i++) {
            arrayNumber += array[i];
            arrayNumber *= 10;
        }
        arrayNumber += array[array.length - 1];
        arrayNumber += number;
        return arrayNumber.toString().split('');
    }
}