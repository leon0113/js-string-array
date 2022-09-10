function addNumbers(num1, num2) {
    console.log(arguments[3]);
    const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100);
console.log(sum);