/* Write code with a `for loop` that counts from 1 up to a number entered by the user through `prompt()`. Display each number in the `console.log()`.

**Bonus:**

If the user enters an invalid number or leaves it empty, show an `alert()` saying "Please enter a valid number."

**Concepts covered:**

- `prompt()`
- `isNaN()`
- `for loop`
- `console.log()`
- `alert()` */
let num;

do {
    num = Number(prompt("Enter a number: "));
    if (isNaN(Number(num)) || !num) {
        alert("Please enter a valid number");
    } else {
        for (let i = 1; i < Number(num); i++) {
            console.log(i);
        }
    }
} while (!num || isNaN(Number(num)));