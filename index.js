// // •	The receivesAFunction function should:
// // ◦	take a callback function as an argument
// // ◦	call the callback function
// // ◦	it doesn't matter what this function returns, so long as it calls the callback function

function receivesAFunction(myCallbackFn) {
  let letter = "a";
  myCallbackFn();
}

function favoriteLetter(letter) {
  if (letter) {
    console.log(`My favorite letter is - ${letter}!`)
  } else {
    console.log(`No favorite letter :(`);
  }
}

receivesAFunction(favoriteLetter)

// •	The returnsANamedFunction function should:
// ◦	take no arguments
// ◦	return a named function


function returnsANamedFunction() {
  return function namedFunction() {
    console.log(`Nom nom nom, this is a named function!`);
  };
}

// •	The returnsAnAnonymousFunction function should:
// ◦	take no arguments
// ◦	return an anonymous function


function returnsAnAnonymousFunction() {
  return function () { console.log("Stretch! Work that core!") }
}


returnsAnAnonymousFunction();

