function add(x, y) {
    return Number(x)+Number(y);
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    if(y==0) return `just don't`;
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
        case 'X':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            return 'error';
    }
}

const digits = document.querySelector('.digits');
const displayScreen = document.querySelector('.display-screen');
const operations = document.querySelector('.operations');
const equals = document.querySelector('#equals');

let displayValue1 = '';//stores current displayValue later used for calculating
let displayValue2 = '';
let operatorChosen;
let operationsCount = 0;
let switchValue = false;

digits.addEventListener('click', e => {
    if(e.target.value == undefined) displayScreen.textContent = 0;
    else
    {
        let commaCount = 0;
        if(switchValue==true)
        {
            displayValue2 += e.target.textContent;
            displayScreen.textContent = displayValue2;
        }
        else 
        {
            if(commaCount == 1)
            {
                displayValue1 += e.target.textContent;
                displayScreen.textContent = displayValue1;
            }
            else if(commaCount >=2)
            {
                displayScreen.textContent = 'error';
            }
            else 
            {
                displayValue1 += e.target.textContent;
                displayScreen.textContent = displayValue1;
            }
        }

        console.log(`DisplayValue1 = ${displayValue1}`);
        console.log(`DisplayValue2 = ${displayValue2}`);
    }
});

operations.addEventListener('click', e => {
    if(e.target.value == undefined) return; //if area outside buttons is clicked - nothing is shown at console
    operationsCount++;//count broji koliko puta se pritisnuo znak operacije
    //ako je veci od dva, kod ispod izracunava rezultat prethodna dva broja
    //i dodeljuje tu vrednost displayValue1 da se koristi za dalje racunanje
    if(operationsCount >= 2)
    {
        let result = operate(operatorChosen, displayValue1, displayValue2);
        console.log(`result is ${result}`);
        displayValue1 = result;
        displayScreen.textContent = result;
    }
    switchValue = true;//kada se pritisne znak operacije prelazi se na dodeljivanje vrednosti displayValue2
    operatorChosen = e.target.textContent;
    displayValue2 = '';//resetuje vrednost nakon klika na znak operacije
    console.log(operatorChosen);
});

equals.addEventListener('click', () => {
    console.log(`operate(${operatorChosen}, ${displayValue1}, ${displayValue2})`);
    let result = operate(operatorChosen, displayValue1, displayValue2);
    console.log(`result is ${result}`);
    displayScreen.textContent = result;
});
