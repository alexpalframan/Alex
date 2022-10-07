let time =  Number(prompt("type a number in which to check if it is am or pm"));

if (time>12 && time<24){
    console.log("The time is " + time+"pm");
} else if (time<=12 && time<24){
    console.log("The time is "+ time+"am");
} else if (time>24) {
    alert("error");
}
