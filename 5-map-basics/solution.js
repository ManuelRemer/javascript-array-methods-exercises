const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubleNumbers);

const halvedNumbers = numbers.map((number) => {
  return number / 2;
});
console.log(halvedNumbers);

const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log(squaredNumbers);
