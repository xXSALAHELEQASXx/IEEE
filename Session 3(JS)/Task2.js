//Task 2: Student Grades System
let studentName = prompt("Enter your name: ");
let subjects = Number(prompt("Enter the number of subjects: "));
let marks;
let totalmarks = 0;
let average;
let status;
for(let i = 0;i<subjects;i++){
    let subjectName = prompt("Enter the subject name: ");
    marks = Number(prompt("Enter the marks: "));
    totalmarks += marks;
}
average = totalmarks/subjects;

if(average >= 50){
    alert("Congratulations! You passed 🎉");
    status = "Passed";
}
else if(average < 50){
    alert("Sorry, you failed ❌");
    status = "Failed";
}
console.log(`
    ${studentName}
    ${subjects} subjects
    Total Score: ${totalmarks}
    Average: ${average}
    Status: ${status}
    `)