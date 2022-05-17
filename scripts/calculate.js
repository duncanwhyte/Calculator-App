const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-reset]");
const deleteNumberButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const DISPLAY_RESULT = "0";

const ADDITION = "+";
const MULTIPLICATION = "X";
const DIVISION = "÷";
const SUBTRACTION = "-";

/// Gets the number of the display whatever the theme is.
let currentResult = document.querySelectorAll(
    ".current-result__1,.current-result__2,.current-result__3"
);

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

/// Regex expression that combined with the test function checks for only digits in a string.
let re = /^[0-9]*$/;

const updateDisplay = (e) => {
    let numberClicked = e.target;
    /// The number buttons must be clicked other wise this function terminates.
    if (
        !numberClicked.classList.contains("theme-1__buttons") &&
        !numberClicked.classList.contains("theme-2__buttons") &&
        !numberClicked.classList.contains("theme-3__buttons")
    ) {
        return;
    }

    if (
        numberClicked.innerHTML === "0" &&
        currentResult[0].innerHTML === DISPLAY_RESULT
    ) {
        return;
    }

    /// When a operator isn't chosen the numbers clicked will be the first number.
    if (currentOperator === "") {
        firstNumber += numberClicked.innerHTML;
        currentResult[0].innerHTML = firstNumber;
    }
    /// Otherwise the numbers clicked will the second number
    else {
        secondNumber += numberClicked.innerHTML;
        currentResult[0].innerHTML = secondNumber;
    }
};

const storeOperation = (e) => {
    let operator = e.target.innerHTML;
    switch (operator) {
        case ADDITION:
            currentOperator = ADDITION;
            currentResult[0].innerHTML = DISPLAY_RESULT;
            break;
        case MULTIPLICATION:
            currentOperator = MULTIPLICATION;
            currentResult[0].innerHTML = DISPLAY_RESULT;
            break;
        case DIVISION:
            currentOperator = DIVISION;
            currentResult[0].innerHTML = DISPLAY_RESULT;
            break;
        case SUBTRACTION:
            currentOperator = SUBTRACTION;
            currentResult[0].innerHTML = DISPLAY_RESULT;
            break;
        default:
            return;
    }
};

const clearAllNumbers = () => {
    currentResult[0].innerHTML = DISPLAY_RESULT;
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
};

const deleteNumber = () => {
    let newDisplayedResult = currentResult[0].innerHTML.slice(0, -1);

    if (
        currentResult[0].innerHTML.length === 1 &&
        re.test(newDisplayedResult)
    ) {
        currentResult[0].innerHTML = DISPLAY_RESULT;
        firstNumber = "";
        return;
    }

    if (firstNumber !== "" && currentOperator !== "") {
        secondNumber = newDisplayedResult;
        currentResult[0].textContent = newDisplayedResult;
    } else {
        firstNumber = newDisplayedResult;
        currentResult[0].textContent = newDisplayedResult;
    }
};

const calculateResult = (num1, num2) => {
    let newResult;
    num1 = parseFloat(firstNumber);
    num2 = parseFloat(secondNumber);
    switch (currentOperator) {
        case ADDITION:
            newResult = num1 + num2;
            break;
        case MULTIPLICATION:
            newResult = num1 * num2;
            break;
        case DIVISION:
            newResult = num1 / num2;
            break;
        case SUBTRACTION:
            newResult = num1 - num2;
            break;
    }
    currentResult[0].innerHTML = newResult;
    /// Setting the operator back to normal so a new calculation can occur.
    currentOperator = "";
    firstNumber = newResult;
    secondNumber = "";
};

numberButtons.forEach((number) => {
    addEventListener("click", updateDisplay);
});
operationButtons.forEach((element) => {
    addEventListener("click", storeOperation);
});
allClearButton.addEventListener("click", clearAllNumbers);
deleteNumberButton.addEventListener("click", deleteNumber);
equalsButton.addEventListener("click", calculateResult);
