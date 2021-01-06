# CSS Lesson:

*A good website to get inspiration from is "http://www.csszengarden.com/"*

*hint - focus on functionality first then work on html and CSS.*

CSS is about style while html is about the structure. 

CSS associates rules with HTML elements.  A CSS rule contains two parts: **a selector and a declaration**

For example:

selector:
**p**

Declaration
**{font-family: Arial;}**

I can code html and CSS separatedly by creating an *index.html* file and a *styles.css* file then reference the CSS file in my HTML code. Use href to link them.  This is not necessary as I can also code CSS internally.

When using CSS you mainly use type and rel (relationship) to work.

## CSS Rules Cascade:

Last Rule - If the two selectors are identical, the latter of the two will take precedence.

Specificity - If one selector is more specific than the others, the more specific rule will take precedence over more general ones.

**IMPORTANT** - You can add !important after any property value to indicate that it should be considered more important than the other rules that apply to the same element.  **Understanding this will allow me to write simpler style sheets because I I can create generic rules that apply to most elements and then override the properties of individual elements that need to look different.**

Inheritance - If you specify the font-family or color properties on the <body> element, they will apply to most child elements.

***It is advantageous to use external style sheets.***

## Specifying Color:

Foreground color - Allows you to specify the color of text inside an element.

Background color - Selects the background color for that box.  If I don't select a background color then the default will be transparent.  By default, most browser windows have a white background.

CSS will allow me to choose from a color pallette or go from an RGB picker...

I can also specify the opacity of my colors using RGBA.
