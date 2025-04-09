/* - Task 3: Identity Confirmation
    
    Create a program that asks the user for their name using `prompt()`.
    
    - If the input is empty or the user clicks cancel, show an `alert()` saying "No name entered."
    - If the name is provided, show a `confirm()` asking: "Are you sure your name is [user's name]?"
    - If the user confirms, print a welcome message in the `console.log()` using a template literal.
    
    **Concepts covered:**
    
    - `prompt()`
    - `confirm()`
    - Template literals
    - `if statement`
    - `console.log()` */
let fName = prompt("Please enter your name: ");

if(fName === null || fName === ""){
    alert("Please enter your name!");
}
else{
    let status = confirm(`Are you sure your name is ${fName}!`);
    if(status){
        console.log(`Welcome ${fName}!`);
    }
}
