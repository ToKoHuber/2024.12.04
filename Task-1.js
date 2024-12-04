const names = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 40 },
];
const name2 = [
  { name: "Andy", age: 20 },
  { name: "Bilguun", age: 25 },
  { name: "Jargalmaa", age: 30 },
  { name: "Anguuch", age: 35 },
  { name: "Mah", age: 40 },
  { name: "Chinguun", age: 45 },
];
// 1. FIND FIRST PERSON THAT NAME STARTS WITH 'C'

let allNames = [...names, ...name2];

function findFirstLetter(array) {
  return array.name[0] === "C";
}

console.log(allNames.find(findFirstLetter));
