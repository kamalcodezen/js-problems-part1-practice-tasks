
function gonoVote(array) {

    if (!Array.isArray(array)) {
        return "Invalid";
    }
    let haCount = 0;
    let naCount = 0;
    for (let i of array) {
        if (i === "ha") {
            haCount++;
        }
        if (i === "na") {
            naCount++;
        }
    }
    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}

console.log(gonoVote(["ha", "na", "ha", "na"]))
