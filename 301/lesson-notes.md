## forEach:

It's a function that calls callback functions once for each element.

## Pair Programming:

Pair programming works on the principle that "two heads are better than one".  Two developers can work on the same project and eliminate a lot of the headaches of doing all of the work by yourself.  There are two roles:

**The navigator** - This person does not touch the code.  They are there to guide the driver and think of the big picture.  They can do other tasks as managing version control and such.

**The driver** - This person will be the one typing the code.  They are responsible for the mechanics of the code itself and follows the instructions given by the navigator.

Some of the advantages of pair programming are:

1. Greater efficiency
1. Engaged collaboration
1. Learning from fellow students
1. Improving social skills
1. Job interview readiness
1. Work environment readiness

## HEROKU

Heroku is a container-based cloud service we can use to deploy and manage our apps.  It supports Java, Node.js, Python among others.  Our applications will have a unique domain to route HTTP requests to the correct app container (dyno).  Heroku seems to be able to run the apps from the cloud reliably.  Today, we installed Heroku via shell commands.  For Windows (at least my machine) I had to run the .exe file provided in the page, then run the rest of the commands through the shell.  The service is free, but still asks for a credit card for incidentals due to too much use.  Somehow, I find HEROKU to be similar to Postgress, but with more features (so it appears.)

## Partner Power Hour:

The speaker today was Micha Goebig who spoke about impostor syndrome.  Her motivation for the lesson is that she suffered from impostor syndrome when she moved from Germany to the US.  

"I just look at all these people, and I think, what the heck am I doing here?..." -Neil Armstrong

Micha explained that 70% of people experience impostor syndrome at some point in their lives.  Something that stood out to me was when she asked who suffers from it and many of us responded "yes".  

There are 4 types of impostors:

**Perfectionist** - ...if I can't deliver 100% quality 100% of the time.

**Natural Genious** - ...if I can't do things right away with ease.

**Soloist** - ...if I can't accomplish everything on my own.

**Expert** - ...if I don't know all there is to know about my topic.

Micha expained some techniques to help us deal with the impostor syndrome.  For example, I'm a perfectionist and a soloist.  I have to learn to not to torment myself by seeking perfection at everything I do.  This one is really hard to shake off as I spent a long time in a military branch that preaches "Excellence in all we do."  While it's nice to strive towards excellence, we should not punish ourselves if we can't do everything perfectly.  As a soloist, I've been having a really hard time asking for help and this leads me deeper into the impostor syndrome as I can't reach "excellence" on my own.  This webinar was incredibly helpful and I plan to use these tools to better my experience academically, professionally, and on my personal life as well!

## Networking Opportunities (2/21/21):

Unfortunately, there are not many meetups that happen locally in North Dakota.  I chose to seach for events in areas where I'd like to move to.  The first event that I'm attending is a JavaScript code challenge that is scheduled for March 6 throgh Meetup.com.  The biggest issue with the task was to find events that don't conflict with our daily schedule.  

The second meetup I'm interested on is about how data and design go together hosted online by a group in Austin TX.  Another meetup I'd like to attend is called Accelerating Defense Innovation Monthly Meetup.  Here they talk about developing for defense companies.  I would like to attend another even called Why Creative People Make Amazing Programmers hosted by Learn to Code Colorado.  

I'm very interested in how developers talk in my native language (Spanish) so I will be attending a webinar on how the future of tech in Latin America hosted by ProductTank Mexico City.  This one will be very intersting to me as I've flirted with the idea of moving to South America and working remotely.  

## Node.Js

According to the reading:
> Node.Js is an event-based, non-blocking, asynchronous I/0 runtime that uses Google's VA JavaScript engine and libuv library.
>

Node is built on Google Chrome's V8 JS engine which is open-source.  It's called a JavaScript runtime because we can use it to execute JavaScript in our computers.

Fortunately, Node.Js was included when we installed npm in our systems early on.  Node allows us to write the most recent version of JS syntax because it has strong support for the newer versions.  The article shows us how to install Node in our computers through installing npm or binaries.  There are frameworks such as React or Angular that depend on a Node back end to run.  

Node.js' biggest use case is for running JavaScript on a server.  One big difference between Node and other runtime environments is that Node.js is single-threaded and event-driven.  Node reacts to events.  

![Node's execution model:](https://uploads.sitepoint.com/wp-content/uploads/2012/10/1516152673node_event_loop.png)

Node runs in a single thread which can crash the entire process if one blocks I/O calls.  CPU intensive operations should be handed off to a worker thread.  Some developers dislike the callback-based style of coding that JS imposes.  

Node is suited for applications that require real-time interaction or collaboration.  According to the reading, it is used for building apps that handle lots of requests that are I/O driven such as content streaming.  

Some advantages of Node.Js are speed and scalability.  Node "speaks" JSON which is the most important data exchange format right now.  Another big advantageis that JavaScript is used almost universally and Node is a perfect match for it.  In short, it is a great tool to have in our arsenal.  

Source:

https://www.sitepoint.com/an-introduction-to-node-js/