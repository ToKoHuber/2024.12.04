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

// 2. FIND FIRST PERSON THAT OLDER THAN 2

let allNumbers = [...names, ...name2];

function findOlderThan(array) {
  return array.age > 2;
}

console.log(allNumbers.find(findOlderThan));
