# Operatos & Loops:

Operators are used to make decisions inside my code.  This can be as simple as "if-then" statements.  These decisions can be useful to tell the code to run a specific line once a condition is met.  

**MOST OF MY LOOPS WILLS START AT 0**

**While Loop**

It will test an expression then do the body, then test it again.  If false, then it will exit the loop.  

*An enter password loop can be an example of this.*

A *Do while Loop* does the loop inside a regular while loop.

A *for Loop* has a counter.  After the loop has been ran the number of times especified, then it will exit.  
i = 0      is i equal or same as 12?  i will add 1 until the condition is met
`for (let i = 0; i <= 12; i = i + 1) {`
    `console.log(i * 8);`
`}`

> While loop:

    name = 'Irwin'
    "Irwin"
    while(name == 'Irwin'){
    name = 'Irwi' <----- Stops the loop
    }

    while (x > 0){
            x--;
    }

    do {
        console.log(x);
            x++;
    }
    while(x < 11)

Once the number 13 is reached the loop stops.

> Inside javascript:
    function printNumbers(){
        for(let i = 0; i < 10; i++){
            document.write ('<li>) + i + '</li>
        }
    }

    let correctAnswer = 34;

    function guessingGame(){
        let useranswer = prompt('Please select a number 1 - 100');
        while (userAnswer < 1 || userAnswer > 100){
            userAnser = prompt('Incorrect.  Please select a number 1 -100');
        }
        let numberOfGuesses = 8        <---- 8 tries
        for(let i = 0; i < numberOfGuesses; i++){
            if (userAnswer < correctAnswer){
                alert('Sorry, too low')
        }
    }

>To Exit out of a loop put the line below the right answer:

break;

## Conditional Statements:

There are two components to a decision:
1. An expression is evaluated, which returns a value (if/then statements)

2. A conditional statement says what to do in a given situation (pg. 150)

>Some operators are:

    == Is equal to
    != Is not equal to
    === Strict equal to
    !== Strict not equal to
    > Greater than
    < Less Than
    >= Greater than or equal to
    <= Less than or equal to

## Logical Operators:

Comparison operators usually return single values of true or false.  Logical operators allow you to compare the results of more than one comparison operator.  For example: The && operator will compare two expressions to check if they are true or false then return true only if BOTH are true.  

>Some Logical Operators are:

    &&  If both are true then TRUE
    ||  Logical or (At least one condition)
    ! Logical Not


