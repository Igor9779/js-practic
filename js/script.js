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


// const arr = [2, 5, 6, 2, 8, 2, 3];
// const target = 2;
//     let targetValue = 0;


// const countOccurrences = (arr, target) => {
//     arr.forEach(element => {
//         if (target === element) {
//             targetValue += 1;
//         }
//     });
//     return targetValue;
// };

//     countOccurrences([2, 5, 6, 2, 8, 2, 3], 2);
//     console.log(targetValue);

// ******************************************ClASSES*************************************
// Exercise 1

// Задача про створення класу "Книга":
// Створіть клас "Книга", який має властивості, такі як назва, автор і рік видання.
// Додайте метод, який виводить інформацію про книгу в консоль.

// class Book {
//     constructor({ name, author, year } = {}) {
//         this.name = name;
//         this.author = author;
//         this.year = year;
//     }

//     getBookInfo() {
//         return this;
//     }
// }

// const igor = new Book({name: 'Star Wars', author: 'George Lucas', year: 1997});

// igor.getBookInfo();
//     console.log(igor.getBookInfo());


// Exercise 2

// Задача про наслідування класів:
// Створіть базовий клас "Транспортний засіб" з властивостями, такими як швидкість та кількість пасажирів.
// Створіть підклас "Автомобіль", який успадковує властивості базового класу та має додаткові властивості,
// такі як марка автомобіля і тип палива.

// class Vehicle{
//     constructor({speed, passengerQuantity} = {}) {
//         this.speed = speed;
//         this.passengerQuantity = passengerQuantity;
//     }


// }

// class Car extends Vehicle{
//     constructor({ speed, passengerQuantity, model, typeOfFuel } = {}) {
//         super({speed, passengerQuantity});
//         this.model = model;
//         this.typeOfFuel = typeOfFuel;
//     }
// }

// const typeOfVehicle = new Car({ speed: 90, passengerQuantity: 55, model: 'Audi', typeOfFuel: 95 });
// console.log(typeOfVehicle);
// console.log(typeOfVehicle.typeOfFuel);

// Exercise 3

// Задача про генератор номерів:
// Створіть клас "Генератор номерів", який має метод "генерувати", який повертає випадковий номер.
// Кожний номер повинен складатися з трьох літер, за якими йде десятицифровий номер.

// class Generate {
//     getRandomNumb() {
//         return Math.random()
//     }
// }

// const numbers = new Generate();
// console.log(numbers.getRandomNumb());

// Exercise 4

// Задача про додавання елементів до списку:
// Створіть клас "Список", який має властивість "елементи" (по замовчуванню пустий масив) і метод "додати",
//  який приймає новий елемент і додає його до списку.
// Додайте метод "вивести", який виводить всі елементи списку.

// class List {
//     constructor(elements = []) {
//         this.elements = elements;
//     }
//     getNewEl(item) {
//         this.elements.push(item);
//     }
//     displayAllElements() {
//         console.log(this.elements);
//     }
// }

// const updateList = new List();
// updateList.getNewEl(4);
// updateList.getNewEl(7);
// updateList.getNewEl(9);
// updateList.getNewEl(3);

// updateList.displayAllElements();

// Exercise 5

// Задача про обчислення середнього значення:
// Створіть клас "Середнє значення", який має метод "додати",
//  що приймає числове значення і додає його до масиву чисел.
// Додайте метод "вирахувати", який обчислює середнє значення всіх чисел у масиві.

// class AverageValue {
//     constructor(numbers = []) { 
//         this.numbers = numbers;
//     }

//     add(newValue) {
//         this.numbers.push(newValue);
//     }

//     average() {
//         const sum = this.numbers.reduce((acc, number) => {
//             return acc + number;
//         }, 0);
//         return sum / this.numbers.length;
//     }
// }

// const value = new AverageValue([6, 8, 6, 9, 4, 7]);
// value.add(11);
// value.add(5);
// value.average();

// console.log(value);
// console.log(value.average());
