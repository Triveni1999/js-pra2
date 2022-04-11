//Q1.Create 2 objects - parent and child.
//Attach methods to parent and use those methods
//in child object using parents prototype
//Write code to explain prototype chaining
//Ans:-
let parent = {
  institute: "ABC",
  course: "Web Full Stack",
  fee: "30000rs",
};
let child = {
  fname: "Akshay",
  lname: "Gurme",
  branch: "CSE",
  age: 24,
};
child.__proto__ = parent;
console.log(child["institute"]);
console.log(child["course"]);
console.log(child["fee"]);
//Q2:Write a JavaScript function to retrieve
//all the names of object's own and inherited properties.
//Ans:-
let parent2 = {
  institute: "ABC",
  course: "Web Full Stack",
  fee: "30000rs",
};
let child2 = {
  fname: "Akshay",
  lname: "Gurme",
  branch: "CSE",
  age: 24,
};

child2.__proto__ = parent2;
for (let key in child2) {
  if (child2.hasOwnProperty(key)) {
    console.log(key, "Own Propertie");
  } else {
    console.log(key, "Inherited Propertie");
  }
}
//Q3.Add a method to calculate sum of all
//elements in Array in array's protype,
//use that method to calculate sum for multiple arrays
let array = [48, 89, 77, 99, 18];
let sum = array.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(sum);
