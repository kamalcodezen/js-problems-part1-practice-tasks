// Write a function to find the longest word in a given string.

// sample-output: Programming

function longestWord(word) {

    let strArray = word.split(" ");

    let bigNums = strArray[0];
    for (let i of strArray) {
        if (i.length > bigNums.length) {
            bigNums = i;
        }
    }
    return bigNums;
}

let longWord = "I am learning Programming to become a programmer";
let result = longestWord(longWord);
console.log(result);