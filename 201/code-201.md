# Code 201 Reading Notes
### **Author: Irwin Ayala**

## Readings Overview:

HTML describes the structure of webpages.  As seen before, html uses elements to describe such structure.  *We are currently using html 5.*

<Tags like this act like containers.>  They describe whatever is between the opening and closing tags. 

Attributes tells us about the elements.  

`<p lang="en-us"> Paragraph in English </p>`

Above, the atribute name is "lang" and "en-us" is the attribute value.  This is a way I can use attributes to display certain things to certain people while maintaining only one website.

*You can create a website by only using a text-editor and starting with the appropriate brackets.* `!DOCTYPE html>`

Every html element can carry the id attribute.  It is used to uniquely identify that element from other elements on the page.  Its value should start with a letter or an underscore.  I have to make sure every element is unique.  I can edit these elements in CSS to format them however I want.

The class elements are pretty much like the class attributes.  This is used when I want to use an attribute more than once.  For example: `<p class="important">

Inline elements appear in the same line as neighbouring elements.

Some examples are:
```<a>, <b>, <em>, and <img>```

With the <div> element, I can group a set of elements together in one block-level box.  For example, it can contain all of the elements for the header or it could contain comments from visitors.  

`<span>` is the inline equivalent to `<div>`.

The `<nav>` element is used to contain the major navigational blocks on the site such a the primary site navigation.

```<nav>
  <ul>
    <li><a href="" class="current">home</a></li> 
    <li><a href="">classes</a></li>
    <li><a href="">catering</a></li>
    etc...
```
  
The `<article>` element acts as a container for any section of a page that could stand alone and potentially be syndicated.  This can be an individual article or blog entry, a comment or forum post, or any other independent piece of content.

The `<aside>` element has two purposes:  When used inside an `<article>` element, it should contain information that is related to the article but not essential to its overall meaning.  When used outside of an `<article>`, it acts as a container for content that is related to the entire page.

`<figure>` contains any content that is referenced from the main flow of an article.  This includes:

      * Images
      * Videos
      * Graphs
      * Diagrams
      * Code samples
      * Text that supports the main body of an article

The `<div>` element is mainly used to group together related elements.  
