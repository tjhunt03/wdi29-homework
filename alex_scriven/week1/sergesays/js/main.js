// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const sergeSays = function(sentence){

  // if (sentence === "" || input === null || inpute === undefined) {
  //   return 'Fine. Be that way!'
  // }
  //Here we can use the concept of Falsy instead
  if (!sentence) {
    return 'Fine. Be that way!'
  }
  if (sentence.toUpperCase() === sentence && sentence.endsWith("?")){
    return 'Sure, but chill out yo'
  }
  if (sentence.endsWith("?")) {
    return 'Sure'
  }
  if (sentence.toUpperCase() === sentence) {
    return 'Woah, chill out !'
  }
  return 'Whatever'
}

//Some notes;
//-Fix up to simplify with toUpperCase equal
//-Number strings whatever (strings are uppercase) maybe typof
