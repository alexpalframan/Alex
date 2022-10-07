console.log("Hello")
// This will print Hello to the console

/*
This is
a multiline
comment
*/

/*

Variables

var a = 10;


let a = 10;


const x = 20;
*/




// 1 a
// a will show 10
let a = 10

console.log(a)

// 2 a
// Changes a to 5 from 10
a = 5
console.log(a)



// 1 b
// x will show 20 but will stay at 20 and wont be able to change
const x = 20;
console.log(x)



// has same value as a but because it is called "bob" it prints it seperately
let bob = 10;
console.log(bob)



//Datatypes

/*
Consists of 
Numbers
Strings
& Booleans
*/

let temp = 10; //Datatype number
console.log(temp)
let temp1 = "10";//Datatype string (text)
console.log(temp1)

/*
All numbers in javascript are floating point numbers
*/

/*
All numbers in javascript must begin with a letter or an underscore.
You cant used a reserved word as a variable name.
reserved word turns blue
*/

// Artithmetic operators

// Addition

console.log(5+5);

console.log("abc"+"def"+"ghi"+"jkl"+"mno"+"pqr"+"stu"+"vwx"+"yz");

// Subtraction
console.log(5-2);

// Multiplication

console.log(9*9);

// Divison

console.log(10/5);

// Exponent (power)

console.log(2**2);

// Increment (adds one before it prints)
let h = 11;
console.log(h++);
console.log(h);

let k= 10;
console.log(++k);

//ASSIGNMENT OPERATORS

//equals=
//this is the simple assignment

let n = 12

//add an assignment +=
n += 12 //this is the same as writing n+n = 12
console.log(n)

//subtract an assignment

n -= 4//this is the same as writing n=n-4
console.log(n)

//multiply and assignment *=
n*=5 //this is the same as writing n=n*5
console.log(n)

//divide and assigment /=

let y = 4;
y/=2; //this is the same as writing y=y/2
console.log(y);

//Modulus and assignment
y%=2; // this is the same as writing y=y%2
console.log(y);


//conditonal operator
/*
the conditial operator value evauluates an expression for the true or false
if true it executes the first statement
otherwise it executes the second statement
*/

let first =10;
let second=12;

console.log(first>second?"True":"False");
//        ^Test Condition^  1      2
//Will come back as false as 10 isnt bigger than 12
//If you change the > to an < it will come back as true because 10<12

        //TYPE OF OPERATOR

let myString = "Hello"
console.log(typeof(myString));

let myNumber=10;
console.log(typeof(myNumber));

        //user input
/*
the prompt() function is used to take input from a user
the default datatype for input is string
to convert the input to a number, wrap the
prompt in a NUMBER() function call
(casting)
*/

let mySecondString = prompt("Enter something");
console.log(mySecondString)

let mySecondNumber = Number(prompt("Enter a number"));
console.log(mySecondNumber)

// if statement

let myAge = 400;
if (myAge > 500?console.log("Your over 500 years old"):console.log("Your are under 500"));


// if else 
/*
if else is also a control statement
if the test condition is true
it executes the code in the block, otherwise
it executes the code in the else block
*/
if (myAge > 500){
    console.log("Your are over 500 years old");
}else{
    console.log("Your are under 500 years old");
}




















































