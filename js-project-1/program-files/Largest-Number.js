"use strict";
let num1 = 60;
let num2 = 65;
let num3 = 35;
let ans;
function largestNumber() {
    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " is largest among three");
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2 + " is largest among three");
    }
    else {
        console.log(num3 + " is largest among three");
    }
}
largestNumber();
