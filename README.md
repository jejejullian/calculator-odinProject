# **Calculator Project**

This is a web-based calculator application built as part of The Odin Project curriculum. It provides basic arithmetic operations and a user-friendly interface, designed to function similarly to a standard calculator.

## **Table of Contents**

- [Assignment Goals](#assignment-goals)
- [Features](#features)
- [Extra Credit](#extra-credit)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Implementation Details](#implementation-details)
- [Known Issues & Fixes](#known-issues--fixes)
- [Contributing](#contributing)
- [License](#license)

## **Features**

- Basic arithmetic operations: Addition, Subtraction, Multiplication, Division.
- Clear (CLR) button to reset the calculator.
- Delete (DEL) button for backspace functionality.
- Percentage (%) button.
- Decimal point (.) input with validation to prevent multiple decimals.
- Keyboard support for numbers, operators, Enter (for =), Backspace, and Escape (for clr).
- Responsive design for various screen sizes.
- Error handling for division by zero.
- Chained operations (e.g., 12 + 7 - 5 evaluates 12 + 7 first, then uses the result 19 for 19 - 5).

## **Technologies Used**

- **HTML5**: For the structure of the calculator.
- **CSS3**: For styling and layout, creating a modern and responsive design.
- **JavaScript (ES6+)**: For all the calculator's logic and interactivity.

## **Live Demo**

You can see a live preview of the calculator here: <https://jejejullian.github.io/calculator-odinProject/>

## **Getting Started**

To get a local copy up and running, follow these simple steps:

1. **Clone the repository (if applicable):**  
    git clone &lt;repository_url&gt;  

2. **Navigate to the project directory:**  
    cd calculator-project  

3. **Open index.html in your web browser.**  
    You can simply double-click the index.html file, or use a live server extension in your code editor (like VS Code's Live Server) for better development experience.

## **Usage**

The calculator functions like a typical arithmetic calculator:

1. **Enter numbers** using the digit buttons or your keyboard.
2. **Select an operator** (+, -, X (for \*), /, %) using the buttons or your keyboard.
3. **Enter the second number.**
4. **Press =** (or Enter on your keyboard) to see the result.
5. Use **clr** (or Escape) to clear the display and reset the calculation.
6. Use **DEL** (or Backspace) to remove the last digit.
7. To perform chained operations (e.g., 10 + 5 - 2), simply enter the first operation, and then continue with the next operator and number. The previous result will automatically become the first number for the new operation.

## **Project Requirements & Implementation Details**

This project adheres to the requirements outlined by The Odin Project:

- **Basic Math Functions:**
  - add(a, b)
  - subtract(a, b)
  - multiply(a, b)
  - divide(a, b)
- **operate(operator, number1, number2) function:** This function takes an operator string and two numbers, then calls the appropriate basic math function.
- **HTML Structure:** A basic HTML page (index.html) with a calculator layout, including buttons for digits, operators, clear, delete, and an = button.
- **Display:** The calculator features a display area, separated into previous-operation (for showing the ongoing expression) and current-operation (for the current number input or result).
- **Populating Display:** JavaScript functions handle populating the display when digit buttons are clicked.
- **Calculator Logic:**
  - Variables (firstNumber, secondNumber, operator, shouldResetDisplay) are used to manage the state of the calculation.
  - The calculateResult() function is triggered when = is pressed, performing the operation and updating the display.
  - Consecutive operator presses are handled, ensuring only the last operator is considered for the next operation without premature evaluation.
  - New digit input after a result clears the display to start a new calculation.

## **Gotchas & Bug Fixes**

The following potential issues were addressed:

- **Single Pair Evaluation:** The calculator correctly evaluates one pair of numbers at a time before proceeding with subsequent operations. For example, 12 + 7 - 5 first calculates 12 + 7 = 19, then uses 19 as the first number for 19 - 5.
- **Rounding Long Decimals:** Results with long decimal places are rounded to two decimal places to prevent display overflow.
- **\= Press Before Full Input:** The calculator prevents issues if = is pressed before a complete operation (two numbers and an operator) is entered.
- **Clear Functionality:** The clr button completely wipes out all existing data and resets the calculator state.
- **Division by Zero:** Attempting to divide by zero displays an "Error: Division by zero!" message and does not crash the calculator.
- **Consecutive Operator Presses:** Pressing an operator button multiple times in a row only registers the last operator for the next calculation, avoiding unintended evaluations.
- **New Calculation After Result:** When a result is displayed, pressing a new digit clears the result and starts a fresh calculation, rather than appending the digit to the previous result.

## **Extra Credit**

The following extra credit features have been implemented:

- **Decimal Input (. button):** Users can input decimal numbers. The . button is disabled if the current number already contains a decimal point.
- **Backspace (DEL button):** Allows users to delete the last entered digit.
- **Keyboard Support:**
  - Numbers (0-9) and decimal (.)
  - Operators (+, -, \*, /)
  - Enter and = for calculation.
  - Backspace for deleting the last digit.
  - Escape for clearing the display.

## **Contributing**

Contributions are welcome! If you have suggestions for improvements or find any bugs, feel free to open an issue or submit a pull request.

## **License**

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
