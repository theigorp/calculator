function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    if(y==0) return 'cannot divide with 0';
    return (x/y).toFixed(4);
}

console.log(divide(5,3));