

let display_input = "";

let first_operand = 0;

let operator = "";

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a -b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function operate(a, op, b){

    let a_num = Number(a);
    let b_num = Number(b);
    let ans = 0;
    switch(op){
        case "+": ans = add(a,b);
            break;
        case "-": ans = subtract(a,b);
            break;
        case "*": ans = multiply(a,b);
            break;
        case "/": ans = divide(a,b);
            break;
    }
    return ans;
}

let display_ans = document.querySelector("#ans");

function updateDisplay(){
    display_ans.innerText = display_input;
}

let buttons_container = document.querySelector(".input-buttons");

buttons_container.addEventListener("click", (event)=>{
    if (event.target.classList.contains("nums")){
        display_input+=event.target.innerText;
        updateDisplay();

    }
})