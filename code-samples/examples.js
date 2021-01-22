var numbers = [10,3,2,5,7,6,9,12,15,4,19,1];
var answer = [];

for (var i = 0; i <numbers.length; i++){
  if (numbers[i] <6 || numbers [i] > 12){
  answer.push(numbers[i])  
  }
}

var myAnswer = '7';
var i = 0
while ( i <4 && question6 != myAnswer){
  var question6 = prompt('Guess a number')
  console.log(myAnswer, question6);
  alert('Too high')
}
if(question6 > myAnswer) {
  alert('Too low') 
  }
if (question6 === myAnswer){
  alert('correct')
  score++
}
else if (i === 3){
  alert('Answer is 7')
}
i++


/// Writing a Not a Number NaN
typeof(NaN)
'number'
isNaN(NaN)
true
isNaN(10)
false


// Console log the one below and see the steps

'use strict';

function adds(num1, num2){  // Small array in a function
  console.log('here\'s number 1 ' + num1);
  console.log('here\'s number 2 ' + num2);
  var sumLocal = num1 + num2;
  console.log('here\'s the sum: ', sumLocal);
  return sumLocal;
}
var sum = adds(2, 3);
//var newSum = adds(sum, 10);
console.log(sum);

// The one below is an example of a simple function

function alertUser(param){
  alert(param);
  console.log(param);
}
alertUser('Hello World');

// Another small example maybe useful for later

var arrayOfAnswers = [];

function askQuestion(question){
  var answer = prompt(question);
  arrayOfAnswers.push(answer);
}
askQuestion('How old are you?');
askQuestion('What is your fave color?');

console.log(arrayOfAnswers);

// * Create a function that uses 2 parameters, the first parameter is an array of numbers, and the second is a single integer number.
// * The function returns that same array, but adds that second parameter to each number within the array.

var arrayOfNumbers = [1,10,15,20];
var integer = 5;

function sumThisUp(){
  for (let i= 0; i < arrayOfNumbers.length; i++){
    console.log(arrayOfNumbers[i] + integer);
  }
}
sumThisUp();

// About the same thing as above, but the parameters are declared within the function

var arrayOfNumbers = [1,10,15,20];
var integer = 5;

function sumThisUp(x, y){
  for (var i=0; i < x.length; i++){
    console.log(x[i] + y);
  }
}
sumThisUp([1,10,15,20],5);
/////// OR ///////
sumThisUp(arrayOfNumbers, integer); //<--Using the global variables

function testSum(x, y){
  for (var i=0; i < x.length; i++){
    console.log(x[i] + y);
  }
}
testSum(4, 7);


// This one goes with the table creation in HTML

var tablebody = document.getElementById('table-body');

var rowOne = document.createElement('tr');
var cellOne = document.createElement('td');
var cellTwo = document.createElement('td');

cellOne.textContent = 'one';
cellTwo.textContent = 'two';

rowOne.apppendChild(cellOne);
rowOne.appendChild(cellTwo);
tablebody.appendChild(rowOne);

// From scratch:
// For every number of Properties
// Create a td
// fill that td with text
// append td to row

function Kitten(name, breed, traits, personality){
  this.name = name;
  this.breed = breed;
  this.traits = traits;
  this.personality = personality;
}
Kitten.prototype.display = function (){
  var kittenRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  var breedCell = document.createElement('td');
  var traitsCell = document.createElement('td');
  var personalityCell = document.createElement('td');

  nameCell.textContent = this.name;
  breedCell.textContent = this.breed;
  traitsCell.textContent = this.traits;
  personalityCell.textContent = this.personality;

  kittenRow.appendChild(nameCell);
  kittenRow.appendChild(breedCell);
  kittenRow.appendChild(traitsCell);
  kittenRow.appendChild(personalityCell);

  tablebody.appendChild(kittenRow);

}
tablebody.innerHTML = '';

var frankie = new Kitten('Frankie', 'Calico', ['spotted', 'fuzzy'], 'friendly and warm');

frankie.display();

var spencer = new Kitten('Spencer', 'Tabby', ['round', 'always hungry'], 'shy and hates loud noises');

spencer.display();


// Using two for loops nested together, write some javascript that will print into console this pattern:

// *
// **
// ***
// ****
// *****

var starArray = ["*", "**","***", "****","*****"];

for (var i = 0; i < starArray.length; i++){
  console.log(starArray[i]);
}

// The one above is to do this in one array

var star = "*";

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) { //while j is less or equal to i, console log 
    console.log(star + j); // I can throttle how many star counts j will go through.  [i] will run a loop then [j] will run it's first iteration of its own loop.  Once it finishes, i will run it's second then j will repeat... and so on and so on 5 times.
  }
}
