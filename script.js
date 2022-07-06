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
        case '*' || 'X':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            return 'try again';
    }
}

const digits = document.querySelector('.digits');
const displayScreen = document.querySelector('.display-screen');
const operations = document.querySelector('.operations');
const equals = document.querySelector('#equals');

let displayValue1 = 0;//stores current displayValue later used for calculating
let displayValue2 = 0;
let operatorChosen;
let digitClickCount = 0;

digits.addEventListener('click', e => {
    digitClickCount++;

    if(digitClickCount == 1)
    {
        displayScreen.textContent = e.target.textContent;
        displayValue1 = e.target.textContent;
    }
    else if(digitClickCount == 2)
    {
        displayScreen.textContent = e.target.textContent;
        displayValue2 = e.target.textContent;
        digitClickCount = 0;
    }
    
    console.log(`DisplayValue1 = ${displayValue1}`);
    console.log(`DisplayValue2 = ${displayValue2}`);
});

operations.addEventListener('click', e => {
    operatorChosen = e.target.textContent;
    displayValue2 = 0;
    console.log(operatorChosen);
});

equals.addEventListener('click', () => {
    console.log('click');
    let result = operate(operatorChosen, displayValue1, displayValue2);
    displayScreen.textContent = result;
});
