//task1-part1

let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));
let num3 = parseInt(prompt("Enter the third integer: "));

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);

console.log("The maximum value is: " + max);
console.log("The minimum value is: " + min);


//task1-part2

function checkVowelConsonant() {
    let char = prompt("Enter a character:");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
      console.log("Vowel");
    } else {
      console.log("Consonant");
    }
  }
  
  checkVowelConsonant();


  //task1-part3

const num = parseInt(prompt("Enter an integer:"));
for (let i = 1; i <= 12; i++) {
  console.log( num * i );
}


//task1-part4

let userInput = prompt("Enter a number:");
let number = parseInt(userInput);

console.log("Even numbers between 1 and", number, "are:");
for (let ii = 1; ii <= number; ii++) {
  if (ii % 2 === 0) {
    console.log(ii);
  }
}


//task1-part5

let subject1 = parseInt(prompt("Enter marks for sub1:")); 
let subject2 = parseInt(prompt("Enter marks for sub2:")); 
let subject3 = parseInt(prompt("Enter marks for sub3:")); 
let subject4 = parseInt(prompt("Enter marks for sub4:")); 
let subject5 = parseInt(prompt("Enter marks for sub5:")); 

let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 ;
let averageMarks = totalMarks / 5 ;
let percentage = ( totalMarks / 500 ) * 100 ;
console.log( "total maeks :" + totalMarks ) ;
console.log( "average maeks :" + averageMarks ) ;
console.log( "percentage :" + percentage ) ;


//task1-part6


const physicsMarks = parseInt(prompt("Enter Physics marks:"));
const chemistryMarks = parseInt(prompt("Enter Chemistry marks:"));
const biologyMarks = parseInt(prompt("Enter Biology marks:"));
const mathsMarks = parseInt(prompt("Enter Mathematics marks:"));
const computerMarks = parseInt(prompt("Enter Computer Science marks:"));

const totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathsMarks + computerMarks;

const percentage = (totalMarks / 500) * 100;

let grade;
if (percentage >= 90) {
  grade = "Grad A";
} else if (percentage >= 80) {
  grade = " Grad B";
} else if (percentage >= 70) {
  grade = " Grad C";
} else if (percentage >= 60) {
    grade = "Grad D";
} else if (percentage >= 40) {
    grade = "Grad E";
}  else {
  grade = "F";
}


console.log("Total Marks: " + totalMarks + " out of 500");
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);
