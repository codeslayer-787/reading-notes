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

According to Wikipedia, functional programming is a programming paradigm - a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

**Pure functions** - They return the same result if given the same arguments or `deterministic`.  Do not cause any observable side effects.  In contrast, an impure function uses global objects that are not passed as a parameter to the function.  The result of that is that if one changes the values of global objects, your function will have different results.  

Pure functions do not read external files as the contents may change.  Functions that rely in random number generators cannot be pure.  Another characteristic of these functions is that they don't cause any observable side effects such as modifying a global object or parameter passed by reference.

### Some benefits of pure functions are:

- The code is easier to test.

- The code does not change - *immutable*

- Pure functions will always have the same output given the same input - *referential transparency*.  

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

## Call Stack

A call stack keeps track of its place in a script that calls multiple functions.  When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.  Functions that are called by that function are added to the call stack further up and run where their calls are reached.  When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.  

In Asynchronous JavaScript, we have a callback function, an event loop and a task queue.  The callback function is acted upon by the call stack during execution after the call back function has been pushed to the stack by the event loop.  For example:

```javascript

function firstFunction(){
  console.log("Hello from firstFunction");
}

function secondFunction(){
  firstFunction();
  console.log("The end from secondFunction");
}

secondFunction();
```

A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point.  The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.  For example, the following code will result in a stack overflow error:

```javascript

function callMyself(){
  callMyself();
}

callMyself();

```

## JavaScript Errors:

There are several types of error messages:

- Reference errors occur when you try to use a variable that is not yet declared.

  - `console.log(foo) // Uncaught ReferenceError: foo is not defined`

- Syntax errors occur when there is text that cannot be parsed in terms of syntax.

  - `JSON.parse( {'foo': 'bar'} ) // Uncaught SyntaxError: Unexpected token o in JSON at position 1`

- Range errors occur when you try to manipulate an object with some kind of length and give it an invalid length.

  - `var foo= [] foo.length = foo.length -1 // Uncaught RangeError: Invalid array length`

- Type errors occur when the types (numbers, string, etc.) you're trying to use or access are incompatible.

  - `var foo = {}`
`foo.bar // undefined`
`foo.bar.baz // Uncaught TypeError: Cannot read property 'baz' of undefined`

Sources:  

https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/

https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c

## Embeded JavaScript Templating (EJS)

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.  EJS features simple syntax through scriptlet tags.  Another advantage of EJS is that it's easy to debut because errors display as JS exceptions.  EJS also caches the intermediate JS functions which makes them faster to execute.  Support also seems to be great for EJS as it is constantly improved.  

To use in a script tag:

```javascript
<script src="ejs.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'];
  let html = ejs.render('<%= people.join(", "); %>', {people: people});
</script>
```

You can also install EJS with NPM `npm install ejs`.  The video series showed some simple uses such as creating new tags and modifying them through JS.  Overall it seems very interesting and not terribly hard to learn how to use.  See example below for a simple demo on rendering HTML strings through EJS.

```javascript
let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});
```

Sources:

https://www.youtube.com/watch?v=tJM2wqzPiJk

https://ejs.co/

## EJS Partials:

Partials are native to EJS.  Some of the common uses are for reusable items such as nav bars and footers.  The following example adds a partial header and footer to existing html:

```html
<!-- views/home.ejs -->
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Node.js Blog</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <style>
            body {
                padding-top: 20px;
                padding-bottom: 20px;
            }
            .jumbotron {
              margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <%- include('partials/navbar') %>
            <div class="jumbotron">
                <h1>All about Node</h1>
                <p class="lead">Check out our articles below!</p>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="list-group">
                      <!-- loop over blog posts and render them -->
                      LIST_OF_POSTS
                    </div>
                </div>
            </div>
            <%- include('partials/footer') %>
        </div>
    </body>
    </html>
```

As we can see, we still use the "ice cream cone" punctuation, but with a `-`.  It is important to use the minus sign when using the `include()` statement since we don't want EJS to escape our html characters like `<,>`, etc.  

Sources:

https://medium.com/@henslejoseph/ejs-partials-f6f102cb7433

https://www.youtube.com/watch?v=3_xEEH4fTEk&t=0s&index=7&list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt

## Sending Form Data

On the client side, the `<form>` element defines how the data will be sent.  It's most important attributes are `action` and `method`.  The action attribute defines where the data gets sent.  In the following example, the data is sent to an absolute URL vs a to a relative URL below:

```javascript
//Absolute URL

<form action="https://example.com">
```

```javascript
//Relative URL
<form action="/somewhere_else">
```

The method attribute defines how data is sent.  The two most common ways data is sent are the `GET` and the `POST` methods.  The GET method is the method used by the browser to ask the server to send back a given resource.  

```javascript
<form action="http://www.foo.com" method="GET">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi">
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom">
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

The POST method is a little different in that it's the method the browser uses to talk to the server when asking for a response that takes into account the data provided in the body of the HTTP request.  See the following example:

```javascript
<form action="http://www.foo.com" method="POST">
  <div>
    <label for="say">What greeting do you want to say?</label>
    <input name="say" id="say" value="Hi">
  </div>
  <div>
    <label for="to">Who do you want to say it to?</label>
    <input name="to" id="to" value="Mom">
  </div>
  <div>
    <button>Send my greetings</button>
  </div>
</form>
```

