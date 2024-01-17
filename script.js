let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.innerHTML = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerHTML = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerHTML = currentInput;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
