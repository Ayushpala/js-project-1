// grade calculator
let Grade = 60;

function gradeCalculator() {
    if (Grade >= 90) {
        console.log("You passed with an A Grade");
    }
    else if (Grade >= 75 && Grade < 90) {
        console.log("You passed with an B Grade");
    }
    else if (Grade >= 50 && Grade < 75) {
        console.log("You passed with an C Grade");
    }
    else if (Grade >= 33 && Grade < 50) {
        console.log("You passed with an D Grade");
    }
    else {
        console.log("You are fail in this exam");
    }
}

gradeCalculator();