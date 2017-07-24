// ### Episode 1
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
// String Keith is assigned to variable name.
// the printName function is defined and called.
// no name is passed in, but it uses the global variable name that was created before the function and prints a string to the terminal, adding name to the string.


// ### Episode 2
score = 5;
var result = function() {
  var score = 3;
  return score;
};
console.log(result());
// score, defined before the function, is not used within the function, so when called the function returns the score defined in the function. i.e. 3


// ### Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  };
};
listAnimals();
// myAnimals array, defined before the function, is overwritten within the function when the function is called. the function loops through the newly overwritten array and prints to the console the itterator (i.e. index) and the value from the corresponding index


// ### Episode 4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};
allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// the allSuspects function has a new suspectThree created within it, before it prints a list of the suspects to the console. it uses the one two and four defined before the function, and three defined within the function.
//the suspectThree defined before the function is unchanged, as shown in the last line which prints it to the console.



// ### Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};
var printName = function(detective) {
  return detective.name
};
var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};
console.log(detectiveInfo());
// the detective object defined before the functions has it's name property overwritten when the detectiveInfo function is called, so the newly overwritten object is passed to the printName function


// ### Episode 6
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }
  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// the variable murderer defined before the outer function is defined, is never changed by either the outer or inner functions, shown by the output from the last line. the murderer marc, defined in the outer function, is overwritten when the inner function is called, but never printed to the terminal.



// ### Episode 7


















