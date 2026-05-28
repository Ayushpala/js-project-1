// simple intrest calculator
let Amount : number = 1000;
let Intrest : number = 5;
let Time : number = 2;
let ans;

function intrest(){
    let ans = (Amount * Intrest * Time)/100;
    console.log("Your simple intrest is " + ans);
}

intrest();