// Function Declaration, it will be hoisted
// meaning you can call this function even before where it is created
function isEven(num) {
  return num % 2 === 0;
}

// Function Expression
// will not be hoisted, meaning, you can only call this function
// BELOW where it is created
const isEven2 = function (num) {
  return num % 2 === 0;
};

// Arrow function, MUST be assigned to a variable if you want to save it
const isEven3 = (num) => {
  return num % 2 === 0;
};

// shorthand arrow syntax
// when the function body is a single expression / one line, you can omit
// the curly braces AND the return key word, it will auto return.
const isEven4 = (num) => num % 2 === 0;

const students = [
  { name: "Ricky", attendedLecture: false },
  { name: "Bubbles", attendedLecture: false },
  { name: "Gary", attendedLecture: true },
  { name: "Steven", attendedLecture: true },
  { name: "Juliann", attendedLecture: false },
];

const numbers = [1, 2, 3, 4, 5];

const numsDbled = [];

for (let i = 0; i < numbers.length; i++) {
  numsDbled.push(numbers[i] * 2);
}

// console.log(numsDbled);

// .map is used when you want to convert a list into a new
// list where you may want to convert some or all of the items into something different

const numsDoubled = numbers.map((item, idx) => {
  return item * 2;
});

const dblNum = (num) => {
  return num * 2;
};

const numsDoubled2 = numbers.map(dblNum);

// console.log(numsDoubled);
// console.log(numbers);

// .map recreated
Array.prototype.map2 = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    const newItem = callback(this[i], i);
    newArr.push(newItem);
  }

  return newArr;
};

const quadrupledNums = numbers.map2(function (num, i) {
  return num * 4;
});

// console.log(quadrupledNums);

// .filter

const evenNums = numbers.filter(isEven);
const evenNumsAtEvenIndexes = numbers.filter((num, idx) => {
  const shouldKeep = num % 2 === 0 && idx % 2 === 0;
  return shouldKeep;
});

console.log(evenNumsAtEvenIndexes);

Array.prototype.where = function (callbackFunction) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const shouldKeep = callbackFunction(this[i], i);

    if (shouldKeep) {
      filteredArr.push(this[i]);
    }
  }

  return filteredArr;
};

const delinquentStudents = students.filter((student, i) => {
  return !student.attendedLecture;
});

console.log(delinquentStudents);
