// EXERCISE: The Recipe Card

// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), 
// servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


// Option 1
var recipe = {
	title: " Seabass a la Serguei",
	serving: 2,
	ingredients: ["2 filets of the mediterranean seabass", "coliflower", "eggplant"]
}

console.log(recipe.title)
console.log(recipe.serving)
console.log(recipe.ingredients)

// Option 2 "with a function"
var recipe = {
	title: " Seabass a la Serguei",
	serving: 2,
	ingredients: ["2 filets of the mediterranean seabass", "coliflower", "eggplant"],
	display: function() {
		console.log("The recipe is " + this.title + ", it serves " + this.serving + " and the ingredients are: " + this.ingredients);
	}
}

recipe.display();


// Option 3 "2 objects inside on an object"

var myRecipes = {

	fish: {
			title: "Seabass a la Serguei",
			serving: 2,
			ingredients: ["2 filets of the mediterranean seabass", "coliflower", "eggplant"]
		},

	meat: {
			title: "Steak & Frites",
			serving: 2,
			ingredients: ["2 NY strip loins", "yukon gold potatoes", "blue cheese"]
	}	

};

myRecipes(fish)



// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for 
// the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, 
// log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need 
// to read "The Lord of the Rings" by J.R.R. Tolkien.'

var booksArray = [ 
{	title: "Remote",
author: "Jason Fried & DHH",
alreadyRead: false },

{ title: "The Lean Startup",
author: "Eric Ries",
alreadyRead: true },

{ title: "Zero to One",
author: "Peter Thiel",
alreadyRead: true }
];

for (var i = 0; i < booksArray.length; i++) {
  var book = booksArray[i];
  var bookInfo = book.title + " by " + book.author;
  if (book.alreadyRead) {
    console.log("You already read " + bookInfo);
  } else {
    console.log("You started reading "  + bookInfo);
  }
};


// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your 
// favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. 
// Stars: Puff, Jackie, Living Sneezes."

var myFavoriteMovie = { 
title: "Limit Less",
director: "Niel Burger",
duration: 2.5, 
stars: ["Bradley Cooper", "Robert Deniro", "And some other actors"], 
};


function displayMovie(movie) {
    console.log(movie.title + " directed by " + movie.director + ", it lasts for " + movie.duration + " hours");
    console.log("The stars are " + movie.stars.join(', '));
}
displayMovie(myFavoriteMovie);

// Or...

// function printMovie(movie) {
//     console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
//     var starsString = 'Stars: ';
//     for (var i = 0; i < movie.stars.length; i++) {
//         starsString += movie.stars[i];
//         if (i != movie.stars.length -1) {
//             starsString += ', ';
//         }
//     }
//     console.log(starsString);
// }




















