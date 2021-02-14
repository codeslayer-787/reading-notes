## Responsive Web Design:

Responsive web design is the practice of building a website suitable to work on every device and every screen size.  Being able to design a website that can be enjoyed by most people regardless of their device should be a goal for most of us (especially as junior developers.)  A responsive web site should react quickly and positively to any change while an adaptive one is built to a group of preset factors.  A good way to remember what a non-responsive website looks like would be to remember when the iPhone first came out.  Very few websites would display correctly on the Safari browser for the first few years.  The responsive web design approach fixes this and negates the need for a mobile website (like they used to do back in the day.)

Responsive Web Design is broken down into three main components, including flexible layouts, media queries, and flexible media.  An interesting aspect of RWD is that you don't set pixel values to measurements.  Instead, you use the following calculation: 

`target / context = result`

By dealing with percentages rather than pixels, we eliminate the constraints that are placed by us when we design.  

Media queries were built as an extension to media types commonly found when targeting and including styles.  These will allow us to apply uniquely targeted styles for individual browser and device circumstances.  We can use logical operators in media queries to help build powerful expressions.  There are three logical operators we can use with media queries: `and`, `not`, and `only`.  Using the `and` logical operator within a media query allows an extra condition to be aded.  The `not` logical operator negates the query, specifying any query but the one identified.  The `only` logical operator can be used to select items for a specific purpose (i.e. show something in portrait mode only.)

## Floats:

Floats allow us to wrap text around images.  According to the reading, it can be used to create entire web layouts as well. Floats should be used for smaller instances rather than format the entire page.  The Flexbox and Grid tools are more powerful for formating your web page than just using floats.  Using the `clear` property, you can "break" the float and add elements without having them wrap around the floated element.  You can set the direction for the `clear` in case you want something to not follow the float only from one direction.  

### Clearing floats:

- The Empty Div Method is just an empty dive `<div style="clear: both;"></div>
- The Overflow Method relies on setting the overflow CSS property on a parent element.
- The Easy Clearing Method uses a CSS pseudo selector (`:after`) to clear floats.  `.clearfix:after {`

