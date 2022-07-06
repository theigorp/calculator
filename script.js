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

//add function for percentages?

function operate(operator, x, y){
    switch(operator)
    {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            return 'try again';
    }
}

const digits = document.querySelector('.digits');
const displayScreen = document.querySelector('.display-screen');

let displayValue = 0;//stores current displayValue later used for calculating

digits.addEventListener('click', e => {
    displayScreen.textContent = e.target.textContent;
    displayValue = e.target.textContent;
    console.log(displayValue);
});
