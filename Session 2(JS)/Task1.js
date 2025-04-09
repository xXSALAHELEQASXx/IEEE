/* - Simple Calculator
    
    Write a script that asks the user for two numbers and an operation (`+`, `-`, `*`, `/`). Then, using `if / else if` or `switch`, perform the operation and show the result using `alert()`.
    
    **Concepts covered:**
    
    - `prompt()`
    - `Number()`
    - Arithmetic operators
    - `if / switch`
    - `alert()` */
do{

    let num1 = Number(prompt("Please enter your first number: "));
    let num2 = Number(prompt("Please enter your second number: "));
    let operation = prompt("Please enter your operation: ");
    switch(operation){
        case "+":
        alert(num1 + num2);
        break;
        case "-":
        alert(num1 - num2);
        break;
        case "*":
        alert(num1 * num2);
        break;
        case "/":
        if (num2 === 0) {
            alert("Cannot divide by zero!");
        } else {
            alert(num1 / num2);
        }
        break;
        default:
            alert("Please enter a valid operation");
        }
}
while(num1 == false || isNaN(num1) && !num2 || isNaN(num2));