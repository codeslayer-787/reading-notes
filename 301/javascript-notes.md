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