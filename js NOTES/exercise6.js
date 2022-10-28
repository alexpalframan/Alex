
//q 1
let number = 1

while(number<=10){
    console.log(number)
    number++
}

//q 2
let even = 0

do{
    console.log(even)
    even+=2
}while(even<=100)

//q 3

let userInput = Number(prompt("Enter a number you want to square"));
let userInputSquare = Number(prompt("Enter the number you want to square BY"));
let result = userInput**userInputSquare

do{
    userInput++
}while(userInput<=result);

console.log(userInput-1)

//q 4
let numberOfRows = Number(prompt("Enter the number of rows u want"))
let count = 1;
let stars = "*"
do{
    console.log(stars);
    stars = stars + "*"
    count++
}while(count<=numberOfRows);

//q 5

let numberOfDigits = Number(prompt("Enter a number"));{
let result = 0
  
    while (numberOfDigits > 0) {
      numberOfDigits = Math.floor(numberOfDigits / 10);
      result++;
    }
  
      console.log(result + " is the number of digits in " + numberOfDigits);
}

//q 6
// number
// digits
// find the sum
// priont the result

let numberFromUser = Number(prompt("Enter a number to FIND THE SUM OF THE DIGITS"));
let resultOfSum = 0;

while (numberFromUser) {
    resultOfSum += numberFromUser % 10;
    numberFromUser = Math.floor(numberFromUser / 10);
}

console.log(resultOfSum + " is the sum of the digits in ur number")
