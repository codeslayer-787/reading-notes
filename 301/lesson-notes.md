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

### Partner Power Hour:

The speaker today was Kris Minkel from iSoftStone.  Kris talked about staying engaged while working remote.  He mentioned how the world has changed since COVID-19 and how many workplaces switched from in-person to remote jobs.  Some tips include:

- Keeping your screen open while working.

- Check on teamates.

- Respect your teammates privacy.

- Share an interesting article or funny appropriate meme you've seen recently.

- Check in with teammates and ask them if they can use any help.

- Ask to take up extra tasks at work.

- Try and get together with your team at least once per week on video.

- Always ask if someone is available before you call them.

Kris gave some tips and ideas for not become "that person".  He also provided tips for mental health engagement.  Some tips provided were:

- Go for a walk for at least 10 minutes.

- Take your lunch away from your computer.

- Schedule times to be away from your computer to unplug.

- Make sure you can put a smile on someone's face at least twice per day.

- Say something nice and appropriate to a co-worker.

- Snack and eat healthy.

- Drink plenty of water.

## Diversity & inclusion in the tech industry:

The first article talks about how less females are coding now than before.  A fun fact is that the first actual computer programmer was Ada Lovelace who invented a computer language that could be interpreted by the first modern computer!  And she did this without a computer...  Why is this trend happening?  There's no clear answer to this problem.  The article points that the number of female computer scientists started declining as computers started to become more widespread.  These personal computers of the past were more like videogame consoles that had word processing and other productivity apps than the do-all machines we have today.  Females don't tend to be as big gamers as males...  Males for the most part grow playing videogames pretty much daily, so when we go to college, we find ourselves somewhat ahead of the curve since we are very familiar with computers. 

The data on the diversity in tech is pretty disturbing as it shows females only accounting for approximately 30% of the industry.  According to the 2017 data, it appears that minorities other than Asian lag very far behind and only account for a fraction of the entire industry.  Diversity matters in most workplaces (in modern America).  We still have a long way to go to be truly integrated, but I think we are at the beginning stages of a truly inclusive world in tech and in many other areas.

Sources:

https://www.npr.org/sections/money/2014/10/21/357629765/when-women-stopped-coding

https://informationisbeautiful.net/visualizations/diversity-in-tech/

https://www.usatoday.com/story/tech/columnist/2015/07/21/why-diversity-matters-your-tech-company/30419871/

## Partner Power Hour:

Today's partner power hour was hosted by Chance Harmon who is one of our Code-Fellows TAs.  The subject was Intro to web scraping with Node.js and Puppeteer.  Chance demonstrated how to find and target an element through CSS selectors.  You can grab that targeted data and use it as a developer.  The gathered data could be set up to create a mini-API!  Examples of data scrapers are web search sites such as Google, Bing, and others.  One observation is that you should have permission from the target website before you go on to scrape web content as many websites are designed to block bots.  You could even be sued by some website owners.  Web scraping can be useful to get very specific data from websites that may not appear necessarily in a Google search.  

## Overcoming Stage Fright:

Public speaking is a scary subject for many of us.  The fear of public speaking may be due to evolutional and cultural aspects.  Becoming good at public speaking is helpful, but may not be enough to deal with the fear itself.  One useful tip the author gives is to not use alcohol or drugs to "make things easier."  We should learn cognitive-behavioral methods to stop the cycle of avoiding fearful situations.  Avoidance may be a relief at the moment, but it's likely to reinforce the fear in the long run.  

#### Some of the tips provided are:

- Shift the focus from yourself and your fear to your true purpose.

- Stop scaring yourself with thoughts about what might go wrong.

- Refuse to think thoughts that create self-doubt.

- Practice ways to calm and relax your mind and body.

- Exercise, eat well, and practice other healthy lifestyle habits.

- Visualize your success!

- Prepare your material in advance and read it aloud to hear your voice.

- Make connections with your audience.

- Stand or sit in a self-assured, confident posture.

- Give up trying to be perfect and know that it's OK to make mistakes.

To up our public speaking game we should use metaphors, similes, and analogies.  These can be used to really bring a thought home for a lot of people as people like stories.  Using 3-part lists is also a good idea because breaking down your message into smaller chunks can help people remember what you are talking about.  Some really proficient public speakers will use rhetorical questions as a way to add dramatic effect or make a point.  We should also learn to use our voices optimally by speaking powerfully.

Sources:

https://www.scienceofpeople.com/public-speaking-tips/

https://adaa.org/understanding-anxiety/social-anxiety-disorder/treatment/conquering-stage-fright
