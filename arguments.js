function addNumbers(num1, num2) {
    // console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 67);
console.log(sum);



function getFullName(firstName, lastName) {
    let fullName = ' ';
    for (const namePart of arguments) {
        fullName = fullName + namePart + ' ';
    }
    return fullName;
}
const name = getFullName('Tahjib', 'Hossain', 'Leon');
console.log(name);