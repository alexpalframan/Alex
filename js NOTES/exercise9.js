//q 1
/*
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');


let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
*/
// q2
let factorialChoice = Number(prompt("Enter a number to find the factorial of said number"));
let factorial = 1
let total = 0;
while(factorialChoice>0){
    u = factorialChoice%10
    factorialChoice = Math.floor(factorialChoice/10)

for(let f=1; f <= u ; f++){
    factorial *=f;
}
console.log(factorial) 
total = total+factorial
}
if (total==factorialChoice){
    console.log(total + " is a strong number")
}else{
    console.log(total + " isnt a strong number")
}


































































