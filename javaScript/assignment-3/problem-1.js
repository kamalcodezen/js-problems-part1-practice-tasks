

function newPrice(prices, disCount) {
    if (typeof prices !== "number" || typeof disCount !== "number" || disCount < 0 || disCount > 100) {
        return "invalid";
    }
    let dis = prices * disCount / 100;
    let price = prices - dis;
    return price.toFixed(3);

}

let prices = 1500;
let disCount = 20;
let result = newPrice(prices, disCount);
console.log(result);