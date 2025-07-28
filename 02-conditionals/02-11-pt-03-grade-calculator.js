// Practice Task 03 : Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

const marks = 65;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
}
else if (marks >= 80 && marks <=89) {
    console.log("Grade B");
}
else if (marks >= 70 && marks <= 79) {
    console.log("Grade C");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Grade D");
}
else {
    console.log("Failed");
}