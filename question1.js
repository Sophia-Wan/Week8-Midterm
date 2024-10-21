const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

/* First we want to take in the users input and then compare the password with the input user put in,
if user input is word for word correct type "access granted!"
else if user input doesnt match "access denied!"
else if user input is forgot "here is a hint"
else if user input === reset "Lets reset your account" */

//determine a proper function name and parameter variable name
function inputPassword(userInput, userPassword){

  let reset;
  let forgot;


  if (userInput === userPassword) {
    console.log('Access Granted!');
  } if (userInput === 'forgot' || userInput === 'reset') {
    console.log('The password you have set shouldnt be used, as it will glitch the system!');
 } else if (userPassword === 'forgot') {
    console.log("here is a hint");
} else if (userPassword === 'reset') {
console.log('Lets reset your account!');
} else if (userInput !== userPassword) {
    console.log("Access Denied!");
  }  //write your code here
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question('Please create a password here: ', _input => {
   /* if (_input !== _input[5] || _input < _input[5]) {
      console.log("please enter a password larger than 5 letters!");
      return; 
    } */
    readline.question('Please input the password you have just created: ', _password => {

      //call your function here.
      inputPassword(_input, _password);
      // readline.close();
      if(_password !== "quit") {
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();