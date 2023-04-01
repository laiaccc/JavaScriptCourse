// 1. Magic Eight Ball
// The user will be able to input a question, then our program will output a random fortune.
let userName = 'K';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = 'How can I become a blade runner?';
console.log(`User ${userName} askes: ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);
// Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
let eightBall = '';

// if (randomNumber == 0) {
//   eightBall = 'It is certain';
// } else if (randomNumber == 1) {
//   eightBall = 'It is decidedly so';
// } else if (randomNumber == 2) {
//   eightBall = 'Reply hazy try again';
// } else if (randomNumber == 3) {
//   eightBall = 'Cannot predict now';
// } else if (randomNumber == 4) {
//   eightBall = 'Do not count on it';
// } else if (randomNumber == 5) {
//   eightBall = 'My sources say no';
// } else if (randomNumber == 6) {
//   eightBall = 'Outlook not so good';
// } else if (randomNumber == 7) {
//   eightBall = 'Outlook not so good';
// }

switch (randomNumber) {
  case 0: 
  eightBall = 'It is certain';
  break;
  case 1: eightBall = 'It is decidedly so';
  break;
  case 2: eightBall = 'Reply hazy try again';
  break;
  case 3: eightBall = 'Cannot predict now';
  break;
  case 4: eightBall = 'Do not count on it';
  break;
  case 5: eightBall = 'My sources say no';
  break;
  case 6: eightBall = 'Outlook not so good';
  break;
  case 7: eightBall = 'Outlook not so good';
  break;
}

console.log(eightBall);

/* 2. Race day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants.
You have been hired to write a program that will register runners for the race and give them instructions on race day.
Here’s how our registration works:
There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. R
unners are assigned a race number and start time based on their age and registration.

Race number:
    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.
Start time:
    Adult registrants run at 9:30 am or 11:00 am.
    Early adults run at 9:30 am.
    Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project. */

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 19;

if (registeredEarly && age > 18) { // check if the runner is an adult AND registered early
  raceNumber += 1000;  // Early adults receive a race number at or above 1000.
  console.log(`You will race at 9:30 am; your race number is ${raceNumber}.`);
} else if (!registeredEarly && age>18) {  // late adults
  console.log(`You will race at 11:00 am; your race number is ${raceNumber}.`);
} else if (age < 18){ // youth
  console.log(`You will race at 12:30 pm; your race number is ${raceNumber}.`);
} else { // exactly 18
  console.log('Please check the registration desk.');
}
