// bmi calculator
let weight : number = 66;
let height1 : number = 1.75;
let height2 : number = 1.75;
let ans;

function bmi(){
    let ans = weight/(height1 * height2);
    console.log("Your bmi is " + ans);
}

bmi();