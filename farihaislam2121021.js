
var student1 = prompt ("Enter Your Name");

var marks = parseFloat (prompt("Please Enter Your total Marks"));

var grade;

if (grade >= 90) {
    marks = "A";
}
else if (grade >= 85) {
    marks = "A-";
}
else if (grade >= 80) {
    marks = "B";
}
else if (grade >= 75) {
    marks = "B-";
}
else if (grade >= 70) {
    marks = "C+";
}

else  {
    marks = "F";
}
console.log ("your grade is:", marks);