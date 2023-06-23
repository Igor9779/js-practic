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

// *******************МЕТОДИ МАСИВІВ/ОБЬЕКТІВ*****************

// EXERCISE 1
// Задача: Обернути масив
// Опис: Напишіть функцію, яка приймає масив і повертає новий масив,
// в якому елементи розташовані у зворотному порядку.

// const fnA = function (array) {
//     return array.reverse()
// };

// const fnA = array => array.reverse();

// fnA([1, 2, 3, 4, 5]);
// console.log(fnA([1, 2, 3, 4, 5]));


// EXERCISE 2
// Задача: Фільтрувати парні числа
// Опис: Напишіть функцію, яка приймає масив чисел і повертає новий масив,
// в якому зберігаються тільки парні числа.

// const getPairedNum = numbers => [...numbers].filter(number => number % 2 === 0);

// getPairedNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(getPairedNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// EXERCISE 3
// Задача: Об'єднати масиви
// Опис: Напишіть функцію, яка об'єднує два масиви в один.

// const joinArr = (arr1, arr2) => arr1.concat(arr2);

// joinArr([1, 2, 3], [4, 5, 6]);
// console.log(joinArr([1, 2, 3], [4, 5, 6]));


// EXERCISE 4
// Задача: Обчислити суму чисел
// Опис: Напишіть функцію, яка приймає масив чисел і повертає суму всіх чисел.

// const getTotal = array => array.reduce((acc, number) => {
//     return acc + number
// }, 0);

// getTotal([1, 2, 3, 4, 5]);
// console.log(getTotal([1, 2, 3, 4, 5]));


// EXERCISE 5
// Задача: Видалити дублікати
// Опис: Напишіть функцію, яка видаляє всі дублікати з масиву і повертає новий масив з унікальними елементами.

// const removeDublicate = numbers => numbers.filter((number, index, array) => array.indexOf(number) === index);

//     removeDublicate([1, 2, 3, 4, 3, 2, 1, 5]);
//     console.log(removeDublicate([1, 2, 3, 4, 3, 2, 1, 5]));

// EXERCISE 6
// Задача: Отримати ключі об'єкта
// Опис: Напишіть функцію, яка приймає об'єкт і повертає масив, що містить всі ключі цього об'єкта.

// const getKeys = obj => Object.keys(obj);

// getKeys({ name: 'John', age: 30, city: 'New York' });
// console.log(getKeys({ name: 'John', age: 30, city: 'New York' }));


// EXERCISE 7
// Задача: Отримати значення об'єкта
// Опис: Напишіть функцію, яка приймає об'єкт і повертає масив, що містить всі значення цього об'єкта.

// const getValues = obj => Object.values(obj);

// getValues({ name: 'John', age: 30, city: 'New York' });
// console.log(getValues({ name: 'John', age: 30, city: 'New York' }));

// EXERCISE 8
// Задача: Перевірити наявність ключа
// Опис: Напишіть функцію, яка перевіряє, чи є вказаний ключ у об'єкті.

// const getHasProp = (obj, keys) => obj.hasOwnProperty(keys);

// getHasProp({ name: 'John', age: 30, city: 'New York' }, 'city');
// console.log(getHasProp({ name: 'John', age: 30, city: 'New York' }, 'city'));


// EXERCISE 9
// Задача: Об'єднати об'єкти
// Опис: Напишіть функцію, яка об'єднує два об'єкти в один.

// const getMergedObj = (obj1, obj2) => Object.assign(obj1, obj2);


// getMergedObj({ name: 'John', age: 30 }, { city: 'New York', country: 'USA' });
// console.log(getMergedObj({ name: 'John', age: 30 }, { city: 'New York', country: 'USA' }));


// EXERCISE 10
// Задача: Видалити властивість об'єкта
// Опис: Напишіть функцію, яка видаляє вказану властивість з об'єкта.

// const exampleObj = { name: 'John', age: 30, city: 'New York' };
// const removeProp = (obj, keys) => delete obj[keys];

// removeProp(exampleObj, 'name');
// console.log(exampleObj);


// EXERCISE 11
// Задача: Конвертувати рядок в число
// Опис: Напишіть функцію, яка приймає рядок, що представляє число, і повертає це число у числовому форматі.

// const convertString = string => Number(string);

// convertString('123');
// console.log(convertString('123'));