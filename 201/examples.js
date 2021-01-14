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