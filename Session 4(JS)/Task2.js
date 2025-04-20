//Task 2: Numbers & Arrays Playground
let grades = [70,84,69,75.6,89.1];
let roundedGrades = []
for(let i = 0; i < grades.length; i++){
    roundedGrades.push(Math.round(grades[i]));
}
console.log(`Original grades: ${grades}`);
console.log(`Rounded grades: ${roundedGrades}`);
roundedGrades.unshift(74);
roundedGrades.push(87);
console.log(`After unshift and push: ${roundedGrades}`);

roundedGrades.shift();
roundedGrades.pop();
console.log(`After shift and pop: ${roundedGrades}`);

if(roundedGrades.includes(89)){
    console.log(`Index of 89: ${roundedGrades.indexOf(89)}`);
}
else{
    console.log(`Index of 89: -1`);
}

console.log(`Highest grade: ${Math.max(...roundedGrades)}`);
console.log(`Lowest grade: ${Math.min(...roundedGrades)}`);
let sum = 0;
for(let i = 0; i < roundedGrades.length; i++){
    sum += roundedGrades[i];
}
let average = sum/roundedGrades.length;
console.log(`Average grade: ${average}`);
