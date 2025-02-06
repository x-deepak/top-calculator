

let display_input = "";

let first_operand = null;

let operator = null;

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
    return a / b;
}

function operate(a, op, b) {
    let ans = 0;
    switch (op) {
        case "+": ans = add(a, b);
            break;
        case "-": ans = subtract(a, b);
            break;
        case "*": ans = multiply(a, b);
            break;
        case "/": ans = divide(a, b);
            break;
    }
    return ans;
}

let display_ans = document.querySelector("#ans");

function updateDisplay() {
    display_ans.innerText = display_input;
}

let buttons_container = document.querySelector(".input-buttons");

buttons_container.addEventListener("click", (event) => {
    let operator_str = "+-/*";
    if (event.target.classList.contains("nums")) {
        display_input += event.target.innerText;
        updateDisplay();
    }
    else if (event.target.classList.contains("ops")) {

        if (first_operand === null && display_input !== "") {
            operator = event.target.innerText;
            first_operand = Number(display_input);
            display_input = "";
            updateDisplay();
        }
        else if (first_operand !== null && display_input !== "") {
            let second_operand = Number(display_input);
            first_operand = operate(first_operand, operator, second_operand);
            display_input = "";
            updateDisplay();
            operator = event.target.innerText;
        }
    }
    else if (event.target.classList.contains("dot")) {
        if (!display_input.includes(".")){
        display_input+=".";
        updateDisplay();
        }

    }
    else if (event.target.classList.contains("equal")) {
        if (first_operand===null) return;
        let second_operand = Number(display_input);
        first_operand = operate(first_operand, operator, second_operand);
        if (first_operand==Infinity){
            display_input="ERROR";
            updateDisplay();
            display_input="";
            first_operand = null;
            operator = null;
            return;
        }
        else if (!Number.isInteger(first_operand)) display_input = first_operand.toFixed(2).toString();
        else display_input = first_operand.toString();
        updateDisplay();
        operator = null;
        first_operand = null;

    }
    else if (event.target.classList.contains("clear")) {
        display_input = "";
        first_operand = null;
        operator = null;
        updateDisplay();

    }
    else if (event.target.classList.contains("del")) {
        updateDisplay();
        if (display_input!==""){
            let arr = display_input.split("");
            arr.pop();
            display_input = arr.join("");
            updateDisplay();
        }
    }
}) 