"use strict";
let totalAmount = 1000;
let discountPercentage = 10;
let ans;
function discount() {
    let ans = (totalAmount * discountPercentage) / 100;
    console.log("Your discount amount is " + ans + "₹");
}
discount();
