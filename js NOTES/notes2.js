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


// while loop executes a statement
// as long as the statement is true

let count=0;
    while(count<10){
        console.log(count);
        count++; // count= count + 1


    }

// do while loop
// always runs the code at least once

do{
    console.log(count);
    count++
}while(count<20);


// FOR loops
/*
for(initilization; test condition; increment statement){
    CODE IN HERE WILL RUN IF TEST CONDITION IS TRUE

}

INITILIZATION - THIS STEPS EXECUTES FIRST. IT ONLY EXECUTES ONCE. YOU CAN DECLARE AND INITILIZE
A LOOP CONTROL VARIABLE HERE. IT IS OPTIONAL, BUT YOU MUST PUT A SEMI COLON AT THE END ;

TEST CONDITION: IF THE TEST CONDITION IS TRUE THE BLOCK OF CODE EXECUTES, OTHERWISE IT DOES NOT

INCREMENT STATEMENT: AFTER THE BODY OF THE LOOP EXECUTES, CONTROL GOES TO THE INCREMENT STATEMENT WHICH ALLOWS YOU 
TO UPDATE ANY CONTROL VARIABLE VALUES, THIS STATEMENT IS OPTIONAL BUT A SEMI COLON MUST BE AT THE END.


*/

for(let i=0; i<2; i++){
    console.log("Hello", i)
}
// WE GET THE SAME OUTPUT FROM THIS
let j = 0
for(;j<2;j++){
    console.log("Hello", j)
}
// WE GET THE SAME OUTPUT FROM THIS
let k =0
for(;k<2;){
    console.log("Hello", k)
    k++

}

// ARRAYS
/*
the array object allows you to store
 multiple values in a single variable
it stores a fixed size, sequential collection
 of elements of the same or mixed type
*/

// TO CREATE AN ARRAY

let myArray = new Array("apples", "oranges");
let myArray2 = ["apples","oranges"];

/*
TO ACCESS THE ELEMENTS OF AN ARRAY WE USE INDEXING
INDEXING IS WHEN YOU TYPE THE ARRAY NAME FOLLOWED
BY SQUARE BRACKETS THE NUMBER U PUT IN BEWTEEN THE SQUARE BRACKETS 
IN THE NUMBER OF THE ELEMENT YOU WISH TO ACCESS IN THE ARRAY
*/

// ALL ARRAYS START WITH INDEX VALUE 0

document.write(myArray2[0]);//prints apples
document.write(myArray2[1]);//prints oranges

// TO CHANGE AN ARRAY ELEMENT
// USE INDEXING TO LOCATE THE ELEMENT AND THEN
// AN ASSIGNMENT OPERATION TO ASSIGN A NEW VALUE

myArray2[0] = "lemon"
document.write(myArray2[0]);
document.write("<br>")
//very important!!!!!!!!
document.write(myArray2);
myArray2[10] = "test"
document.write(myArray2)

// to add elements to an array you can use the
// push command, they will be pushed on to the 
//end of the array

myArray2.push("Lime")

//to remove the last element from an array you can use the pop command

myArray2.pop(); // this removes the last element

//to create an empty array you can use
// the new Array() command on a pair of empty
// square brackets

let myArray3 = new Array();
let myArray4 = [];

//TO USE A FOR LOOP TO ACCESS THE ARRAY ELEMENTS
//TO ADD ELEMENTS USING A FOR LOOP

for (let i=0; i<10;i++){
    myArray4[i]=i;

}

document.write("<br>")
document.write(myArray4)
document.write("<br>")
document.write(myArray4.length)//tells no of items in array