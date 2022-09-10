// var arr = [4, 8, 7, 13, 12]
// Creating variable to store the sum
// var sum = 0;
// // Running the for loop
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);


function vowelsAndConsonants(s) {
    let c = [];
    for (let letter of s) {
        'aeiou'.includes(letter) ? console.log(letter) : c.push(letter);
    } console.log(c.join("\n"))
}
const result = vowelsAndConsonants('javascriptloops');
// console.log(result);

//! type 2



function vowelsAndConsonants(s) {
    let s1 = []
    let s2 = []


    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            s1.push(s[i])
        } else {
            s2.push(s[i])
        }
    }

    s = s1.concat(s2)
    for (let j = 0; j < s.length; j++) {
        console.log(s[j])
    }
}
const result1 = vowelsAndConsonants('javascriptloops');
console.log(result1);
