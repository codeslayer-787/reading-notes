## In Tests We Trust:

Unit tests are pieces of code to exercise the input, the output and the behavior of your code.  Test-Driven Development is a strategy to think and write tests first.  One aspect to think about when writing tests is that the names should be a descriptive as possible.  For example, if we are working on a module called `gender.py`, our test name should be `test_gender.py`.  

A convention widely used is the AAA: Arrange, Act and Assert.

**Arrange:** You need to organize the data needed to execute that piece of code.

**Act:** You will execute the code being tested.

**Assert:** After executing the code, you will check if the result is what you were expecting.

### The TDD cycle:

* Write a unit test and make it fail (because there are no features)
* Write the feature and make the test pass.
* Refactor the code 

While it might be harder to learn to write code this way, it can save us a lot of time down the road as we are less worried about chasing bugs.  The code will also be more reliable.

## Recursion:

Recursion can be defined as th process of defining something in terms of itself.  Like when you put two mirrors in front of each other.  You can use recursion to find the factorial of an integer.  Factorial of a number is the product of all integers from 1 to that number.  An example of the syntax:

```python
def factorial(x):
    """This is a recursive function
    to find the factorial of an integer"""

    if x == 1:
        return 1
    else:
        return (x * factorial(x-1))


num = 3
print("The factorial of", num, "is", factorial(num))
```

**Advantages:**  Recursive functions make code look clean and elegant.  Also, you can use recursion to break down complex problems.  Sequence generation is easier with recursion than using some nested iteration.

**Disadvantages:**  The logic behind recursion can be hard to follow through.  Recursive calls are expensive as they take up a lot of memory and time.  Recursive functions are hard to debug.

## FileIO & Exceptions:

Files on most modern file systems are composed of three main parts:

* Header: metadata about the contents of the file (file name, size, type, etc.)
* Data: contents of the file as written by the creator or editor
* End of file (EOF): special character that indicates the end of the file

A file path is required when accessing a file on an operating system.  It's composed of three major parts:

* Folder Path: the file folder location on the file system where subsequent folders are separated by a forward slash or backslash
* File name: the actual name of the file
* Extension: the end of the file path pre-pended with a period to indicate the file type.

Some of the syntax for opening, editing, and closing files in Python:

* To open a file: `file = open('dog_breeds.txt')` 
* To close the same file `reader.close()`

A buffered binary file type is used for reading and writing binary files.  

```python
open('abc.txt', 'rb')

open('abc.txt', 'wb')
```
A raw file type is generally used as low-level building block for binary text streams.  To open them in Python you can use `open('abc.txt', 'rb', buffering=0)`  There are multiple methods to be called on files:

* `.read(size=1)` This reads from the file based on the number of size bites.

* `.readline(size=1)` This reads at most size number of characters from the line.  This continues to the end of the line then wraps back around.

* `.readlines()` This reads the remaining lines from the file object and returns them as a list.

### Python exeptions:

Python programs terminate as soon as they encounter an errorl.  In Python, an error could be a syntax error of an exeption.  A syntax error looks like `SyntaxError: invalid syntax` while an exeption could be a zero division error such as `SyntaxError: invalid syntax`.  

We can raise an exeption using `raise` if a condition occurs.  An example could be:

```python
x = 10
if x > 5:
    raise Exception('x should not exceed 5. The value of x was: {}'.format(x))
```

Like in other languages, Python has a version of the try and except block.  Python executes code following the try statement as normal part of the program.  The code that follows the except statement is the program's response to any exceptions in the preceding try clause.

```python
def linux_interaction():
    assert ('linux' in sys.platform), "Function can only run on Linux systems."
    print('Doing something.')
```
The block above asserts that the operating system should be ran on Linux.  We can use try and except to just to pass that function without crashing.

```python
try:
    linux_interaction()
except:
    pass
```
Instead of just passing a blank screen, you could add a message to the user.

```python
try:
    linux_interaction()
except:
    print('Linux function was not executed')
```
Once an error occurs, the except block wakes up and prints a message for the user.  

## Classes and Objects

Objects are an encapsulation of variables and functions into a single entity.  Objects get their variables and functions from classes.  

Syntax: 
```python
class MyClass:
    variable = "blah"
    def function(self):
        print("This is a message inside the class.")

myobjectx = MyClass()

print(myobjectx.variable)

```

You can create multiple objects that are of the same class.  However, each object contains independent copies of the variables defined in their class.  

```python
class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")
myobjectx = MyClass()
myobjecty = MyClass()

myobjecty.variable = "yackity"

# Then print out both values
print(myobjectx.variable)
print(myobjecty.variable)

```

To access a function inside of an object, you use notation similar to accessing a variable.

```python
class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")

myobjectx = MyClass()

myobjectx.function()
```
The example above will print "This is a message inside the class" through the variable below.  You can create multiple objects from that same class that have their own set of values.  In this case, myobjectx becomes its own thing and we access the function we want from it by using the dot notation.  

## Thinking recursively in Python:

One of the main ideas of recursion is that we can break a problem into manageable pieces.  In the Santa and the elves example, we are presented with an iterative version of Santa delivering gifts.  

```python
houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]
def deliver_presents_iteratively():
    for house in houses:
        print("Delivering presents to", house)
```

This is one way to get the job done, but recursion allows us to break down the work (and therefore raising efficiency) into smaller pieces:

```python
houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]

# Each function call represents an elf doing his work 
def deliver_presents_recursively(houses):
    # Worker elf doing his work
    if len(houses) == 1:
        house = houses[0]
        print("Delivering presents to", house)

    # Manager elf doing his work
    else:
        mid = len(houses) // 2
        first_half = houses[:mid]
        second_half = houses[mid:]

        # Divides his work among two elves
        deliver_presents_recursively(first_half)
        deliver_presents_recursively(second_half)
```

A recursive function is a function defined in terms of itself via self-referential expressions.  The large problem is broken down into successively less complex ones, those sub-problems must eventually become so simple that they can be solved without further subdivision.  When dealing with recursive functions, keep in mind that each recursive call has its own execution context.  You can maintain state by threading the state through each recursive call so that the current state is part of the current call's execution context and keeping the state in global scope.  Below is an example of threading:

```python
# Global mutable state
current_number = 1
accumulated_sum = 0


def sum_recursive():
    global current_number
    global accumulated_sum
    # Base case
    if current_number == 11:
        return accumulated_sum
    # Recursive case
    else:
        accumulated_sum = accumulated_sum + current_number
        current_number = current_number + 1
        return sum_recursive()
```
A data structure is recursive if it can be defined in terms of a smaller version of itself.  A list as we know by now is a type of recursive data structure.  Naive recursion indicates that we can write recursive functions that recompute values unnecessarily.  A more correct way for us to make the same function would've been:

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_recursive(n):
    print("Calculating F", "(", n, ")", sep="", end=", ")

    # Base case
    if n == 0:
        return 0
    elif n == 1:
        return 1

    # Recursive case
    else:
        return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
```

In the case above, lru_cache is used as a decorator that catches the results.  We avoid recomputation by explicitly checking for the value before trying to compute it.  