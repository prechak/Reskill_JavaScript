'use strict';

// function calAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millinial = true; // var is a function scope not block scope
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       const output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millinial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millinial);
//     console.log(output);
//     // console.log(add(2, 3)); // if not strict mode it can use
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Precha';
// calAge(1993);

/////////////////////////////////////////////

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDel(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDel(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProduct);
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/

/////////////////////////////////////////////

/*
console.log(this);

const calcAgeg = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeg(1991);

const calcAgegArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgegArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/////////////////////////////////////////////

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // change 'this' below to 'self' it will work
    // const isMillenial = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // window.firstName it will show matilda
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
