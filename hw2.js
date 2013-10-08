/*
 * Please follow the instructions carefully.
 * 
 * When a problem says "send 'foo' to the console that means you would write
 * 
 * 	console.log('foo');
 * 
 * I may also say "send the variable x to the console" in which case you'd write
 * 
 * 	console.log(x)
 * 
 * Note: If you have multiple variables x, y, z you can send all of them to the console like so
 * 
 * 	console.log(x, y, z)
 */

// Problem 1) Using JavaScript comments, write your name and today's date below

// Olga Koteneva 9/17/13


// Problem 2) Create separate variables to store the following. 
// Send all variables to the console.
	// Your e-mail address
	// Your major
	// Your favorite text editor
	// A zip code
	// The value of pi up to 5 decimal places (use Google to find the value)
	// The total cost of a 10 dollar book plus 5% sales tax
	// Whether or not the light switch is on
	// Whether or not Superman can fly

var email = 'okotenev@montgomerycollege.edu',
	major = 'Web Design',
	textEditor = 'Sublime',
	zipCode = '20878',
	pi = 3.14159,
	bookCost = 10.05,
	lightSwitch = true,
	supermanCanFly = true; //JG: I'm using a slightly more descriptive Boolean variable name.
//JG: I like the multi-line approach you took here. Just remember to include the semi-colon at the end.

console.log(email, major, textEditor, zipCode, pi, bookCost, lightSwitch, supermanCanFly);


// Problem 3) Use the typeof operator to determine the data type of each variable like so.
	// console.log(typeof myEmail);
	// console.log(typeof myMajor);
	// and so on…
	// Make sure you have at least one string, at least one number, and at least one Boolean.

//JG: Breaking it up onto multiple lines makes it easier to read
console.log(
	typeof email, 
	typeof major, 
	typeof textEditor, 
	typeof zipCode, 
	typeof pi, 
	typeof bookCost, 
	typeof lightSwitch, 
	typeof supermanCanFly
);


// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
	// The dog's biting my shoes
	// <a href="#">Some link</a>
	// JavaScript is "easy" if you are good at it

var a = "The dog's biting my shoes",
	b = '<a href="#">Some link</a>',
	c = 'JavaScript is "easy" if you are good at it'

console.log(a, b, c); //JG: Nice!


// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.

//JG: Something awesome as in doing 3D graphics?
var toLearn = ['Javascript', 'jQuery', 'Something awesome about the world']

console.log(toLearn);

// Problem 6) Send each item of the last array to the console. 
// If your array variable is myArray then you would write
	// console.log(myArray[0])
	// console.log(myArray[1])
	// and so on…

console.log(toLearn[0]);
console.log(toLearn[1]);
console.log(toLearn[2]);

// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.

console.log(toLearn.length);

// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string 
// "Leave me alone!" to the console.
	// hint: Use document.getElementById to get a reference to the button in
	// a similar way to how we did it in class for the currency conversion
	// calculator.

//JG: Looks good
document.getElementById('clickMe').onclick = function () {
	var a = 'Leave me alone!'
	console.log(a);
};
