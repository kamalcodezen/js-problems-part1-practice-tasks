// You are given an array of numbers. Count how many times the a number is repeated in the array.


// let numbers = [5, 6, 11, 12, 98, 5];

// let repeatedNum = 0;

// for (let i of numbers) {
//     if (i === 5) {
//         repeatedNum++;
//     }
// }
// console.log(repeatedNum);


let numbers = [5, 6, 11, 11, 12, 98, 5];

let repeatedNum = [];
let seen = [];
for (let i of numbers) {
    if (seen.includes(i)) {
        if (!repeatedNum.includes(i)) {
            repeatedNum.push(i);
        }
    }
    else {
        seen.push(i);
    }
}
console.log("single value", repeatedNum);
console.log("same value", seen);