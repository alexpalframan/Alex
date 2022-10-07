// 05/10/22

//Logical Operators
/*
These test for True and False conditions
*/

//Logical AND (&&)
// Returns TRUE if both operands are TRUE

let a = true;
let b = true;
console.log(a && b) // Will print true to the console
                    // as both a and b are true
b = false;
console.log(a && b)// Will print false to the console
                    // a and b are not BOTH true


let firstNumber = 10;
let secondNumber = 20;
if((firstNumber > 5)&&(secondNumber>15)){
    console.log("The first number is bigger than 5 and the second number is bigger than 15");
} else {
    console.log("One of the expressions failed the test");
}

/*
Logical OR (||)/ if either c or d is true it is all true
*/

c = true;
d = false;

console.log(c || d);

/*
Logical Not (!) - reverses the result if true becomes false
*/

console.log(!(c));


// SWITCH STATEMENT

let myVar = "A";

switch(myVar){
case "A":
    console.log("you got an A");
    break;
case "B":
    console.log("you got a B");
    break;
default:
    console.log("Grade not recognised");
}
