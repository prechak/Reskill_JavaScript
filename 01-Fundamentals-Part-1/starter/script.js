/*
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Precha");
console.log(23);

// How to style variables
let firstName = "Bob";
let first = "Precha";
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let precha_bob = "PB";
let $function = 27;
// Kind of reserved but still canyou
let name = "Precha";

// Do not do Uppercase first letter
let Person = "Precha";

// Use for no change value
let PI = 3.1415;

let myFirstJob = "Coder"; //better than let job 1 = 'programmer'
let myCurrentJob = "Teacher"; //better than let job2 = 'teacher'

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Precha");

javascriptIsFun = "YES!";

console.log(javascriptIsFun);

// Dynamic typing - Chage new value into same variable
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

// Defined
year = 1991;
console.log(typeof year);

// Error it show object
console.log(typeof null);
*/

/*
// Reassigning allow
let age = 30;
age = 31;
console.log(age);

// Reassigning not allow
const birthYear = 1991;
// birthYear = 1990;
// const job; is not allow it should be defined

// Old ways - look like let it can change value
var job = "programmer";
job = "teacher";

// JavaScript add automatic call scoope - never use this idea
lastName = "Krasaesup";
console.log(lastName);
console.log(typeof lastName);
*/

/*
//Math operators
const now = 2037;
const agePrecha = now - 1993;
const ageSarah = now - 2018;
console.log(agePrecha, ageSarah);
console.log(ageSarah);

console.log(agePrecha * 2, agePrecha / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Precha";
const lastName = "Krasaesup";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // = 99
console.log(x);

// Comparison opeartors
console.log(agePrecha > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2020);
*/

/*
const now = 2037;
const agePrecha = now - 1993;
const ageSarah = now - 2018;

console.log(now - 1993 > now - 2020);
// console.log(25 - 10 - 5); //left to right operations

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (agePrecha + ageSarah) / 2;
console.log(agePrecha, ageSarah, averageAge);
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
line"
);

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚘");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
// NaN is number but not a valid number

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " year old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // String 11
n = n - 1; // Strgin 11 - Number 1 = Number 10
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Precha"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(NaN));

const money = 100;
if (money) {
  console.log(`Don't spend it all ;p`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

/*
const age = 18;
// if have one line no need {}
// if (age === 18) console.log(`You just became an adult :D (Strict)`);
// if (age == 18) console.log(`You just became an adult :D (loose)`);

const favourite = Number(prompt(`What's your favorite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log("Number is not 23 or 7");
}

// if favour difference 23
if (favourite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLincense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLincense && hasGoodVision);
console.log(hasDriversLincense || hasGoodVision);
console.log(!hasDriversLincense); //change true to false

const shouldDrive = hasDriversLincense && hasGoodVision;

// if (hasDriversLincense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLincense && hasGoodVision && isTired);

if (hasDriversLincense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log("Someone else should drive...");
}
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the throphy 🏆`);
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy 🏆`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Both win the trophy`);
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the throphy 🏆`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas win the trophy 🏆`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(`Both win the trophy 🎉`);
} else {
  console.log("No one win the trophy 😭");
}
*/

/*
const day = "friday";

//break is important!
switch (day) {
  case "monday": // day === 'monday'
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record Video`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Write code examples`);
} else if (day === "friday") {
  console.log(`Record Video`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log("Not a valid day");
}
*/

/*
// Expression - produce values
3 + 4;
1991;
true && false && !false;

//Statement - sentence
if (23 > 10) {
  // TO DO SOMETHING
  const str = "23 is bigger"; //23 is bigger is expression
}

const me = "Precha";
console.log(`I'm ${2037 - 1993} years old. ${me}`);
*/

/*
// Ternary Operator
const age = 23;
age >= 18
  ? console.log(`I like to drink wine🍷`)
  : console.log(`I like to drink water💧`);

const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);
*/

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
