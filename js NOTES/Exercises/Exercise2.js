//Q 1

let userInput = prompt("Enter a number to check if its even or odd")

if (userInput%2==0){
    console.log("Even")

}else{
    console.log("Odd")
}

// Q 2

let numberOne = prompt("Enter the first number");
let numberTwo = prompt("Enter a second number")

if (numberOne>numberTwo){
    console.log(numberOne + " is bigger than " + numberTwo)
}else{
    console.log(numberTwo + " is bigger than " + numberOne)
}

//Q 3

let numeroUno = Number(prompt("Enter a number"));
let numeroDos = Number(prompt("Enter a second number"));
let numeroTres = Number(prompt("Enter a third number"));

if (numeroUno>numeroDos && numeroUno>numeroTres){
    console.log(numeroUno + " is the greatest " );
}else if(numeroDos>numeroUno && numeroDos>numeroTres){
    console.log(numeroDos + " is the greatest ");
}else(numeroTres>numeroUno && numeroTres>numeroDos);{
    console.log(numeroTres + " is the greatest ");
}

// Q 4
// Write a program to check if a triangle is scalene, equaliteral, isosceles
// Equaliteral = THREE SIDES SAME LENGTH
// Scalene = 2/3 SIDES SAME LENGTH
// Isosceles = All sides are different length

let sideOne = Number(prompt("Enter one side of the triangles length"));
let sideTwo = Number(prompt("Enter another side of the triangles length"));
let sideThree = Number(prompt("Enter the final side of the triangle"));

if (sideOne==sideTwo && sideOne==sideThree && sideTwo==sideThree){
    console.log("The triangle is equaliteral");
}else if(sideOne==sideTwo || sideOne==sideThree || sideTwo==sideThree){
    console.log("The triangle is scalene");
}else {
    console.log("The triangle is Isosceles");
}

 
//Q5


let pickNumberTwo = Number(prompt("Enter a number"));
let pickNumberOne = Number(prompt("Enter a second number"));
let pickOperator = prompt("Now, pick an operator from add, subtract, multiply, divison or modulus (TYPE OPERATOR WORD FOR WORD AS IS TYPED IN ALERT)")

if (pickOperator == "add"){
    console.log(pickNumberOne + pickNumberTwo)
} else if (pickOperator == "subtract"){
    console.log(pickNumberOne - pickNumberTwo);
} else if (pickOperator == "multiply"){
    console.log(pickNumberOne * pickNumberTwo);
} else if (pickOperator == "division"){
    console.log(pickNumberOne / pickNumberTwo);
} else if (pickOperator == "modulus"){
    console.log(pickNumberOne % pickNumberTwo);
} else {
    console.log("invalid operator!");
}


