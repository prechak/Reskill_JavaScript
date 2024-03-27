// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

/* PROBLEM 1
"We work for a company building a smart home theromometer.
 Our most recent task is this: "Given an array of temperators of one day,
calculate the temperature amplitude. Keep in mind that sometimes there
might be a sensor error."
*/

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// How to compute max and min temperators?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperatures array
// - Find minimum value in temperatures array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0]; // Assuming first array is max
  let min = temps[0]; // Assuming first array is min

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement fuctionality twice ? N0! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  // const array1 = ['a', 'b', 'c'];
  // const array2 = ['d', 'e', 'f'];
  // const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0]; // Assuming first array is max
  let min = temps[0]; // Assuming first array is min

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degree celsius: ')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0; // Can not work because all value is no less than zero, 0 is min

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

/*
given an array of forcasted maximum temperatures, the thermometer display a string with these temperatures.

Examples: [17, 21, 23] print "... 17ํC in 1 days. .. 22ํC in 2 days ... 23ํC in 3 days ..."

create a function 'printForecast' which takes in an arrays 'arr' and logs a string like the above to the console

Test data1: [17, 21, 23]
Test data2:[12, 5, -5, 0, 4]
*/

/*
//Self
const printFocecast = function (arr) {
  // let day = 0; use less
  let sum = '';
  for (let i = 0; i < arr.length; i++) {
    sum = sum + ` ... ${arr[i]} ํC in day ${[i + 1]}`;
  }
  return sum;
};

console.log(printFocecast([17, 21, 23]));
*/

/*
// 1) Understanding the problem
// - What is the X days? Answer: index + 1

// 2 Breaking up into sub-problems
// - Transform array into string
// - Transform each element to Stringwith °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in days ${[i + 1]} ... `;
  }
  console.log('... ' + str);
};

printForecast([12, 5, -5, 0, 4]);
*/
