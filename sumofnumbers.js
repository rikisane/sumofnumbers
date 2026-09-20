"use strict";
function sumFor(numbers) {
    let total = 0; // retnru sum of all nums 
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total;
}
function sumWhile(numbers) {
    let total = 0; // same thing but with while-loop
    let i = 0;
    while (i < numbers.length) {
        total += numbers[i]; // till all nums added
        i += 1;
    }
    return total;
}
function sumRecursion(numbers) {
    // base case
    if (numbers.length === 0) { // same thing but with recursion 
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
} // add first num to remaining sum 
function sumTheFunctionalWay(numbers) {
    // reduce adds all values into on total.
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
