// Write a function to convert temperature from Celsius to Fahrenheit.

function fahrenheit(cel) {
    let celsius = cel * 9 / 5;
    let far = celsius + 32;
    return far;
}

let temp = 25;
let result = fahrenheit(temp);
console.log(result);


// Write a function to convert temperature from Fahrenheit to Celsius.


function celsius(far) {
    let fahren = far - 32;
    let celsius = fahren * 5 / 9;
    return celsius;
}

let temperature = 30;
let final = celsius(temperature);
console.log(final);

