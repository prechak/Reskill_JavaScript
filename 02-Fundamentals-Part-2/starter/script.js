"use strict";

/*
let hasDriversLincense = false;
const passTest = true;

if (passTest) hasDriversLincense = true;
if (hasDriversLincense) console.log(`I can drive :D`);

// strict mode reserved word and have a lot more
// const interface = `Audio`;
// const private = 534;
*/

function logger(myName) {
  console.log(`My name is ${myName}`);
}

//  calling / running / invoking fuction
logger("Precha");
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Jiuce with ${apples} apples ${oranges} oranges.`;
  return juice;
}
// Juice must capture somewhere when return in this case is appleJuice
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Use it without capture in any variables
console.log(fruitProcessor(3, 4));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
