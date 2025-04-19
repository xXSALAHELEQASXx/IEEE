//Task 3: Functions Practice — Calculator Function
function calculate(num1, num2, operator){
    if (operator === "+"){
        console.log(num1 + num2);
    }
    else if(operator === "-"){
        console.log(num1 - num2);
    }
    else if(operator === "*"){
        console.log(num1 * num2);
    }
    else if(operator === "/"){
        if(num2 === 0){
            console.log("Cannot divide by zero");
        }
        else{
            console.log(num1 / num2);
        }
    }
    else{
        console.log("Invalid operator");
    }
}
calculate(5, 10, "+");
calculate(5, 10, "-");
calculate(5, 10, "*");
calculate(5, 10, "/");
calculate(5, 0, "/");
calculate(5, 10, "^");