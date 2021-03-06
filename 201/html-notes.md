# Basics of HTML, CSS & JS

When possible, try to keep your html, css, and Javascript files separate.  Each language is a separate layer with a different purpose.  (I.e. CSS is for styling)  The three layers form the approach called *progressive enhancement.*

Javascript is usually located between opening and closing `<script>` tags, but it's better 

Using objects & methods:

`document.write('Good afternoon!');`

Member Operator   |    Parameters

* Keep formatting of html file
* **For live server to work, must have index.html**
* Use accents "backticks" to add code blocks.
```"This is my code block" ```



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

  ## HTML / CSS Box Model

  * How to position elements among other elements.
  * Each element is a box.  It has a height and a width wich equates to a number.
  * Each different element type has a different default property for these numbers.
  * The CSS properties that control a box element
    * Margin -  Space between the element content, and any adjacent element.  
    * Padding -  The space between the content itself and it's surrounding box.
    * Border - A line around the content.
    * Height & Width - How Much space the actual content takes up.

`<div>` Is more of a horizontal division rather than vertical.  It wants to take as much space to the sides as possible.

*inline* elements are not allowed a width and a height...  They will display funky if you do!

`clear: left;` or `clear: right;` to ignore float elements around them...

## Links

You can create links using the `<a>` element.  I can specify which page I want to link using the href attribute.  

`<a href="http://www.me.com">About Me</a>`  <--- This is an example on how they should look like.

The text after the link is what the user will be able to see.  It's a good idea to make it describe what they will see once they click.

I can link other sites like in the description above, or I can link to other pages within my website.  Websites use more or less the same file system we've been using right now.  

```html
<a href="index.html">Home</a>
<a href="about-us.html">About</a>
```
Again, the directories work basically the same way they do on Windows.  Use forward slashes to go to child directory, use periods to go to the parent or grandparent directory.

For emails use something like:

`<a href="mailto:irwin_ayala@yahoo.com">Email Me</a>`

To open links in a new window:

`<a href="http://www.gas.com"target="_blank">Give it Gas!</a>`

## Layout

CSS has the following positioning schemes:

* Normal flow:  Every block-element appears on a new line.  One below the other.  This is the default.
* Relative positioning: This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left. This one doesn't affect the position of other elements.
* Absolute positioning: Positions the element in relation to its containing element.  It is taken out of normal flow, but doesn't affect the flow of other elements.
* Fixed positioning:  This is a form of absolute positioning that positions an element.  Elements do not move when the window is scrolled up or down.  
* Floating elements:  Floating elements allows you to take an element out of normal flow and position it left or right of a containing box.  The floated element becomes a block level element around which other content can flow.

There are several considerations when applying any of these positioning schemes such as screen sizes and resolutions.

## Functions:

Functions let you group a series of statements together to perform a specific task.  You can reuse functions if you need to repeat it.

Remember that you need to declare a function then call it below your code.

To call it simply use the function name and follow it by a parenthesis:

`sayHello();`

Where things start getting a bit more complicated is when you need to declare functions that need information.  At this point you need to add parameters inside the parentheses.  When calling the function, I need to specify the values to be used inside the parentheses.

```javascript
function getArea(width, height){
  return width * height;
}
```

Calling it:

```javascript
getArea(3, 5);
```

## CSS Layout

#### The CSS Position properties:

  - Dictate the flow of a number of elements
    - Absolute: positions the element outside of the normal flow of elements around it and anchors the element to it's parent element
    - Fixed: I want the element to stay put regardless if I scroll up or down
    - Relative: Keeps the element within the normal flow, but allows positioning with left and right.  Allows the element to be an anchor point for absolute positioned elements.
    - Static:  They follow a consistent flow that is preserved with the elements around it, but will not be usable as absolute element anchor points.
    - Sticky: It's a combination of fixed and absolute.  It anchors to its parent and becomes a fixed item more or less.

#### The Span and Div elements are very similar.  

`div ~ span` Make changes to every span element preceeded by a div.  If there's no div before, then no changes will be done to the span.

`div + span` Make changes to both div and span elements.

It is better to reference a cheat sheet for this... 

`input` creates a box.   `input type=` defines the input type wether textbox and among others.

`div hover` this puts a "shadow" whenever my mouse hovers over it.

### Images

I can add the images and have them size to the desired size maintaining their width by just setting the `height` property in CSS

### Git Branching

Github will keep track of the `head` and branches.  A code file can have multiple itterations by different developers.  Those will become the `head` once the owner accepts the changes.

These are the steps:

- All my files should already be on the `main` branch.
- `git checkout -b feature-1` this creates and switches out terminal to the new branch `feature-1` (This takes code from our local, from the current branch we are on)
- We work on the code
- After we are done, we push to the feature branch `git push feature-1`
- If we chose to move catch `main` up with a pull request
- If we want to work on antoher feature, we can run `git-checkout -b feature-2`
- Once we are completely finished, we want to make our Pull Request

## Images

I've learned that I can get images for my website via url or from my own computer (must upload them to work).  The `<img>` element is the way to do it using html.  The final bracket will look something like `<img src="images/whatever.jpg">`  It will look something similarly if I use an image from another website.  I can resize the image in the html file or even better modify it in the CSS file using an id tag.  

*Note: If you resize only the heght property, the image will automatically relize the width to the original aspect ratio.*

An image can be a block element by itself or within another block.  An inline image element will display it as it was another character in my text...  

### Three rules for creating images:

- Save images in the right format
- Save images at the right size
- Measure images in pixels

The best way to modify or crop the images themselves, is to edit them in Gimp and then save them once I'm happy.

## Color

Color can bring my page to life.  Through CSS, I can modify the colors for the background, foreground, text, and individual elements.  The code will look something like:

```css
body {
  background-color: black;
}
```
I can chose normal colors or venture into the rgb realm until I find the right color for whatever I'm trying to do.  

Another property in CSS is HSL (Hue, Saturation, Lightness.)

## Text

The properties that allow yoiu to control the appearance of text can be split into two groups:

  - Those that directly affect the font and its appearance.
  - Those that would hav ethe same effect on text no matter what font you were using

We can select the font-mamily and size of type.  CSS has multiple types that you can scroll down and select from the menu.  *Note: You have to make sure your text will be compatible with a good amount of browsers.*  Not every browser will be compatible with a font type.  There are quite a few that are compatible with most, so you should always look for those rather than venturing into newer types.  Not every font is clearly legible inside your browser, so you have to test run and think of the text as if you were some farmer in Wyoming reading the page.

### Wrapper class.  You can use this to divide and stylize div's a certain way.

You can further stylize using sub branch classes.  IE "hero" 
`section.blade.hero`

## Forms

A user can fill in a form then press a button to submit the information to the server.  They may have several form controls.  The server needs to know which piece of inputted data corresponds with which form element.  There are several types of form inputs.  

- Text input `<input type="text">`
- Password Input `<input type="password">`
- Text Area `<textarea>` (a block of text I.e. Comments)
- Radio Button `<input type="radio">`
- Checkbox `<input type="checkbox">`
- Drop Down List Box `<select>`
- Multiple Select Box `<select multiple="multiple">`
- File input box `<input type="file">`
- Submit button `<input type="submit">`
- Image Button `<input type="image">` (sylish button with textbox)
- Button `<button>`

Please refer to chapter7 in the HTML book for more types of input.

Forms can be grouped by adding a `<fieldset>` element.  This is useful to make the input options obvious to the user or even stand out a little.

## Float Vs Flex Layouts

Float:  Float is the property that displays text to people sort of like newspaper.  It takes a blocks and places it left or right relative to it's adjacent element.

Flex:  How do mobile layouts perform well?
- still handles every container as a separate box. 

## Images 

You can control the size of images within CSS just like you can any other box.  Specifying image sizes helps pages load more smoothly because the HTML and CSS code will often load before the images, and telling the browser how much space to leave for an image allows it to render the rest of the page without waiting for the image to download.

To align images using CSS we can use the float property.  New classes are created with names such as align-left to align the images.  These class names are used in addition to classes to indicate the size of an image.  You can ise the text-align property for the containing element.  You can also center an image chosing `auto` for both margin left and right.  You can use a background image and manage properties like position, repeat images, color gradients, and contrast.  

## Practical Information

Search engine optimization or (SEO) is the practice of trying to help your site appear nearer the top of search engine results.  

**On-page techniques** are the best methods you can use on your web pages to improve their rating in search engines.  Search engines rely heavily on the text inside our web pages.  We should research what are commonly used keywords for the subject or product I'm building a website for.  You can identify keywords by brainstorming, organizing, researching, comparing, refine, and map phrases or words.  

Analytics is a good way to learn about your visitors.  You can sign up for the google analytics service to fulful this task.  Some key information includes how many visitor are coming to your site. What are visitors looking at? Where are your visitors coming from?

## Flash

Flash is a technology that added animations, video, and audio to websites.  Flash came about in the 1990's and was used to create animations.  You needed the Adobe flash software to create flash animations.  To view these animations you needed the Adobe flash player.  The interface for animation creation was very similar to Photoshop.  During the early 2000's flash began to be used for video and audio insteand of just visual animations.  Most video content seemed to be flash video during this time.  

## HTML Video and Audio

- Native support in HTML
- Host video and audio content on the web (in the cloud)
- This content can be rendered via HTML

```HTML
<video src="path/to/video.file">

<audio src="path/to/audio.file">

<video>
  <source src="path/to/a/video.file">
  <source src="path/to/another/video.file">
  <!-- If one source element is unsopported, you can list another that hopefully will work.  -->


</video>

```

## On building the perfect team

When you evaluate the output between teams, common wisdowm tells us that a more "professional" team will accomplish more because they are able to stay on task and minimize side-talk and interruptions.  The article seems to pivot away from that notion and the results seem to indicate that good teams do not have a specific way to conduct their business.  The common thread between good teams appears to be communication.  Google found that regardless if a team is highly structured with a clear leader or fluid (without a clear leader), the effectiveness of a team can be lifted if everyone gets roughly the same opportunity to talk.  Some teams will be more personal and others more business oriented, but a good leader or manager should encourage open conversation from all team members.  Production seems lower in teams where one person took the reigns and did most of the talking.  

It seems like there is a collective IQ that does not depend on the individual IQ of its team members.  This IQ is brought up by collaboration and communication.  Teams with highly intelligent individuals who don't communicate that much have a lower collective IQ while teams with average members who collaborate and communicate more have a higher IQ.  A key takeaway for managers is to encourage the entire team to participate.  Often, senior members will comandeer meetings due to their knowledge or positions.  Managers need to prevent this from happening by openly communicating their goals and finding ways to bring everyone to the conversation.

## REST

From the article, I understand how computers interpret verbs and nowns.  A smart way to search for something on the internet is to use more nowns and less verbs (depends on the situation).  Or use one verb for multiple nowns.  Why?  Because we search for objects in our browser more often.  For example, when we search for something in Amazon.com, we don't say what the thing does (unless you don't know what it's called).  We just name what we are looking for.  Same goes to some extend when we search for an item through Google or any other search.  Google has become far more sophysticated now, but I remember the days when you had to concatenate your searches right for you to be able to find the actual thing you were looking for.  We should think of the search bar as a **get** entry.  We can input nowns or proper names to look for something or someone.  

## Transforms

The transform property comes in two different settings.  Two-dimensional and three-dimensional.  Elements may be distored, or transformed with ether type of transofrm.  Some kinds of transforms include:

- Rotate - Rotates an element
- Scale - Changes the appeared size of an element.
- Translate - Pushes and pulls an element in different directions without interrupting the normal flow of the document
- Skew - distorts elements on the horizontal axis
- 2D Cube - Creates a 2D cube like the ones you draw on paper
- Transofrm Origin - Can accept one or two values
- Perspective - Needed to create 3D transforms

## Transitions

With CSS3 transitions you have the potiential to alter the appearance and behavior of an element whenever a state change occurs such as when it's hovered over, focused on, active, or targeted.  Animations within CSS3 allow the appearance and behavior of an element to be altered in multiple keyframes.  You can change colors and shapes using transitions.  I.e. From a square to a circle.  Transitions can be applied in interesting ways such as animating a button going down when pressed then up when depressed or a card flipping.
