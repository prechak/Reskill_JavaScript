'use strict';

function calAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millinial = true; // var is a function scope not block scope
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      const output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millinial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millinial);
    console.log(output);
    // console.log(add(2, 3)); // if not strict mode it can use
  }

  printAge();

  return age;
}

const firstName = 'Precha';
calAge(1993);
