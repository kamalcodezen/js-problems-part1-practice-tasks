

function analyzeText(str) {

    if (typeof str !== "string" || str.trim().length === 0) {
        return "Invalid";
    }

    let strArray = str.trim().split(/\s+/);


    let bigWords = strArray[0];
    for (let i of strArray) {
        if (i.length > bigWords.length) {
            bigWords = i;
        }
    }
    let totalWord = strArray.join("").trim().length;

    return {
        longwords: bigWords,
        token: totalWord
    }
}

console.log(analyzeText("Programming is fun"));