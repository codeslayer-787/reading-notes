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