/**************************************************
 * Variables and data types
 */

/*
var firstName = "Tisa";
console.log(firstName);

var lastName = "Komadina";
var age = 34;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "QA";
console.log(job); */

/**************************************************
 * Variable mutation and type coercion
 */

/* var firstName = "Tisa";
var age = 34;
// Type coercion
console.log(firstName + " " + age);

var job, isMarried;
job = "QA";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married? " +
    isMarried
);

// Variable mutation
age = "thirty-four";
job = "quality assurance engineer";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married? " +
    isMarried
);

var lastName = prompt("What is her last name?");
console.log(firstName + " " + lastName); */

/**************************************************
 * Basic operators
 */

/* var now, yearTisa, yearMirko;
now = 2020;
ageTisa = 35;
ageMirko = 38;

// Math operators
yearTisa = now - ageTisa;
yearMirko = now - ageMirko;

console.log(yearTisa + " " + yearMirko);

console.log(now + 2);
console.log(now * 2);
console.log(now / 20);

// Logical operators
console.log();

var tisaOlder = ageTisa > ageMirko;
console.log(tisaOlder);

// typeof operator
console.log(typeof tisaOlder);
console.log(typeof ageMirko);
console.log(typeof "Test string");

var x;
console.log(typeof x);
console.log(typeof y);
 */

/**************************************************
 * Operator precedence
 */

/* var now, yearTisa, fullAge;

now = 2020;
yearTisa = 1985;
fullAge = 18;

var isFullAge = now - yearTisa >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageTisa = now - yearTisa;
var ageMirko = 38;
var average = (ageTisa + ageMirko) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x); */

/*****************************
 * CODING CHALLENGE 1
 */

/*
Tisa and Mirko are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/* var massMirko, massTisa, heightMirko, heightTisa, bmiTisa, bmiMirko;

massTisa = 65;
heightTisa = 1.72;

massMirko = 113;
heightMirko = 1.9;

bmiMirko = massMirko / (heightMirko * heightMirko);
bmiTisa = massTisa / (heightTisa * heightTisa);
console.log(bmiMirko, bmiTisa);

isBmiHigher = bmiMirko > bmiTisa;
console.log("Is Mirko's BMI higher than Tisa's? " + isBmiHigher); */

/*****************************
 * If / else statements
 */

/* var fistName, civilStatus;

firstName = "Tisa";
civilStatus = "in a relationtip";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " is not married!");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " is not married!");
}

massTisa = 65;
heightTisa = 1.72;

massMirko = 113;
heightMirko = 1.9;

bmiMirko = massMirko / (heightMirko * heightMirko);
bmiTisa = massTisa / (heightTisa * heightTisa);
console.log(bmiMirko, bmiTisa);

if (bmiMirko > bmiTisa) {
  console.log("Mirko's BMI is higher than Tisa's! ");
} else {
  console.log("Tisa's BMI is higher than Mirko's!");
}

// isBmiHigher = bmiMirko > bmiTisa;
// console.log("Is Mirko's BMI higher than Tisa's? " + isBmiHigher); */

/*****************************
 * Boolean logic
 */

/* var firstName = "Tisa";
var age = 13;

if (age < 13) {
  console.log(firstName + " is a girl");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young woman");
} else {
  console.log(firstName + " is a woman");
} */

/*****************************
 * The Ternary Operator and Switch Statements
 */

// Ternary operator

//var firstName = "Tisa";
//var age = 3;

/*age >= 18
  ? console.log(firstName + " drinks wine")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice"; */

// Switch statement

/*var job = "mentor";

switch (job) {
  case "teacher":
  case "instructor":
    console.log("Teaches children");
    break;
  case "mentor":
    console.log("Mentors juniors");
    break;
  case "driver":
    console.log("Drives you around");
    break;
  default:
    console.log("Job is not defined");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a girl");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young woman");
    break;
  default:
    console.log(firstName + " is a woman");
}*/

/*****************************
 * Truthy and Falsy values and equality operators
 */
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/* var avgJohn, avgMike, avgMary;

avgJohn = (89 + 120 + 103) / 3;
avgMike = (116 + 94 + 123) / 3;
avgMary = (97 + 134 + 105) / 3;

console.log(avgJohn, avgMike, avgMary);

if (avgJohn > avgMike) {
  console.log("John's team wins the average with " + avgJohn + " points.");
} else if (avgJohn < avgMike) {
  console.log("Mike's team wins the average with " + avgMike + " points.");
} else {
  console.log("It's a draw, both teams have " + avgMike + " points.");
}

switch (true) {
  case avgJohn > avgMike && avgMike > avgMary:
    console.log("John's team wins the average with " + avgJohn + " points.");
    break;
  case avgJohn < avgMike && avgMike > avgMary:
    console.log("Mike's team wins the average with " + avgMike + " points.");
    break;
  case avgJohn < avgMary && avgMike < avgMary:
    console.log("Mary's team wins the average with " + avgMary + " points.");
    break;

  case avgJohn === avgMike && avgMike === avgMary:
    console.log("All teams have the same average of " + avgMike + " points.");
} */

/*****************************
 * Functions
 */

/* function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageTisa = calculateAge(1985);
var ageAsja = calculateAge(1993);
var ageMirko = calculateAge(1982);
console.log(ageTisa, ageAsja, ageMirko);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired");
  }
}

yearsUntilRetirement(1985, "Tisa");
yearsUntilRetirement(1923, "Viktor");
yearsUntilRetirement(1982, "Mirko"); */

/*****************************
 * Function Statements and Expressions
 */
// Function declaration
// function whatDoYouDo (job, firstName) {}

// Function expression
/* var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "developer":
      return firstName + " creates code";
    case "teacher":
      return firstName + " teaches code";
    case "designer":
      return firstName + " creates websites";
    default:
      return firstName + "'s job is unknown";
  }
};

console.log(whatDoYouDo("developer", "Stevan"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark")); */

/*****************************
 * Arrays
 */

// Initiate the array
/* var names = ["Tisa", "Asja", "Viktor"];
var years = new Array(1985, 1993, 2003);

console.log(names);
console.log(names[2]);
console.log(names.length);

// Modify the array
names[1] = "Mirko";

console.log(names[1]);

names[5] = "Viktor";

console.log(names);

// Different data types
var tisa = ["Tisa", "Komadina", 1985, "QA", false];

tisa.push("purple");
tisa.unshift("Mrs");
console.log(tisa);

tisa.pop();
tisa.pop();
tisa.shift();
console.log(tisa);

console.log(tisa.indexOf(1985));

var isQa = tisa.indexOf("QA") === -1 ? "Tisa is not QA" : "Tisa is QA";
console.log(isQa); */

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*
var billOne = 124;
var billTwo = 48;
var billThree = 268;

function tipCalculator(amount) {
  if (amount < 50) {
    var tip = amount * 0.2;
  } else if (amount < 200) {
    tip = amount * 0.15;
  } else {
    tip = amount * 0.1;
  }
  return tip;
}*/

// alternative - prebaci amount dole, da se ne ponavlja u if petlji

/*function tipCalculator(amount) {
  var tip;
  if (amount < 50) {
    tip = 0.2;
  } else if (amount < 200 && amount >=50) {
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return amount * tip;
}*/

/*console.log(tipCalculator(50));

var firstArray = [];
firstArray.push(tipCalculator(billOne));
firstArray.push(tipCalculator(billTwo));
firstArray.push(tipCalculator(billThree));

console.log(firstArray);

var secondArray = [];
secondArray.push(tipCalculator(billOne) + billOne);
secondArray.push(tipCalculator(billTwo) + billTwo);
secondArray.push(tipCalculator(billThree) + billThree);
console.log(secondArray);

// alternative - napravi array sa cenama, napravi arrays sa tips i final cenama

var bill = [124, 48, 268];
var tips = [
  tipCalculator(bill[0]),
  tipCalculator(bill[1]),
  tipCalculator(bill[2]),
];
var total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(tips, total);*/

/*****************************
 * Objects and properties
 */
/*
var tisa = {
  firstName: "tisa",
  lastName: "Komadina",
  birthYear: 1985,
  family: ["Mama", "Tata", "Asja", "Viktor"],
  job: "QA",
  isMarried: true,
};

console.log(tisa);

console.log(tisa.family);
console.log(tisa["lastName"]);
var x = "firstName";
console.log(tisa[x]);

// change the properties of object
tisa.job = "Quality Assurance";
tisa["isMarried"] = false;

console.log(tisa);

// create new object

var mirko = new Object();
mirko.firstName = "Mirko";
mirko.lastName = "Papuga";
mirko["birthYear"] = 1982;

console.log(mirko);
*/

// methods

/*let now = new Date();

var tisa = {
  firstName: "tisa",
  lastName: "Komadina",
  birthYear: 1985,
  family: ["Mama", "Tata", "Asja", "Viktor"],
  job: "QA",
  isMarried: true,
  calcAge: function (birthYear) {
    this.age = now.getFullYear() - this.birthYear;
  },
};

tisa.calcAge();
console.log(tisa);*/

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var tisa = {
  fullName: "Tisa Komadina",
  mass: 65,
  height: 1.72,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};

var mirko = {
  fullName: "Mirko Papuga",
  mass: 113,
  height: 1.9,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};
tisa.bmi();

console.log(mirko.bmi, tisa.bmi);

// isBmiHigher = bmiMirko > bmiTisa;
// console.log("Is Mirko's BMI higher than Tisa's? " + isBmiHigher);
