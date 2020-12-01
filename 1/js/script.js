"use strict";

// Интерполяция примеры
const category= 'toys';
console.log(`https://someurl.com/${category}/5`);

const user='Ivan';
alert(`Привет, ${user}`);

// Операторы в JS
// Инкремент и декремент

console.log('arr' + " - object");
console.log(4 + +" - object");
console.log(4 + +"5");

let incr=10,
    decr=10;

// incr++;
// decr--;

console.log(incr++, incr);
console.log(--decr, decr);

// остаток от деления двух чисел %
console.log(5%3);

//сравнение равенство ==

console.log(2*4==8); //true

//строгое сравнение равенства ===

console.log(2*4 === '8'); //false
console.log(2*4 == '8'); //true

//Логическое и && или ||
const isCheked = true,
      isClose = false;

console.log(isCheked && isClose); //false
console.log(isCheked || isClose); //true

//оператор отрицания !
console.log(isCheked && !isClose); //true