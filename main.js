// Copy
const student = {
  name: 'Bob',
  age: 23,
  friends: ['Alex', 'Helen', 'Donald']
}

const studentPlus = {
  name: 'Bob',
  age: 23,
  friends: ['Alex', 'Helen', 'Donald']
}

console.log(student === studentPlus); // false

const studentSuper = student;
studentSuper.name = "Alex";
console.log(student);

const copyStudent = {...student};
console.log(copyStudent === student); // false

const arr = [1, 2, 3 ,4];
const copyArr = [...arr];
console.log(copyArr);

copyStudent.friends.push('Mary');
console.log(student);

const deepCopyStudent = {...student, friends: [...student.friends]};


// 2
function myFn(num) {
  function log() {
    console.log(num);
  }
  return [num, log];
}

const arrTwo = myFn(2);
arrTwo[1]();

// const numberTwo = arr[0];
// const logFunctionTwo = arr[1];

const [numberTwo, logFunctionTwo] = myFn();

// 3

const students = [
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  }
];

const copyStudents = students.map(st => ({...st}));
console.log(copyStudents);

