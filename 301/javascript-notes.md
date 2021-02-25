## jQuery

jQuery is a JavaScript file that I can include to my web pages.  This file allows us to write less code while doing the same job as vanilla JS.  With jQuery, you can grab an element from the html then add methods.  The syntax looks more like CSS than JavaScript and the code looks cleaner and easier to read.  The following is an example of jQuery syntax:

```javascript
$('element').addClass('parameter');
```
We add the file to the html the following way:

```html
<script src="js/jquery-3.5.1.js"></script>
<script src= "js/app.js"></script>
```
According to our text, jQuery is very popular and about 96% of the websites online today use it.  jQuery's motto is "write less, do more" because it allows us to achieve our goals in fewer lines.

To check that the page is ready to work with our code we use:

```javascript
$(document).ready(function(){
  //script goes here
});
```
We can host our own jQuery files or use a Content Deliver Network or CDN to accomplish this.  CDN is a series of servers spread out around the world.  The purpose of these is to serve static files quickly.  You should place your CDN script at the bottom of the body of the page so that the website loads quicker.  Also, if you place it earlier on the page, some elements might not be accessed as they haven't loaded when the script is called.  

## Mustache

Mustache is a type of template syntax.  It expands tags in a template using values provided in a hash or object.  It is **logic-less** because it does not use `if`, `else`, or `loops`.  Tags can be replaced with a value or multiple values.  According to the reading, mustache is considered the base for JavaScript templating.  It supports multiple languages as well so you can reuse it.  The syntax looks something like:

```javascript
Mustache.render("Hello, {{name}}", { name: "Sherlynn" });
```
We see two braces around `{{name}}` which means it is a placeholder.  The placeholder gets replaced with an actual value `{{Mario}}`.  

Source: https://1sherlynn.medium.com/javascript-templating-language-and-engine-mustache-js-with-node-and-express-f4c2530e73b2

## Functional Programming:

According to Wikipedia, functional programming is a programming paradign - a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

**Pure functions** - They return the same result if given the same arguments or `deterministic`.  Do not cause any observable side effects.  In constrast, an impure function uses flobal objects that are not passed as a parameter to the function.  The result of that is that if one changes the values of global objects, your function will have different results.  

Pure functions do not read external files as the contents may change.  Functions that rely in random number generators cannot be pure.  Another characteristic of these functions is that they don't cause any observable side effects such as modifying a global object or parameter passed by reference.

### Some benefits of pure functions are:

- The code is easier to test.

- The code does not change - *immutable*

- Pure functions will always have the same output given the same input - *referential trnasparency*.  

- Functions are treated as values and used as data - *firs-class entities*.

```javascript

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4
```

Higher-order functions can take one or more functions as arguments or return a function as its result.  The `doubleOperator` function above is considered a higher-order function because it takes an operator function as an argument and uses it. 

When refactoring JavaScript for performance and readability, you want to build your code in a way that is easier to read in English.  Some strategies that we can implement are:

- Returning early from functions as shown below.

```javascript

function showProfile(user) {
  if (user.authenticated === true) {
    // ..
  }
}

// Refactor into ->

function showProfile(user) {
  // People often inline such checks
  if (user.authenticated === false) { return; }
  // Stay at the function indentation level, plus less brackets
  ```

- Cache variables so functions can be read like sentences.

```javascript

function searchGroups(name) {
  for (let i = 0; i < continents.length; i++) {
    const group = continents[i]; // This code becomes self-documenting
    for (let j = 0; j < group.length; j++) {
      const tags = group[j].tags;
      for (let k = 0; k < tags.length; k++) {
        if (tags[k] === name) {
          return group[j].id; // The core of this nasty loop is clearer to read
```

- Check for web APIs before implementing your own functionality

```javascript

function cacheBust(url) {
  return url.includes('?') === true ?
    `${url}&time=${Date.now()}` :
    `${url}?time=${Date.now()}`
}

// Refactor into ->

function cacheBust(url) {
  // This throws an error on invalid URL which stops undefined behaviour
  const urlObj = new URL(url);
  urlObj.searchParams.append('time', Date.now); // Easier to skim read
  return url.toString();
}
```

Sources:

https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa

https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec
