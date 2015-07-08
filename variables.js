// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberChildren = 2
var parnerName = "Mia"
var place = "NYC"
var jobTitle = "Designer"

var fortuneTeller = function() {
    console.log("You will be a" + " " + jobTitle, "married to" + " " + parnerName, "living in" + " " + place, "with" + " " + numberChildren, "kids.");
    // PS: if i would of use document.type it would not render my sentense properly
};

fortuneTeller()
 

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2015
var dobYear = 1979

var ageCalculator = function() {
	var option1 = currentYear - dobYear
	var option2 = currentYear - dobYear - 1
		document.write(option1 + " or " + option2)
		// document.write will render in the browser
		// console.log will render in the console only
};

ageCalculator()

(option1 + " or " + option2)


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 36
var maxAge = 79
var nunOfSnakPerDay = 2

var supplyCalculator = function() {
	var remaingYears = maxAge - myAge
	var totalSnacks = remaingYears * nunOfSnakPerDay
		document.write("I will need " + totalSnacks + " to last you until the ripe old age of " +  maxAge);
		
		
	};

supplyCalculator()



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function ctof(c) {
	return c * 1.8 + 32
}

function ftoc(f) {
	return (f - 32) / 1.8
}

// the functions above are global, therefore we are able to use them in the local function bellow.

var tempConverter = function(tempC) {

		document.write("Celsius  temp is " + tempC + " converted in fahrenheit becomes " + ctof(tempC) );
		document.write("Fahrenheit  temp is " + ctof(tempC) + " converted back to celsius becomes  " + ftoc(ctof(tempC)) );
		// at the end of the string we use a function on a function.  see ctof and ftoc
};

tempConverter(30)
tempConverter(35)

































