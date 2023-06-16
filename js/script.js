///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */


const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];

fruits.forEach((fruit, index) => fruit.id = index + 1);
console.log(fruits);

const fruitsOnSale = fruits.map(({ price }) => price * 0.8);
console.log(fruitsOnSale);

