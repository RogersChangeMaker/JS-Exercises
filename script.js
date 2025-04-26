let fName = "Rogers";
let lName = "Wase";
let age = "41";
let fColor = "royal blue";
let hobby = "Football";
let fClub = "Arsenal FC";

console.log(
  `Hello my name is ${fName} ${lName}, I am ${age} years old and my fvorite color is ${fColor}. My hobby is ${hobby} and my favorite club is ${fClub}.`
);

let a = "Greetings";
let b = 41;
let c = true;

console.log("The type of a is" + typeof a);
console.log("The type of b is" + typeof b);
console.log("The type of c is" + typeof c);

let num1 = 20;
let num2 = 5;

console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
console.log(
  "The subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2)
);
console.log(
  "The multiplication of " + num1 + " and " + num2 + " is " + num1 * num2
);
console.log("The division of " + num1 + " and " + num2 + " is " + num1 / num2);

var y = 10,
  z = "10";
console.log(y === z);
console.log(y !== z);
console.log(y < z);
console.log(y > z);

function canDrive(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log(canDrive(28));
console.log(canDrive(20));

function greet(name) {
  return "Hello," + name + ", hope you are having a blessed day";
}
console.log(greet("Rogers"));
console.log(greet("Junior"));

// function greet(fullName) {
//     // let fName = Bruce;
//     // let lName = Wayne;
//   let fullName = fName + lName;

//   let currentHour = new Date().getHours();
//   let greeting;

//   if (currentHour < 12) {
//     greeting = "Good morning";
//   } else if (currentHour < 18) {
//     greeting = "Good afternoon";
//   } else {
//     greeting = "Good evening";
//   }

//   return greeting, fullName;
// }

// console.log(greet(fullName));

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}

let favoriteFoods = ["Eru", "Corn-charf", "Mpu-fish", "Ekwang", "Plantain"];

console.log(favoriteFoods[2]);

favoriteFoods.push("Rice");

console.log(favoriteFoods);

let person = {
  name: "Wase",
  age: 41,
  location: "Philippines",
};
console.log(person);

//   Hello: function() {
//     return Hi, I am ${this.name}, ${this.age} years old, from ${this.location};
//   }
// };

// console.log(person.Hello());
