// positive negative numbers
let num1 : number = 60;
let ans;

function positiveNegative() {
    if (num1 > 0) {
        console.log(num1 + " is Positive Number");
    }
    else if (num1 < 0) {
        console.log(num1 + " is Negative Number");
    }
    else {
        console.log(num1 + " is Zero Number");
    }
}

positiveNegative();