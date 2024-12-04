//SPREAD OPERATOR
let numbers = [3, 5, 6, 2, 1];
let numbers2 = [4, 6, 1, 10, 23];
//Hamgiin ih toog ol
let allNumbers = [...numbers, ...numbers2];
let max = allNumbers[0];
allNumbers.map((number) => {
  if (max < number) {
    max = number;
  }
});
console.log(max);

let person = {
  name: "Bilguun",
  age: 21,
};
