
// EXERCISE: What number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output 
// to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(x, y) {
	if (x > y) {
		console.log("The greater number of " + x + " and " + y + " is " + x);
		} else if (y > x) {
			console.log("The greater number of " + x + " and " + y + " is " + y);
	} else { 
		console.log("Nothing");
	} 
}

greaterNum(10, 20)


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


// Option 1

var languages = {

es: "Hola Mundo",
de: "Hallo Welt",
ru: "Привет Мир"

}

var helloWorld = function(language) {
	console.log(languages[language]);
}


// Option Chris


var helloWorld2 = function(language) {
	if (language === "es") { return "Hola Mundo" }
	if (language === "de") { return "Hallo Welt" }
	if (language === "ru") { return "Привет Мир" }
	return "Hello Word"
}

console.log(helloWorld2());


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(score) {
	if (score >= 20) 	{ return "A" }
	if (score >= 15) 	{ return "B" }
	if (score >= 10)	{ return "C" }
	if (score >=  5)  { return "D" }
	return "F"
};

assignGrade(5)


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".




var pluralize = function(noun, number) {
	if (number > 1) { console.log(number + " " + noun + "s" ) }
};

pluralize("cat", 2)
























