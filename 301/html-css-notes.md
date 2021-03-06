## Responsive Web Design:

Responsive web design is the practice of building a website suitable to work on every device and every screen size.  Being able to design a website that can be enjoyed by most people regardless of their device should be a goal for most of us (especially as junior developers.)  A responsive web site should react quickly and positively to any change while an adaptive one is built to a group of preset factors.  A good way to remember what a non-responsive website looks like would be to remember when the iPhone first came out.  Very few websites would display correctly on the Safari browser for the first few years.  The responsive web design approach fixes this and negates the need for a mobile website (like they used to do back in the day.)

Responsive Web Design is broken down into three main components, including flexible layouts, media queries, and flexible media.  An interesting aspect of RWD is that you don't set pixel values to measurements.  Instead, you use the following calculation: 

`target / context = result`

By dealing with percentages rather than pixels, we eliminate the constraints that are placed by us when we design.  

Media queries were built as an extension to media types commonly found when targeting and including styles.  These will allow us to apply uniquely targeted styles for individual browser and device circumstances.  We can use logical operators in media queries to help build powerful expressions.  There are three logical operators we can use with media queries: `and`, `not`, and `only`.  Using the `and` logical operator within a media query allows an extra condition to be aded.  The `not` logical operator negates the query, specifying any query but the one identified.  The `only` logical operator can be used to select items for a specific purpose (i.e. show something in portrait mode only.)

## Floats:

Floats allow us to wrap text around images.  According to the reading, it can be used to create entire web layouts as well. Floats should be used for smaller instances rather than format the entire page.  The Flexbox and Grid tools are more powerful for formatting your web page than just using floats.  Using the `clear` property, you can "break" the float and add elements without having them wrap around the floated element.  You can set the direction for the `clear` in case you want something to not follow the float or just follow only from one direction.  

### Clearing floats:

- The Empty Div Method is just an empty dive `<div style="clear: both;"></div>
- The Overflow Method relies on setting the overflow CSS property on a parent element.
- The Easy Clearing Method uses a CSS pseudo selector (`:after`) to clear floats.  `.clearfix:after {`

## References:

https://learn.shayhowe.com/advanced-html-css/responsive-web-design/ (Links to an external site.)

https://css-tricks.com/all-about-floats/ (Links to an external site.)

https://css-tricks.com/dont-overthink-it-grids/ (Links to an external site.)

https://www.freecodecamp.org/news/css-floats-explained-by-riding-an-escalator-57fa55232333/ (Links to an external site.)

http://smacss.com/

## Flexbox

![Completed Exercise:](https://bl6pap004files.storage.live.com/y4mR-DA82u5pGKl8Os5OTMqFhqHXLSuuxvvTIy9S4fDkF4ewytXg0SGQGA_K2eRoYcoIGsyNk628hXA8tbA0XzLcKg2ueA8U1U52u2wn-4fPXvjhPzVHTOBQIvcJMwt2czI8nh-j875IuD8bJKcuZ1HW2DYlH1uMrHdEMyBLAfb1PiwIrBaQY5rGoddjln5bLhB?width=660&height=332&cropmode=none)

This exercise was an excellent way to practice the flexbox skills.  It is beautifully designed as well.  Some useful definitions are:

`justify-content` - Moves items horizontally

`align-items` - Moves items vertically

`flex-direction` - Defines the direction items are placed inside a container

`order` - Takes a specific item and moves it horizontally

`align-self` - Takes a specific item and moves it vertically

`flex-wrap` - Spreads out items to additional lines

`flex-flow` - Combines flex-direction and flex-wrap (YOLO!)

Sources:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com/

## Grid

![Grid Garden Excercise:](https://bl6pap004files.storage.live.com/y4mGCo75I-N8S2gvNk-U22KQDYw1upDQnq4qCy4g9UKT3xLRyux4WPgOEkNxHxl1vo85iq-TUE-tF06xE3r7yYFc7WE2487yJDoI5WfAlV1q7yfJyfyIveF3rpymCT8hYAmJAaOFzbsC0aBFAZ_aU5f7HDz7pE5rZBinscEjsni3j7RO3K5Kj6HIyDympY-lPPB?width=660&height=325&cropmode=none)

The grid garden exercise was a good way to experience how to build a page using the grid technique.  Some key takeaways are:

`grid-column` and `grid-row` will allow us to pinpoint a specific block and move it exactly where we want in our page if we have difficulty with it falling into place by itself.  

`grid-template` is an excellent way to assign sizes to all my elements from the same code block.  I believe this is where this techqnique really stands out from the rest.

`grid-column-start` and `grid-column-end` are really great ways to span through multiple elements.  

If we use `order`, we can move an entire class of elements (even give them negative values).  We can override the order of items within our grid.  

This exercise was challenging at some points as some calculations can get somewhat complex.  In practice, this can get tricky as you target multiple elements.  

Source:  https://cssgridgarden.com/