'use strict';

////////////////////////////////////////////////
////********** Default Parameters **********////
////////////////////////////////////////////////

/*
const bookings = [];

const createbooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1; //Short circuit (ES5)
  // price = price || 199; //Short circuit return falsy first (ES5)

  // (numPassengers = 1), (price = 199); //ES6

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking('LH123');
createbooking('LH123', 2, 800);
createbooking('LH123', 2);
createbooking('LH123', 5);

//Can NOT SKIPPING use undefined
createbooking('LH123', undefined, 1000);
*/

///////////////////////////////////////////////////////
//* How Passing Arguments Works Value vs. Reference *//
///////////////////////////////////////////////////////

/*
const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2343323534437,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2343323534437) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

///////////////////////////////////////////////////////
//*      Functions Accepting Callback Functions     *//
///////////////////////////////////////////////////////

/*
const oneWord = function (str) {
  return str.replace(/ /g, ''.toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transform string : ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🙌🏻');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

///////////////////////////////////////////////////////
//*      Functions Returning Functions              *//
///////////////////////////////////////////////////////

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey!');
greetHey('Jonas');
greetHey('Precha');

greet('Hello')('Jonas');

// Challenge change to arr function
const Arr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Precha');
*/

///////////////////////////////////////////////////////
//*         The call and apply Methods              *//
///////////////////////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schemedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Corner');

// Call method
book.call(eurowings, 23, 'Sarah Corner');
console.log(eurowings);

book.call(lufthansa, 232, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 582, 'Marry Cooper');
console.log(swiss);

// Apply method kind of the same as call
const fliightData = [583, 'George Cooper'];
book.apply(swiss, fliightData);
console.log(swiss);

book.call(swiss, ...fliightData); // the same as upper

// Bing method
//book.call(eurowings, 23, 'Sarah Corner');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven William');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Precha Krasaesup');
bookEW23('Martha Cooper');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// first argument of bind is .this but in this case we don't care
const addVat = addTax.bind(null, 0.23);
// addVat = addTax(rate, value) => value + value * rate;

console.log(addVat(100));
console.log(addVat(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat(100));
console.log(addVat(23));
