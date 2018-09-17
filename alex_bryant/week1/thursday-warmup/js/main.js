// Warmup - Serge Says
// Examples
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const sergeSays = function (question) {
  //if (question === '' || question === undefined || question === null) {
  //A shorthand way of looking at falsyness
  if (!question || !(typeof(question) === 'string')) {
    return 'Fine. Be that way!';
  } else if (question === question.toUpperCase()) {
    return 'Woah, chill out!';
  } else if (question.endsWith("?")) {
    return 'Sure.';
  }
  return "Whatever.";
}
