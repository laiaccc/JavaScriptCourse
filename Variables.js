// 1. Kelvin Weather
/* Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. 
However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. */

// the forcast today is 293 kelvin
const kelvin = 0;
// Celsius temperature is 273 degrees less than Kelvin
let celsius = kelvin-273;
// calculte the Fahrenheit temperature using celsius
let fahrenheit = celsius * (9/5) + 32;
// round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert celsius to the Newton scale
let newton;
newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`)

// 2. Dog Years
/* Dogs mature at a faster rate than human beings. 
We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. 
How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.

Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! 
With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years. */

// human age
const myAge = 25;
// the early years in dog's life converted to dog age
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
// the later years in a dog's life converted to dog age
let laterYears = myAge - 2;
laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);

// human age converted to dog's age
const myAgeInDogYears = earlyYears + laterYears;
// My name
const myName = 'Laia'.toLowerCase();
// my self-introduction
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);