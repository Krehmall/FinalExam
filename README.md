## Final Exam

The Final Exam in SVCollege where is only 4 hours is given to:
* Solve Riddle in JS
* Make Backend App
* Make React Frontend App.

I was short of time, but finished all in last minute.
On purpose i don't improve this work, so everyone can see as it is made in my given time.
During exam I wasn't allowed to browse in internet, but i allowed to use my previous works.

### The Riddle

The target was to write a function that can count chains of certain sum in given array of numbers.
In order to run this file you need in console enter the path ***FinalExam/JavaScript.***
Then in console type `node index.js`

### The Backend App

The targes was to make server App that: managing database of people, have requested **CRUD** functions, works with API requests.
**MongoDB** was used as data base, Express was used to run local server.The **app/app.js** simulates client part for API requests.
In order to run this App you need:
* In console enter the path ***FinalExam/Backend***, enter command: npm i
* Go to directory ***modules/dbModule.js*** in line number 5 you must write: `const url = "YourMongoBDLink"`.
* For first time you running App only,you need to uncomment in ***server.js*** line 60. (After first run you must remove this line)
* In console run command `node server.js`
* In your browser follow the link: http://localhost:3000 and press F12 and see the console.

### The Frontend App

The targes was to make **ReactJs** App, with some functional and interface requests in exam list:
header bar with name of App, Register page and Login page with user and car credentials,
main page have some main buttons on left side, first you are choosing the city where you are
parking then, it leads to window where you may press "pay" and after you may see the history
of parking payments.In this App I used [React+Vite](https://vitejs.dev/guide/) with [NodeJs](https://nodejs.org/en/download/current) as base.
This one was made with **Chakra**, which is have alot of ready components.
So there is no need to deal with **CSS+HTML** I also used **Router Provider**, and some base hooks like a ***UseState***.
Also i used here browsers local storage and sesion storage for mostly to keep all registered users data.
In order to run this App you need:
* Go to console in app directory FinalExam/Parkings enter command `npm i`
* Then in console enter command `npm run dev`
* In your browser follow the link that will appear in console

The Exam result grade was best in class `88`, I proud to share this work.
