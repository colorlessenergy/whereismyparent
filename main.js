// Place all people in alphabetical order 
// where Mothers are followed 
// by their children.I.E "aAbaBb" => "AaaBbb".

//"BbbEeee" == findChildren("beeeEBb")

// psuedo code

// sort out all the capital letters into an array of separate objects
// loop through rest of the string and add value of children
// join the array
// return the array as a string

var startingString = "beeeEBb";
var stringToArray = startingString.split("");

let finalOutput = [];

// pull all the cap letters into a separate array
// removed all letter case "undefined"
// sort into abc order
var capSortOut = stringToArray.map(function (e) {
  if (e === e.toUpperCase()) {
    return {
      letter: e,
      followingLetters: 0
    };
  }
}).filter(function (e) {
  return e !== undefined;
}).sort(function (a, b) {
  return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
});

// put all lower case letters into the object
stringToArray.map(function (e) {
  capSortOut.map(function (adult) {
    if (e === adult.letter.toLowerCase()) {
      return adult.followingLetters += 1;
    }
  });
});

capSortOut.map(function (letter) {
  let string = letter.letter;

  for (var i = 0; i < letter.followingLetters; i++) {
    string += letter.letter.toLowerCase();
  }
  finalOutput.push(string);
});


console.log(startingString, finalOutput.join(""));
