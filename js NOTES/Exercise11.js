myArray = [1,-5,-3,2,11,23]
let arrayLength = myArray.length
document.write("This is the array:")
document.write("<br>")
document.write(myArray)
document.write("<br>")
//q1
/*
document.write(myArray.length)
*/
//q2
document.write("The Negative Numbers in the array are:")
document.write("<br>")
for(let i=0;i < arrayLength;i++){
    if(myArray[i]<0){
        
        document.write(myArray[i])
        document.write("<br>")
    }
}
document.write("<br>")

// q3 sum
document.write("The sum of the numbers in the array are:")
document.write("<br>")

let sum = 0
for(let j=0;j < arrayLength;j+=1){
  sum += myArray[j]
}
document.write(sum)

//q4


document.write("<br>")
document.write("The max and minimum numbers are")
document.write("<br>")


for(let o=0;o<arrayLength;o++){
    document.write(Math.max(...myArray))
    document.write("<br>")
    document.write(Math.min(...myArray))
    document.write("<br>")
    break
}

//q5
//find second largest element in array
myArray.sort


if(myArray[4]>myArray[3]||myArray[4]<myArray[5]){
    let secondLargest = myArray[4]
    document.write("The second largest number in the array is:")
    document.write("<br>")
    document.write(secondLargest)    
}else{
    document.write("NaN")
}
document.write("<br>")
//q6

const odds = []
const evens = []
document.write("The odds of the array are:")
for(const num of myArray){
    if(num % 2===1){
        odds.push(num)
    } else if(num < 0 || num % 2 ===1){
        odds.push(num)
    }

}
document.write("<br>")
document.write(odds)
document.write("<br>")
document.write("The evens of the array are:")
for(const num of myArray){
    if(num % 2 === 0 ){
        evens.push(num)
    }
}
document.write("<br>")
document.write(evens)

//q7

let newArray = new Array()
for(let i=0;i < arrayLength+1;i++){
    newArray.push(myArray[i])
}
document.write("<br>")
document.write("The New Array is:")
document.write("<br>")
document.write(newArray)
document.write("<br>")
//q8 add an element to the array

let inputUser = prompt("Enter string or number to add the chosen one to the array")
document.write("The array is now as follows:")
document.write("<br>")
if(inputUser=="string"){
    let usersInput = prompt("Enter sumn to add to the array")
    myArray.push(usersInput)
    document.write(myArray)
}else if(inputUser=="number"){
    let usersInputTwo = Number(prompt("enter a number to add to the array"))
    myArray.push(usersInputTwo)
    document.write(myArray)
}
document.write("<br>")
document.write("When the last element of the array is removed it looks as follows:")
document.write("<br>")
//q9  remove element from array    


myArray.pop();

document.write(myArray)
