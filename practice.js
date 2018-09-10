//////////////////PROBLEM 1////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

function greeting(name){
  return "Hello, " + name;
};

//////////////////PROBLEM 2////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

var newGreeting = function(name){
  return "Hello, " + name;
};

//////////////////PROBLEM 3////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting.

var finalGreeting = name => "Hello, " + name;

//////////////////PROBLEM 4////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

var groceries = ["apples", "milk", "eggs", "bread"]

//Write a function called doubleCheck that takes in an array
//as a parameter.

//If the array does not contain "chocolate", add "chocolate".
//doubleCheck should return the array.

var doubleCheck = function(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] != "chocolate"){
    array.push("chocolate");
    }
  }
  return array;
}

//////////////////PROBLEM 5////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color: (a string), age (a number),
//and goodBoy (a boolean).

var dog = {
  name: "Toffee",
  color: "Brown",
  age: 4,
  goodBoy: true
};

//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

var devMountainClassPet = dog.name;

//Add a method to dog called bark.
//The value of bark should be a function that returns the string "Woof woof".

dog.bark = function(){
  return "Woof woof";
}

//Store the result of invoking the bark method in a variable called ruff.

var ruff = dog.bark();

//////////////////PROBLEM 6////////////////////

//Write a function called looper that takes in an array. looper should declare
//a variable called mySum and set it equal to 0. looper should then loop through
//the array and check each element.

//If the element is odd, or if the element is greater than or equal to 100, add the element
//to the mySum variable total.

//Return mySum.

var looper = function(array){
  var mySum = 0;
  for (var i = 0; i < array.length; i++) {
    if ((array[i]%2 !== 0)  || (array[i] >= 100)){
      mySum += array[i];
    };
  };
  return mySum;
};

//////////////////PROBLEM 7////////////////////

//Given the following function called math

function math(num1, num2, callback) {
  return callback(num1, num2);
}

//Write a function called add that takes in two parameters and
//returns the result of adding them together.

var add = function(para1, para2){
  return para1 + para2;
}

//Now invoke math, passing in the numbers 3 and 4, and your add function,
//storing the result in the variable mathSum.

var mathSum = math(3, 4, add);


//////////////////PROBLEM 8////////////////////

//Write a function called invoker that takes in one paramter, a callback function.
//invoker should return the result of invoking the callback.

function sampleCallbackOne() {
  return "I am a callback function";
}

function sampleCallbackTwo() {
  return "I am also a callback function";
}

var invoker = function(callback){
  return callback();
}

//////////////////PROBLEM 9////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "realDuck"];

//////////////////PROBLEM 10////////////////////

//Create a function called outerFn which returns an anonymous
//function which returns your name.

var outerFn = function(){
  return function(){
    return "Andrew";
    };
  };

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn and save the result to a variable called finalResult.

var finalResult = innerFn();
