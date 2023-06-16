///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */


// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];

// fruits.forEach((fruit, index) => fruit.id = index + 1);

// const fruitsOnSale = fruits.map(({ price }) => price * 0.8);

// console.log(fruits);
// console.log(fruitsOnSale);



/******************************************** */
// Задача: Знайдіть найбільше число в заданому масиві.

// const numbers = [3, 8, 2, 1, 5, 4];
// let biggestNumber = numbers[0];

// for (let number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   };
// };

// console.log(biggestNumber);

//************ */ спрощений варіант коду:

// const biggestNumber = Math.max(...numbers);
// console.log(biggestNumber)


// *******************************************
// Задача: Підрахуйте суму парних чисел у заданому масиві.

// const numbers = [1, 2, 3, 4, 5, 6]
// total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   };
// };
// console.log(total);

// ************************************************
// Задача: Перетворити рядок на абревіатуру.


// function getAbbreviate(phrase) {
//   const words = phrase.split(' ');
//   const abr = words.map(word => word.charAt(0).toUpperCase()).join('.');
//   return abr;
// };

// const phrase = "National Aeronautics and Space Administration"
// const abbreviate = getAbbreviate(phrase);
// console.log(abbreviate);


// *********************************************************
// Задача:
//   Напишіть функцію countOccurrences(arr, target),
//   яка приймає масив arr і елемент target в якості вхідних параметрів.
//   Функція повинна повернути кількість входжень елемента target у масив arr.


const arr = [2, 5, 6, 2, 8, 2, 3];
const target = 2;

// const occurrences = countOccurrences(arr, target);
// console.log(occurrences); // Виведе: 3
