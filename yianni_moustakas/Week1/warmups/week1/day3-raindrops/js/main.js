// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
const raindrops = function (num) {
  if (num%3 === 0 && num%5 === 0 && num%7 === 0) {
    return "PlingPlangPlong";
  } else if (num%3 === 0 && num%5 === 0 && num%7 !== 0) {
    return "PlingPlang";
  } else if (num%3 === 0 && num%5 !== 0 && num%7 === 0) {
    return "PlingPlong";
  } else if (num%3 !== 0 && num%5 === 0 && num%7 === 0) {
    return "PlangPlong";
  } else if (num%3 === 0 && num%5 !== 0 && num%7 !== 0) {
    return "Pling";
  } else if (num%3 !== 0 && num%5 === 0 && num%7 !== 0) {
    return "Plang";
  } else if (num%3 !== 0 && num%5 !== 0 && num%7 === 0) {
    return "Plong";
  } else {
    return num;
  }
};
console.log(raindrops(1755));
console.log(raindrops(2100));

const dropRains = function (number) {
  let string = "";
  if (number % 3 === 0) {
    string += "Pling";
  }
  if (number % 5 === 0) {
    string += "Plang";
  }
  if (number % 7 === 0) {
    string += "Plong";
  }
  return string
}
console.log(dropRains(1755));
console.log(dropRains(2100));
