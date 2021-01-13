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
