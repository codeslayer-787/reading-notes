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

**`${}` Allows me to add variables into my code without having to use the `+` sign to concatenate mny code.**

### JS Objects (Review)

- Fundamental data structure (something that holds different types of data ie: string, numbers, booleans, nulls, undefined)
- Objects allow us to place things in a specific place 
  `var array = [1, `1`, 2];` // how arrays work
  - when we reference items within array [0];
  `var object = {key: value, }`
  - var person = { name: 'Irwin' }
  - no are reference looks like this: object.key => value
    - Handy when we need to use a variable to represent a property name.
  - Everytime we see something like array.length;
- If we want to place a function on an object, we call this a method
- `this` => we call this contextual 'this'.  We can use `this` to reference the object that's being defined.

```javascript

var person = {
  name: 'Irwin',
  age: 36,
  speak: function(){
    console.log('Hey there');
  },
  greet: function(){
    console.log('My name is ' + this.name);
  },
}
person.speak();
// prints to the console => Hey There
person.greet() // +> 'My name is Irwin'
```
### Document Object Model (Review)

- It's an object that lives within the browser
- Represents the HTML document that we are currently looking at.
- It has it's own properties and methods
- We will use this to select elements that are on the page, create elements that are not on the page yet, append those new elements to the document object
  - Useful methods:
    - `getElementById()` <= selects an element
    - `createElement()` <= creates a new HTML element that is not displayed yet
    - `appendChild()` <= places new elements on the page
    - `setAttributes()` <= to modify elements with styling, classnames, or ids
    - `textContent` <= set the content within openning and closing tags

## Modeling Problem Domain

Domain modeling is the process of creating a conceptual model for a specific problem.  And a domain model that's articulated well can verify and validate your understanding of that problem.

- Understanding the scope of the problem, and providing a working model of how it can be solved

1. When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
1. Model its attributes with a constructor function that defines and initializes properties.
1. Model its behaviors with small methods that focus on doing one job well.
1. Create instances using the new keyword followed by a call to a constructor function.
1. Store the newly created object in a variable so you can access its properties and methods from outside.
1. Use the this variable within methods so you can access the object's properties and methods from inside.

## Tables

A table represents information in a grid format.  Examples of tables include financial reports, TV schedules, and sports results.

Tables have quite a basic structure consisting of:
* `<table>` - The table element
* `<tr>` - Indicates the start of each row
* `<td>` - Stands for Table Data.  Each cell of a table is represented by this `<td>` element
* `<th>` - It's used just like the `<td>` element, but its purpose is to represent the heading for either a column or a row.

Sometimes we'll need to strech the content of one column.  To do this, you can use either the `<td>` or `<th>` with the `colspan="number of spaces"`. 

The same procedure is done to spanning rows...  I.e. `<td rowspan="2">Movie</td>`

Long Tables:

Ther eare three elements that help distinguish between the main content of the table and the first and last rows.

`<thread>` The headings of the table should sit inside the `<threat>` element.
`<tbody>` The body should sit inside the `<tbody>` elemnt.
`<tfoot>` The footer belongs here.

## Functions and Objects (cont.)

Once you have created an object, you can add new properties to it.  You do this using the dot notation that we've used adding properties to objects.  For example: `hotel.gym = true` sets a property for the hotel object to true.  

There are a few ways to create objects.  The literal notation and the constructor notation.  You can also create an object with properties & methods using either literal notation or object contruction.

**THIS**

The keyword `this` is commonly used inside functions and objects.  Where the function is declared alters what `this` means.  When a function is created at the top level of a script, then it is in the *global scope* or *global context*.  In JS, data is represented using name/value pairs.  To organize your data, you can use an array or object to group a set of related values.  In arrays and objects, the name is also known as the key.  

Browsers come with a set of built-in objects that represent things like the browser window and the current web pare shown in that window.  These built-in objects act like a toolkit for creating interactive web pages.

There are three gropus of built-in objects:

  - Browser Object Model - creates a model of the browser tab or window.  
  - Document Object Model - The DOM creates a model of the current web page.
  - Global JavaScript Objects - The global objects do not form a single model.  They are a group of individual objects that relate to different parts of the JS language.

  ## Object Oriented Programming

  - We are using objects as a design pattern
  - We use objects as the starting point for programming operations
    - All the functions and operations you could use, belong to an object.
    - Before we can all out to properties and methods, we have to create an object. 
  - It all begins with defining functions that produce objects.  
  - Constructors:  Functions that create objects...  Example:

  ```javascript

  //Using literal notation
  function Store() {
    name = 'seattle';
    hours = ['6am', '7am', '8am'];
    mincust = 5;
    //this.speak = function() {
      //console.log('hey');
    //}
    };

      // Creating an object using the Store constructor funciton
  function Store() {
    this.name = name;
    this.hours = hours;
    this.mincust = minCust;

    //To Call it
    var seattle = new Store('Seattle', ['6am', '7am', '8am'], 5);
  }
  // This call will populate the values and arrays within it
```

## HTML Tables

### Creating rows and columnns

- This requires a very specific composition/hierarchy of elements.
  - There's not really a column element itself
  - Each row is made of data cells

```html
<table>
  <tbody id="table-body">
    <tr>
      <td>One</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>Three</td>
      <td>Four</td>
    </tbody>
  </table>
  <script src="app.js"></script>
```

Using two for loops nested together, write some javascript that will print into console this pattern:

*
**
***
****
*****

### Nested for loops are for multi-dimentional problems.  

The first loop `[i]` will run once then `[j]` will run once inside.  Once `[j]` is done, `[i]` will run it's second iteration then `[j]` will follow.  So on and so on...  This will continue until `[j]` is less than or equal or whatever I want to do. These are good for two-dimensional problems. 

## Debugging

As we already know, JavaScript is a hard language to learn..  here are some tips on how to deal with errors.  But before talking about hwo to deal with them, we should know what causes them.  To find the source of an error, it helps to know how scripts are processed.

The JS interpreter uses the concept of execution contexts.  There's one global execution context; plus each function creates a new execution context.  

**Execution Context**
  - Global Context - It's in the script, but not inside a function.
  - Function Context - This code is being run inside a function.

**Variable Scope**
  - Global Scope - If a variable is declared outisde a funciton, it can be used anywhere because it has a global scope.
  - Function-level scope - When a variable is declared inside a funcion.

The JS interpreter processes code one line at a time.  When a statement needs data from another function, it stacks the new function on top of the current task.

**Error Objects** can help us find where the mistakes are.  Browsers have tools to read them. Ie. `Uncaught SyntaxError:`

Some common errors are: 
- `SyntaxError` caused by incorrect use of rules of the language. (typos)
- `EvalError` very rare...  when the browser incorrectly evaluates text and runs it as code.
- `ReferenceError` caused by a variable that is not declared or out of scope
- `URIError` incorrect use of URI functions
- `TypeError` often caused byu trying to use an object or method that does not exist
- `RangeError` if you call a function using numbers outside its accepted range
- `Error` The generic error object is the template from which all other errors are created
- `NaN` caused by performing a mathematical operation using a value that is not a number.  This is a value and not an error.

Debugging is about deduction!  Look at the erorr message.  Usually you will find the script that caused the error as well as the line number.  We should check how far the script is running (using tools to write messages to tell the console to tell how far the script is being executed).  We can also use breakpoints where the code is going wrong to pause the execution and inspect the values. 

**Use the console** to find errors and even type code inside to track down a problem.  One of the most effective ways to track down what my code is doing is by `console.log`.  Other things we can do are writing tabular data and writing on a condition(`console.assert`).

Another strategy we can use is to add breakpoints (on the sources portion of the inspector).  We can step through code using breakpoints to see where values change and a problem occur.

**Try, Catch, Finally** helps when we know where our code might fail.

Try - specifes the code where we think it might throw an exeption within. If an exeption occurs, control is automatically passed to the catch block.
Catch - Stepts in with an alternative set of code.
Finally - the contents of this block will run either way (wether the try block succeeded or failed.)

If we iknow something might cause a problem, we can generate our own errors before the interpreter creates them.  `throw new Error('message') is used to tell the user that there's a problem instead of leaving them to try to figure out why the website is not working.

## Events

When the user interacts with the HTML on a web page, there are three steps involved in getting it to trigger some JavaScript code.  These are known as event handling:

1. Select the element node you want the script to respond to.
2. Indicate which event on the selected node will trigger the response.
3. State the code you want to run when the event occurs.

There are three ways to bind an event to an element:

1. HTML Event handlers - DO NOT USE THIS
2. Traditional DOM event handlers - These are supported by all major browsers.  The main drawback is that you can only attach a single function to any element.  You can separate the JS from the HTML.
3. DOM level 2 event listeners - This is the favored way to handle events.  You can trigger multiple functions.

**Event listeners** have the following type of syntax:
```javascript
element.addEventListener('event', functionName [, Boolean]);
```
First the element to target, then adding the event listener, then the event to bind the node, then the name of the function to call, then event flow inside brackets or parentheses.

## Charts

Charts are a better way to display your data than tables.  These can be animated and easier to read than regular tables.  Charts seem to be more difficult to create than tables.  The way we will be creating these charts is through the pluggin Chart.js.  There are three different types of charts.  The line charts, pie charts, and bar charts.  You can use any chart type to display the information you want, but certain types will be better for some types of information than others.

You can draw charts using the `<canvas>` element.  This element looks a lot like the `<img>`, but with fewer options.  The canvas element does require a closing tag.  You can add things to the canvas using html.  You can add transparency to your charts easily along with other effects. Canvas only supports two primitive shapes: rectangles and paths (lists of points connected by lines).  All other shapes must be created by combining one or more paths.  

You can apply styles and colors to your canvas using fillStyle (sets the style used when filling shapes)and strokeStyle (sets the style for shape's outlines). Also, you can add transparency to shapes using `globalAlpha = transparencyValue`.  The value for transparency goes from 0.0 to 1.0 (fully opague).  Transparency is set to 1.0 by default.

You can draw texts using canvas rendering.  Text can be filled using the fillStyle as used for other shapes or strokeText.  

## Steps for Sky Mall project

* Create an array of all product names

```javascript

var products = ['bag', 'etc']

]
```
* Create your object constructor

```javascript
function ProductImage(name) {
  this.name = name;
  this.timesShown = 0;
}
```
* Add the push to `ProductImage.allImages.push(this);`
* Create first loop to create new products for each new iteration of i.

* work on adding id's to your html page for `left-image, right image, etc.`

* Now generate the random image function `var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);`

* Generate a `renderImage(){` function

* Generate a `handleImageClick(event) {` function with an event listener for 'click'

## Local Storage

The article starts by pointing out hacks that used to be done before HTML5.  Some of them even used Adobe Flash to store up to 100kb of data and use it as a local storage booster.  Before HTML 5, browsers could store 64kb of data at the cost of speed.  HTML 5 has something called Web Storage (DOM storage) which allows web pages to store key/value pairs locally.  The data will stay within your browser and not transmitted to the remote web server.  

All modern internet browsers support HTML 5 storage because this was one of the properties of HTML5.  You can check for HTML 5 storage via:

```javascript
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
```
There's a tool called Modernizr that detects support for html5 storage.  

You can store data via HTML5 storage based on a named key, then you can retrieve the data with the same key.  This name key is a string.  The data supported are the same types JavaScript supports such as strings, booleans, integers, and floats.  The data is actually stored as a string.  You can use functions like `parseInt()` or `parseFloat()` to coerce the retireved data into the expected JS type.  

The storage event itself is fired on the window object whenever `setItem()`, `removeItem()`, or `clear()` is called and actually changes something.  

There's a game within the reading that saves your progress even if you close the browser window.  According to the author, this can be accomplished with the following code:

```javascript
function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
	localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
	localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}
```
The code above uses the `localStorage` object to save whenever there's progress in the game.  When you close the browser and open it back up, the game does not call `newGame()`, but `resumeGame()`.  The function looks like this:

```javascript
function resumeGame() {
    if (!supportsLocalStorage()) { return false; }
    gGameInProgress = (localStorage["halma.game.in.progress"] == "true");
    if (!gGameInProgress) { return false; }
    gPieces = new Array(kNumPieces);
    for (var i = 0; i < kNumPieces; i++) {
	var row = parseInt(localStorage["halma.piece." + i + ".row"]);
	var column = parseInt(localStorage["halma.piece." + i + ".column"]);
	gPieces[i] = new Cell(row, column);
    }
    gNumPieces = kNumPieces;
    gSelectedPieceIndex = parseInt(localStorage["halma.selectedpiece"]);
    gSelectedPieceHasMoved = localStorage["halma.selectedpiecehasmoved"] == "true";
    gMoveCount = parseInt(localStorage["halma.movecount"]);
    drawBoard();
    return true;
}
```
You can also store data using SQL or the Indexed Database API.  For now it seems like we will be using HTML 5, but it is good to keep other options in mind.
