# ejDeck

## Introduction

ejDeck is a commodities quote desktop application built in ElectronJS + jQuery.  

The original idea comes from Gary Simon's ElectronJS introductory course on Coursetro.com, and has been extended to include jQuery as a means of showcasing a way jQuery can be used to construct ElectronJS applications.  

The program accesses the APIs at Quandl and CryptoCompare for pricing. 



### Background 

This began as an experiment to try to build an ElectonJS app with jQuery.  I have been a jQuery developer since 2008 and think it remains a solid foundation for building web apps.  I also use jQuery for my Cordova/PhoneGap apps, and thought it would be great if I could build a single codebase that would translate across web apps, mobile apps and desktop applications.  

I found that most documentation for crossover development was centered around newer "hip" frameworks like Vue and Angular, and very little information - including from ElectronJS - was available for mixing in jQuery with ElectronJS.  So I decided to build figure it out on my own and see if they two could work well together, and they do.

I hope this experiement proves a helpful guide for other jQuery developers that want to extend into ElectronJS development.  I shy away from some Best Practices development in order to make this more of a jQuery app than a NodeJS app, for the purpose of testing how far jQuery can go in ElectronJS, since everyone will already know where it can go with Node.

  
### Requirements

This project was developed using the following:  
- NodeJS 10.1.0
- npm 6.4.1
- ElectronJS 3.0.0
- jQuery 3.3.1 (included)

  
### Installation
1. Download/clone ejDesk to your local directory
2. cd to the local directory and run ``npm init -y``
3. Install ElectronJS ``npm install electron``


### Run it!
In the root directory for the install run the command ``npm start``


### Credits and more information
**ElectronJS** https://electronjs.org/  
**jQuery** https://www.jquery.com  
**Courestro** https://www.coursetro.com/  
**Quandl** https://www.quandl.com/  
**CryptoCompare** https://www.cryptocompare.com/

