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

/*
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
*/

/*
//Parameter is kind of placeholder and argument is extra value that add in

// Function declaration
function calAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calAge1(1993);

// Function expression
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1991);
console.log(age1, age2);
*/

/*
// Arrow function
const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1993);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retire in ${retirement}`;
};

console.log(yearsUntillRetirement(1991, "Precha"));
console.log(yearsUntillRetirement(1980, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Jiuce with ${applePieces} pieces of apple ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  return retirement;
  // return `${firstName} retire in ${retirement}`;
};

console.log(yearsUntillRetirement(1991, "Precha"));
console.log(yearsUntillRetirement(1950, "Mike"));

// function calAge(birthYear, firstName) {
//   const age = 2037 - birthYear;
//   console.log(`${firstName} is ${age} years old`);
//   return age;
// }

// const age = calAge(1993, "Precha");
*/

/*
const calcAvarage = (a, b, c) => (a + b + c) / 3;
console.log(calcAvarage(3, 4, 5));

// Test1
let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avg})`);
  } else {
    console.log(`No one win...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test2
scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob' ,'Alice']; <- Can not do entire of arrays

const precha = ["Precha", "Krasaesup", 2037 - 1993, "Student", friends];
console.log(precha);
console.log(precha.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay");
// friends.push("Jay"); -> add to the end to the arrays
console.log(friends);

friends.unshift("John"); // -> add to the begining of the arrays
console.log(friends);

// Remeove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // Not is Array is show -1

friends.push(23);
console.log(friends.includes("Steven")); // Check values in the arrays
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(bills, tips, totals);
