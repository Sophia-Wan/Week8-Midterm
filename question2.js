const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

/* Grading students scores,
if student receives 86 or < display "Excellent, ${name} has an A"
if student receives between 72- 85 display "Great job!, ${name} has a B"
if student gets 60-72 write "Good effort! ${name} has a C"
if student gets 50-60 write " Needs improvement ${name} has a D"
if student gets 50 < write "Fail! ${name} has an F." */
//determine a proper function name and parameter variable name

function gradingSystem(grade, name) {

   if (grade >= 86 && grade <= 100) {
    console.log(`Excellent! ${name} has an A!`);
   } else if (grade >= 72 && grade <= 85) {
    console.log(`Great work! ${name} has a B!`);
  } else if (grade >= 61 && grade <= 71) {
    console.log(`Good effort! ${name} has a C.`);
  } else if (grade >= 50 && grade <= 60) {
    console.log(`Needs improvement, ${name} has a D.`);
  } else if (grade < 50 && grade >= 0) {
    console.log(`FAIL! ${name} has an F.`);
  
   /* if (grade === 86 + 2) {
      console.log(`Work hard ${name}, youre gonna drop down to a B!`);
  } if (grade === 86-2) {
    console.log(`Youre almost at an A ${name}!`)
  } else if (grade === 71+2) {
    console.log(`Work hard ${name}, youre gonna drop to a C!`);
  } else if (grade === 72-2) {
    console.log(`Youre almost at an B ${name}!`);
  } else if (grade === 60+2) {
    console.log(`Work hard ${name}, youre gonna drop to a D!`);
   } if (grade === 50+2) {
    console.log (`Work hard ${name}, youre gonna fail!`);
   }  else if (grade === 61-2) {
    console.log(`Youre almost at an C ${name}!`);
  } */
  }//write your code here
}

function StartApp(){
  readline.question('Please write your name here to check your grade: ', _name => {
    const name = _name;
    readline.question('Pleae input the percentage you have received on the previous assignment: ', _grade => {

      //call your function here.
      gradingSystem(_grade, _name);
      // readline.close();
      if(_grade !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();