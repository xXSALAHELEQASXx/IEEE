//Task 1
var x = 1;
function test() {
    console.log(x); //undefined
    var x = 5;
    console.log(x); //5
}
test();
console.log(x); //1

//Task 2
function outer() {
    var a = 10;
    function inner() {
        console.log(a); //undefined
        var a = 20;
        console.log(a); //20
    }
    inner();
}
outer();
console.log(a); // not defined

//Task 3
console.log(foo); // undefined
var foo = "Hello";

function sayHi() {
    console.log(foo); // undefined
    var foo = "Hi";
    console.log(foo); //Hi
}
sayHi();
