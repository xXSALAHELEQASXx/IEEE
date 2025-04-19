//Task 1: ATM Machine Simulation
let correctPin = "1234";
let balance = 1000;
let attempts = 0;
let pin;

do {
  pin = prompt("Enter your PIN:");

  if (pin === correctPin) {
    let option;
    do {
      option = prompt("Choose an option: 1. Withdraw || 2. Deposit || 3. Check balance || 4. Exit");

      switch (option) {
        case "1":
          let withdraw = parseFloat(prompt("Enter amount to withdraw:"));
          if (isNaN(withdraw) || withdraw <= 0) {
            alert(" Invalid amount.");
          } else if (withdraw <= balance) {
            balance -= withdraw;
            alert("Withdrawal successful. New balance: " + balance);
          } else {
            alert("Insufficient balance.");
          }
          break;

        case "2":
          let deposit = parseFloat(prompt("Enter amount to deposit:"));
          if (isNaN(deposit) || deposit <= 0) {
            alert("Invalid amount.");
          } else {
            balance += deposit;
            alert(" Deposit successful. New balance: " + balance);
          }
          break;

        case "3":
          alert("Your balance is: " + balance);
          break;

        case "4":
          alert("Thank you for using our ATM. Goodbye!");
          break;

        default:
          alert("Invalid option.");
          break;
      }
    } while (option !== "4");
    break;
  } else {
    attempts++;
    if (attempts < 3) {
      alert("Incorrect PIN. Try again.");
    } else {
      alert("Maximum attempts reached. Card blocked.");
    }
  }
} while (attempts < 3);
