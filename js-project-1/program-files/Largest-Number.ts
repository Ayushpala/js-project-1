// largest numbers among three
let num1 : number = 60;
let num2 : number = 65;
let num3 : number = 35;
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