# Javascript

Javascript is pretty much like the other editors we've been using in the sense that it is a plain text language.  It adds functionality to my website.  You can add dynamic functions such as greetings, input, objects, and methods **(calling a method of an object)**.  It can make the web page feel interactive by responding to what the user does.

## A script is a servies of instructions!

### **The following is an example of Javascript inside a website (Constructive & Co.)**

`var today = new Date();`

`var hourNow = today.getHours()`

`var greeting;`

`if (hourNow > 18) {`

`    greeting = 'Good evening!';`

`} else if (hourNow > 12) {`

`greeting = 'Good afternoon!';`

`} else if (hourNow > 0) {`
`    greeting = 'Good morning!';`

`} else {`
`    greeting = 'Welcome!';`

`}`

**The following is an example of a textbox greeter.**

```
document.write('<h3>' + greeting + '</h3>');

let userName = prompt ('Please Enter Your Name')

document.write(userName)

if (userName == 'Irwin'){
    document.write('<h3'> + 'Welcome Darth Irwin' + '</h3>');
} else if (userName != 'Irwin'){
    document.write('<h3>' + 'Welcome Guest' + '</h3>')
} 
```

*link javascript to your html page with a command like ```<script src="document-name.js"></script>```*

## How Javascript makes web pages more interactive:

* You can select any element, attribute, or text from an HTML page.

* You can add elements, attributes, and text to the page, or even remove them.

* You can specify a set of steps for the browser to follow (like a recipe)

* You can specify that a script should run when a specific event has occurred (I.e. a cursor hovers over an element)

### Some examples of what javascript does:

* Slideshows

* Forms

* Reload part of a page (user doesn't need to refresh the page to make it show a new set of information)

* Filters data to be displayed instead of showing irrelevant stuff to the user.

To write a script, you need to first state your goal and then list the tasks that need to be completed in order to achieve it.  **Always start with the big picture of what I want break it down to smaller steps**

