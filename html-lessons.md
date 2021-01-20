# HTML Lessons Learned

HTML stands for Hyper Text Markup Language.  It adds data/content to a website.  While I can work using the same console and tools such as VS Code for both Git and HTML, these are two different things. HTML has lots of brackets to organize and categorize the data.  

**Always use index.html to create your main page!**

**Do not use Github to create anything other than repositories!**

## Before Starting to Create an HTML Website:

* Make sure you know the purpose of the website
* Know your client
* Know your audience
* Create a wireframe of the website
* Make sure your design helps communicate your message

## The Language:

* HTML utilizes brackets "(tags)"
* Tags are like containers and will communicate things about the information inside
* Each tag will have an open and a closing
* Some tags utilized today include:
  * html
  * body
  * h1 or h2, etc.
  * p
  * li
  * ul
  * nav
  * main
  * img
* The main parts so far learned are head, header, body, and footer.  We can also add articles that act like containers.  These can be stand alone or nested.  

## Layout:

Use the wireframe that I've created and add the code to make it happen!  To suscessfully create a layout I should use dividers "div".  

***placeholder websites are very useful if I'm not sure about what image to use at the moment.***

## CSS Layout Pt 2

### Fixed vs Liquid Layouts

#### Fixed width layout

These do not change size as the user increases or decreases the size of their browser window.  
  - Advantages
    - Pixel values are more accurate when sizing objects
    - I have far greater control over the appearance and position of items
    - You can control the lenghts of lines of text regardles of the size of user's windows
    - The size of an image will always remain the same relative to the rest of the page

  - Disadvantages
    - You can end up with big gaps around the edge of the page
    - If the user's screen is a much higher res than the designer's screen, the page can look smaller
    - If a user increases font sizes, text might not fit into the alloted spaces
    - The design works best on devices that have a site or resolution similar to that of desktop and laptop computers
    - The page will often take up more vertical space than a liquid layout
  
#### Liquid Layout

Liquid layout designs stretch and contract as the user increases or decreases the size of their browser.

  - Advantages
    - Pages expand to fill the entire browser window so there are no spaces around the page
    - If the user has a small window, the page can contract to fit it without the user having to scroll to the side
    - The design is tolerant of users setting font sizes larger than the designer intended
  - Disadvantages
    - If you do not control the width of sections on the page, the design could look very different than intended
    - If the user has a wide window, lines of text can become very long... Harder to read
    - If the user has a very narrow window, words may be squashed and end up with only a few words accross every line
    - If a fixed width item is in a box that is too small to hold it, the image cna overflow over text