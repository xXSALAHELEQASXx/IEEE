//Task1: Hoisting
/* function hoistExample() {
    console.log(a); // undefined
    var a = 10;
  
    function inner() {
      console.log(a); // undefined
      var a = 20;
    }
  
    inner();
    console.log(a); // 10
  }
  
  hoistExample(); */
//--------------------------------------------------------------------------
  //Task2
  
/*
  let h1 = document.getElementById("main-title");
  h1.textContent = "Welcome";

  let par = document.getElementsByClassName("desc")[0];
  par.textContent = "Learning DOM is fun!"

  let link = document.links[0];
  link.setAttribute("href", "https://portfolio-psi-two-81.vercel.app/");
*/
//--------------------------------------------------------------------------
//Task3

let body = document.body;
for(let i = 1; i <= 6; i++){
    let heading = document.createElement(`h${i}`);
    heading.textContent = `This is Heading ${i}`;
    body.appendChild(heading);
}