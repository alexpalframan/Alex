let y = prompt("Please choose Rock, Paper or Scissors.");
let x = Math.floor(Math.random() *3)+1; 

if (y=="Rock" && x==1){
    console.log("Draw");
} else if(y=="Rock" && x==2){
    console.log("You lose");
} else if(y=="Rock" && x==3){
    console.log("You win");
} else if (y=="Paper" && x==1){
    console.log("You win");
} else if(y=="Paper" && x==2){
    console.log("Draw");
} else if(y=="Paper" && x==3){
    console.log("You lose");
} else if (y=="Scissors" && x==1){
    console.log("You lose");
} else if(y=="Scissors" && x==2){
    console.log("You win"); 
} else if(y=="Scissors" && x==3){
    console.log("Draw");
} else {
    console.log("error")
}




switch(x){
    case 1:
        console.log("Computer drew Rock");
    break
    case 2:
        console.log("Computer drew Paper");  
    break
    case 3:
        console.log("Computer drew Scissors");
    break
    default:
    console.log("Invalid!")
}



                           