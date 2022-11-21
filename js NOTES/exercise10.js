
//basic square
document.write("<pre>")
let choice = prompt("type square, hollow square, rhombus or diagonal square to print desired shape")
if (choice=="square"){
let userInputLength = Number(prompt("Enter how many rows you want"))
let userInputWidth = Number(prompt("Enter how many stars u want per row"))

for(let length= 0; length<userInputLength; length++){
    for (let width = 0; width<userInputWidth; width++){
    document.write("*" );
    }
    document.write("<br />");
}
document.write("SQUARE")
} else if(choice=="hollow square"){
let rows = Number(prompt("Enter the number of rows/columns you want"))
let string = ""

for(let i=0; i < rows;i++){
    for(let k=0; k < rows; k++){
        if(i === 0 || i === rows - 1){
            document.write("*")
            
        }else {
            if(k === 0 || k === rows - 1) {
              document.write("*")
              
            }
            else {
                document.write(" ")
            }
          }
    }
    document.write("<br />")
    document.write(string)
}
document.write("HOLLOW SQUARE")
} else if(choice == "rhombus"){
// rhombus pattern spaces correlates to the number of stars in a row - 1
let rhombusRows = Number(prompt("Enter the amount of rows you want in your lil rhombus"));
let rhombusString = ""
for(let i=0; i < rhombusRows; i++){
    for(let k=0; k < rhombusRows - i; k++){
        document.write(" ")
    }for (j = 1; j <= rhombusRows; j++){
        document.write("*")
    } 
    document.write("<br />")
    document.write(rhombusString)
    
}
document.write("RHOMBUS")
}else if(choice="diagonal square"){
let diagonalRows = Number(prompt("Enter the amount of rows/columns u want in your diagonal square"))

for(let i=0 ; i < diagonalRows;i++){
    
    for(let j=0; j < diagonalRows;j++){
        if (i == 0 || j == 0 || i == j || i == diagonalRows - 1 || j == diagonalRows - 1 || i + j == diagonalRows - 1){
                    document.write("*");
                    
                }
                else
                    document.write(" ");
            }
            document.write("<br />") 
         
    }
    
}else{
    
}

document.write("</pre>")
