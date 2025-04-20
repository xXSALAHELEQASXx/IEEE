//Task 1: User Info Analyze
let fullName = prompt("Please Enter your Full name: ")
let emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email;
do{
    email = prompt("Please Enter your Email: ")
    if(emailValidation.test(email)){
        console.log("Email is valid")
        console.log(`
             Name: ${fullName.trim()}
             Length of the name: ${fullName.trim().length}
             Reversed NAME: ${fullName.trim().split("").reverse().join("")}
             First word of the name: ${fullName.trim().split(" ")[0]}
             The last 3 characters of the name: ${fullName.trim().slice(-3)}
             `)
    }
    else{
        console.log("Email is not valid, Please Enter a valid Email")
    }
}
while(!emailValidation.test(email))