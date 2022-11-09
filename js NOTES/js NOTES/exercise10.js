//basic square
document.write("<pre>")
let choice = prompt("type square, hollow square, rhombus or star to print desired shape")
if (choice=="square"){
let userInputLength = Number(prompt("Enter how many rows you want"))
let userInputWidth = Number(prompt("Enter how many stars u want per row"))

for(let length= 0; length<userInputLength; length++){
    for (let width = 0; width<userInputWidth; width++){
    document.write("*" );
    }
    document.write("<br />");
}
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

}else if(choice=="star"){
let starRows = Number(prompt("Enter the number of rows u want in your star"))
let starString = " "
for(let i=1; i<starRows;i++){
    for(let j=starRows; j > i;j--){
        document.write(" ")
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        document.write("*")
      }
      document.write("<br />")
    }
      document.write(starString)
}
document.write("</pre>")