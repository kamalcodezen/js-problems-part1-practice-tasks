// Write a function to count the number of vowels in a string.

let fullName = "kamaluddin";

function countVowel(name) {
    let count = 0;
    for (let i of name) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    return count;
}

let totalVowel = countVowel(fullName);
console.log(totalVowel);