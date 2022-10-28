
//Q1

var userInput = Number(prompt("Enter a number"))

for(let i = 1; i <= userInput; i +=2){
    console.log(i);
}

//Q2

let factorialChoice = Number(prompt("Enter a number to find the factorial of said number"));
let factorial = 1
for(let f=1; f <= factorialChoice ; f++){
    factorial *=f;
}
console.log(factorial)

// Q 3
alert("GUESS THE 8 DIGIT NUMBER GAME")
var myNumber = 97524351
let tries =0

for(; tries<4 ;){
    let userGuess = Number(prompt("Guess the number"))
    if(userGuess==myNumber){
        alert("You win")
        tries=tries+100
    }else{
        alert("WRONG IDIOT")
        tries++
    }
    
}


//q4

let input = Number(prompt("Enter a number"));
let p = 0

for(let u=1; u<=input; u++){
    p=u+p
}
console.log(p)



