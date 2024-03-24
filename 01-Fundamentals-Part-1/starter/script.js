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
