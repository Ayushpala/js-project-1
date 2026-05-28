// leap year validator
let Year : number = 2000;
let ans;

function leapYear() {
    if ((Year%4==0 && Year%100!=0)|| Year%400==0) {
        console.log(Year + " is leap year");
    }
    else {
        console.log(Year + " is Not leap year");
    }
}

leapYear();