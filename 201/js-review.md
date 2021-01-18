## Lists

There are the types of lists:

* Ordered lists:  `<ol>` These are ordered by numbers, letters, roman numerals, etc.
* Unordered lists: `<ul>` These usually have bullet points (circles, squares, etc.)
* Definition lists: `<dl>` Consists of a series of terms and their definitions.
    * `<dt>` - used to contain the term being defined.
    * `<dd>` - this cointains the definition.
* Nested lists: You can put a second list inside an `<li>` element to create a sub-list or **nested list**.

## Boxes

You can specify the sice of a box by setting pixel numbers, percentages, or ems.  Pixels are the most popular method because they allow designers to accurately control their size.

When using percentages, the size of the box is relative to the size of the browser window.  When ems is used, the size of the box is based on the text within.  

The **min-width** property specifies the smallest size a box can be displayed at when the window is narrow.  The **max-width** property indicates the maximum width a box can stretch to.  These properties ensure text is legible (especially on smaller screens.)

The **min-height** and **max-height** properties work similar to min and max width.  Note: If the boxes are too small, text can overflow into other parts of the page.

The **overflow** property tells the browser what to do if the content contained within the box is larger than the box itself.  It can be either *hidden* or *scroll* <--- adds a scrollbar.

### Every box has three available properties that can be adjusted to control its appearance:

* Border - The border separates the edge of one box from another
* Margin - Margins sit outside the edge of the border
* Padding - The space between the border of a box and any content within it.  

*See different types of borders on page 309 - 310 of the HTML book.*

## Arrays

An array is a special type of variable.  It doesn't just store one value; it stores a list of values.

  - Let you store more than one piece of data in the same spot.
  `var arrayOfNumbers = [2,4,6,8,9,10]`
  - We reference the discreet items in the array with an index number

  `arrayOfNumbers [0] => 2`
  `arrayOfNumbers[5] => 10` //How many spaces to move
  `arrayOfNumbers.lenght` <--- To check the lenght of the array

Example on how create an array:

```
var colors;
colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors');
el.textContent = colors[0];
```

You can use `.toUpperCase();` when declaring your variable so you don't have to write it in multiple places.
## Formal JS Logic

* What goes inside of the parantheses of a conditional statement
* Truthy vs Falsey
  * Booleans, true or false
  * Js is weird and has this idea of things that evaluate to true or false without being exactly True or False
    * Truthy
      * true
      * numbers 1 or more or negative numbers
      * string that are not empty
      * "0" 
    * Falsey
      * 0
      * ' '
      * null
      * undefined
      * NaN
      * False
  * Logical operator
    * ! not something <---This flips the value I'm looking at
    && both side of a statement need to be true
    * || only one side of a statement needs to be true 

## Loops

- A way to get our code to run more than once without having to write more than once.
- There are 3 types of loops
  - **while loop:**  While a condition is truthy, run the following code over and over.
  ```javascript
  var condition = -2;
  while (condition) {
    // this will run as long as condition is true.. Ex. -2, -1, then 0 which is Falsey
    console.log('truthy' + condition);
    condition++;
  }
  // we'll only get to code below the loop, if the condition above becomes falsey at some point. 
    console.log('loop is done');
    ```
```javascript

// This one will run a loop until you enter a name or string
var answer = prompt ('What is your name?');

while (!answer) {
  console.log('You have to give me a name');
  answer = prompt('you have not given me a name, please enter your name');
}

console.log('thank you');
```

  - **A for loop:**  is a control flow statement for specifying iteration, which allows code to be executed repeatedly.

  ```javascript
  // for loop syntax: initializer / condition for the loop / incrementer, the thing that occur after every loop
  for (var i = 0; i < 10; i++) {
    console.log('loop is done');
  }
  console.log('loop is done')
```

``` javascript

  // arrayOfQuestions [someNumber] => some number represents the position of items within the array.
  var arrayOfQuestions = ['What is your name?, 'what is your favorite color?'];
  var arrayOfAnswers = [];
  // this loop is running against the number of times the array of Questions.
  for (var i = 0; i < arrayOfQuestions.length; i++) {
  arrayOfAnswers.push(prompt(arrayOfQuestions[i]));
  }

  console.log('loop is done', arrayOfAnswers);
```

  - **do while loop:** Creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. The do/while statement is used when you want to run a loop at least one time, no matter what.

  ```javascript
  condition = false
  // this will run once regardless of the truthiness of the condition
  do {
    console.log('condition might be truthy')
  }
  while condition.false
  ```

  Pushed items move from the right to the left.

  ## JS Functions Part 2

  A variable that include (not just the data type) but blocks of javascript
    * Declare a function and devine function's operations
    * Arguments: The data you provide a function when you call / execute the function
    * Parameters: The data that the function defines, which comes from it's execution
      * Think of this as a variable that only that specific function can use.
    * Scope: The logic within the curly`{}` braces of a function
      * functions are able to access global scope that are defined outside the curlies
      * functions only have access 

  ```javascript
  //var array = [1, 2, 3];  <---An Array
  //array.push(4)

  //**with functions we can store these operations to run when we chose**

  function pushArray (){ // <---Global scope (ouside of the curlies)
    var array = [1, 2, 3];
    array.push(4);
  }
  pushArray(); //calling or executing this function
  ```
## For Loop steps explanation!

```javascript
let numberOfGuesses = 6      //Bucket example
for (let i = 0; i < numberOfGuesses; i++) {
  ```
1. Assign i to 0
2. Checks the condition: i < numberOfGuesses
3. Runs code in the `for` loop
4. Once the code runs it goes back to the i++ to check if it needs to run again

**Paramenters are variables that we define within the parentheses of the functions signature or declare.**

The `typeof` parameter returns things in the type of data that I chose.

## On Branching and Merging

* AC...  then `git push origin enterbranchnamehere`
* Go to github then look for the pull requests and follow the commit prompts...
* Do `git checkout main`  <--- Takes you you to the main directory
* `git pull origin main`
* `git checkout -b newbranchname`
* **Rinse and Repeat**

## Understanding Problem Domain:

The author in this article makes a very important point that stuck with me since course 102...  Have your end product in mind when writing your code!  What am I trying to accomplish?  Asking myself this question is much better than just writing code blindly without a real idea of what the company is really trying to accomplish.  The author pointed out at his experience at HP.  They gave him a problem to solve and exactly what they wanted as their end-product instead of just telling him to make a prompt that did x, y, and z.  Digging for information may be one of the most important aspects of my job as a software developer. **Always keep the "end" in mind!**

## Object Literals:

What is an object?  Objects group together a set of variables and functions to create a model of something you would recognize from the real world.  In an object, variables and functions take on new names.  

See the following example for a hotel application:

```javascript
var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 20,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    returns this.rooms - this.booked;
  }
};
```
The object above creates an object...  a hotel named Quay.  It has 40 rooms and there are 20 booked.  It has a gym and three different room types.  The function calls for room availability by substracting total of rooms minus rooms booked.

I can create an object literal notation by adding a period `.` to the object name for the aspect I want to work on.  

```javascript
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
```

The code above deals with the hotel name and creates a variable `roomsFree` that calls the function `checkAvailability();`  

## The Document Object Model (DOM)

The Document Object Model specifies how browsers should create a model of an HTML page and how Javascript can access and update the contents of a web page while it is in the browser window.  The DOM is not part of JS or HTML.  It is a separate set of rules.
  * Makes a model of the HTML page
  * Acess and changes the HTML page

Each node is an object with methods and properties.  Scripts access and update the DOM tree (not the source HTML file).  Any changes made to the DOM tree are reflected in the browser.

### The DOM tree has the following types of nodes:
  * Document node
  * Element nodes
  * Attribute nodes
  * Text nodes

To access and update the DOM tree:
  * Locate the node that represents the element you want to work with
    - Select individual element nodes by using `getElementById()` or others (see pg. 188)
    - Select multiple elements (nodelists) Ex. `getElementsByClassName()`
    - Traversing Between Element Nodes Ex. `parentNode`, `firstChild`, etc.
  * Use its text content, child elements, and attributes
    - Access/Update text nodes `nodeValue`
    - Work with HTML content.  Ex. `innerHTML`, `textContent`, etc.
    - Access or update attribute values `className/id` or `hasAttribute()`

