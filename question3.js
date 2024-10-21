const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."
*/
/* ask for students name, amount of money they have, name of lunch item cost of their lunch,
if the student doesnt have enough money ${name} doesnt have enough to buy ${lunch item}.
if the student has enough money ${name} has enough money to buy ${lunch item}!
*/

//determine a proper function name and parameter variable name
function moneyChecker(studentName, lunchMoney,lunchItem, costOfItem){

  if (lunchMoney >= costOfItem) {
    console.log(`${studentName} has enough money to buy ${lunchItem}`);
  } else if (lunchMoney < costOfItem) {
    console.log(`${studentName}, you dont have enough money to buy ${lunchItem}!`);
  }
  //write your code here
}

function StartApp(){
  readline.question('May I get your name please! ', _name => {
    const studentName = _name;
    readline.question('How much money do you have today? ', _lunchMoney => {
      readline.question('What would you like to buy today? ', _lunchItem => {
        const lunchItem = _lunchItem;
        readline.question('How much does the item cost? ', _itemCost => {

          //call your function here.
          moneyChecker(_name, Number(_lunchMoney), _lunchItem, Number(_itemCost));
          // readline.close();
          if(_itemCost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();