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

// const sergeSays = function (input) {
//   let string = "";
//   let arrayOfString = input.split("");
//   let capitalise = function(letter) {
//     return letter === letter.toUpperCase();
//   }
//   let capitalArray = arrayOfString.filter(capitalise,0);
//   if (input.charAt(input.length - 1) === `?` && capitalArray.length === arrayOfString.length) {
//     return string = `Sure. Woah, chill out!`;
//   } else if (input.charAt(input.length - 1) === `?`){
//     return string = `Sure`;
//   } else if (input.length === 0) {
//     return string = `Fine. Be that way`;
//   } else if (capitalArray.length === arrayOfString.length) {
//     return string = `Woah, chill out!`
//   } else {
//     return string = `Whatever.`;
//   }
// };

const sergeSays = function(input) {
  if (!input) {
    return `Fine. Be that way!`;
  }

  if (input.endsWith("?")) {
    return `Sure`;
  } else if (input === input.toUpperCase()) {
    return `Woah, chill out!`;
  }
  return `Whatever.`
}
console.log(sergeSays(""));
