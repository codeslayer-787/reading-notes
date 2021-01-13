# Basics of HTML, CSS & JS

When possible, try to keep your html, css, and Javascript files separate.  Each language is a separate layer with a different purpose.  (I.e. CSS is for styling)  The three layers form the approach called *progressive enhancement.*

Javascript is usually located between opening and closing `<script>` tags, but it's better 

Using objects & methods:

`document.write('Good afternoon!');`

Member Operator   |    Parameters

**Javascript runs where it is found in the html**

When the browser comes across a `<script>` element, it stops to load the script and then checks to see if it needs to do anything.  

A script is a series of instructions that a computer can follow one-by-one.  Each individual instruction or stepe is known as a **statement**.  Statements should end with a semicolon.  

```
var today = new Date();
var hourNow = today.getHours();
var greeting;
```
**To type comments just press "//" before the line of code you're about to enter.**

You need to announce that you want to use a variable before you can use it.  This involves creating the variable and giving it a name.  Otherwise called **declare** a variable.  

## Comparing techniques updating html content:

`document.write()` method is a simple way to add content that was not in the original source code to the page, *but its use is rarely advised*

It is a quick and easy way to show beginners how content can be added to a page.  

* It only works when the page initially loads.
* If you use it after the page has loaded it can *overwrite the whole page, not add the content to the page, or create a new page.*
* It can cause problems with XHTML pages that are strictly validated.
* This method is generally frowned upon.

`element.innerHTML` property lets you get/update the entire content of any element (including markup) as a string.

Advantages:
* You can use it to add a lot of new markup using less code than DOM manipulation methods.
* It can be faster than DOM manipulation when adding a lot of new elements.
* It is a simple way to remove all of the content from one element (by assigning it a blank string).

Disadvantages:  
* It should not be used to add content that has come from a user as it can pose a significant security risk.
* It can be difficult to isolate single elements that you want to update within a larger DOM fragment.
* Event handlers may no longer work as intended.

DOM Manipulation refers to using a set of methods and properties to access, create, and update elements and text nodes.

Advantages:
* It is suited to changing one element from a DOM fragment where there are many siblings.
* It does not affect event handlers.
* It easily allows a script to add elements incrementally (when you do not want to alter a lot of code at once)

Disadvantages:
* If you have to make a lot of changes to the content of a page, it is slower than innerHTML.
* You need to write more code to achieve the same thing compared with innerHTML.

**If you add HTML to a page using innerHTML (or several jQuery methods) you need to be aware of ***Cross-Site Scripting Attacks*** or XSS; othewise, an attacker could gain access to your users' accounts.**  *Refer to page 228-229*

**Make sure to write comments to explain what your code does.**

## JavaScript Lessons:

Data Types

- There are 5 data types in JS.
  - **Strings**
    - `var string = 'words'`
    - `var otherstring = 'another one'`
  - **Numbers**
    - `var number = 10`
    - `var decimal = 10.2`
    - `var decimal = 1/2`

  - **Booleans**
    - True
    - False
    - `var isBoolean = true`

  - **null**
  - **undefined**

### Conditional Statements

- if / else / if else
- flow control
  - What lines of code are going to be run in our js engine

  ``` javascript

  if (true) {
    console.log('This statement will run)
  } else {
    console.log ('This statment will not run')
  }
  ```
```
// == this is a way to evaluate two sides of a statement

var aBigNumber= 1000

if (0 == 1) {
  console.log('this will never be true');
} else {
  console.log('this should run just fine');
}

var UsersNumber = prompt('Guess a number');
if (UsersNumber == 1000) {
  console.log('You guessed correctly');
} else {
  console.log('Not quite');
}
// Guessing
if (UsersNumber != 1000) {
  console.log('not quite');
}
```
`typeof(UsersNumber)` *// returns the datatype of whatever is in the parenthesis.*

Switch statements
Lets you define a large amount of conditions to evaluate.

```
var Num = 12;

switch (Num) {
  // these always check for exact matches
  case 10:
    console.log('the number is 10');
    // if we don't want cases below the catches case to execute, we need a break
    break;
  case 11:
    console.log('the number is 11');
  case 12:
    console.log('the number is 12');
  default:
    console.log('number didn't equal any of the above');
}
```

- Arrays
  - Let you store more than one piece of data in the same spot.
  `var arrayOfNumbers = [2,4,6,8,9,10]`
  - We reference the discreet items in the array with an index number

  `arrayOfNumbers [0] => 2`
  `arrayOfNumbers[5] => 10` //How many spaces to move
  `arrayOfNumbers.lenght` <--- To check the lenght of the array
