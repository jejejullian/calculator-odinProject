function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    default:
      return "Error: Unknown op";
  }
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}


const previousDisplay = document.getElementById("previous-operation");
const currentDisplay = document.getElementById("current-operation");
const buttons = document.querySelectorAll(".button");

let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldResetDisplay = false;

function clearDisplay() {
  currentDisplay.textContent = "";
  previousDisplay.textContent = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
  shouldResetDisplay = false;
}

function appendNumber(value) {
  if (shouldResetDisplay) {
    currentDisplay.textContent = "";
    shouldResetDisplay = false;
  }
  if (value === "." && currentDisplay.textContent.includes(".")) return;
  currentDisplay.textContent += value;
}

function handleOperatorInput(operatorInput) {
  if (operator === null) {
    firstNumber = parseFloat(currentDisplay.textContent);
    if (isNaN(firstNumber)) return;
    operator = operatorInput;
    previousDisplay.textContent = `${firstNumber} ${operator}`;
    shouldResetDisplay = true;
  } else {
    secondNumber = parseFloat(currentDisplay.textContent);
    if (isNaN(secondNumber)) return;
    let result = operate(operator, firstNumber, secondNumber);
    if (typeof result === "number" && !Number.isInteger(result)) {
      result = result.toFixed(2);
    }
    currentDisplay.textContent = result;
    firstNumber = result;
    operator = operatorInput;
    previousDisplay.textContent = `${firstNumber} ${operator}`;
    shouldResetDisplay = true;
  }
}

function calculateResult() {
  if (operator === null) return;
  secondNumber = parseFloat(currentDisplay.textContent);
  if (isNaN(secondNumber)) return;
  let result = operate(operator, firstNumber, secondNumber);
  if (typeof result === "number" && !Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  currentDisplay.textContent = result;
  previousDisplay.textContent = "";
  firstNumber = result;
  operator = null;
  shouldResetDisplay = true;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "X") value = "*";
    if (value === "clr") {
      clearDisplay();
      return;
    }
    if (value === "DEL") {
      currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
      return;
    }
    if (value === "=") {
      calculateResult();
      return;
    }
    if (value === "%") {
      if (currentDisplay.textContent) {
        let num = parseFloat(currentDisplay.textContent);
        if (!isNaN(num)) {
          currentDisplay.textContent = (num / 100).toString();
        }
      }
      return;
    }
    if (isOperator(value)) {
      handleOperatorInput(value);
      return;
    }
    appendNumber(value);
  });
});

document.addEventListener("keydown", (e) => {
  let key = e.key;

  if (/\d/.test(key) || key === ".") {
    appendNumber(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    handleOperatorInput(key);
  } else if (key === "Enter" || key === "=") {
    calculateResult();
  } else if (key === "Backspace") {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
