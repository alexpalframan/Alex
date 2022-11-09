
//q 1
let num = Number(prompt("Enter a number"))
let total = 0;

while(num > 0){
    num = Math.floor(num/10)
    total++;
 }
console.log(total)


//q2
let n = Number(prompt("Enter a number"))

lastDigit = n % 10

while (n >= 10) {
    n /= 10;
}
console.log("first digit is " + Math.round(n))
console.log("last digit is " + lastDigit)


// q 3
/*
1 GET USER INPUT
2 CHANGE USER INPUT TO WORDS
3 PRINT OUTPUT
*/

let userInput = Number(prompt("Enter a number"));
let t = 0
let g = userInput


for(;g>0;){
    t = g%10
    g = Math.floor(g/10)
    if(t==1){
        console.log("one")
    } else if (t==2){
        console.log("two")
    } else if (t==3){
        console.log("three")
    }else if (t==4){
        console.log("four")
    }else if (t==5){
        console.log("five")
    }else if (t==6){
        console.log("six")
    }else if (t==7){
        console.log("seven")
    }else if (t==8){
        console.log("eight")
    }else if (t==9){
        console.log("nine")
    }else{
        console.log("zero")
    }
}



// q 4
// LCM

const num1 = Number(prompt("Enter the first number"))
const num2 = Number(prompt("Enter the second number"))

let min = (num1 > num2) ? num1 : num2;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}

//q 5