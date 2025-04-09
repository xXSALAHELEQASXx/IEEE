/* - Positive or Negative Number Checker
    
    Create a program that asks the user to enter a number.
    
    - If the number is positive, log "Positive Number".
    - If it's negative, log "Negative Number".
    - If it's zero, log "Zero".
    - If it’s not a valid number, show an alert saying "Please enter a valid number."
    
    **Concepts covered:**
    
    - `prompt()`
    - `Number()`
    - `isNaN()`
    - `if / else if`
    - `console.log()`
    - `alert()`
 */
    let num;

    do {
        let input = prompt("Please enter a number:");
        if (input === null || input === "") {
            alert("Please enter a valid number");
            continue;
        }
    
        num = Number(input);
    
        if (isNaN(num)) {
            alert("Please enter a valid number");
        } else {
            if (num > 0) {
                console.log("Positive Number");
            } else if (num < 0) {
                console.log("Negative Number");
            } else {
                console.log("Zero");
            }
        }
    } while (isNaN(num));