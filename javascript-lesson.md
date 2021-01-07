# Javascript

Javascript is pretty much like the other editors we've been using in the sense that it is a plain text language.  It adds functionality to my website.  You can add dynamic functions such as greetings, input, objects, and methods **(calling a method of an object)**.  

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

