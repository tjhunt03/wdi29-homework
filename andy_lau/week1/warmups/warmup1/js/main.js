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

const rainDrop = function(number) {
  if (number % 3 === 0 && number % 5 !== 0 && number % 7 !== 0) {
    return `Pling`;
  } else if (number % 5 === 0 && number % 3 !== 0 && number % 7 !== 0) {
    return `Plang`;
  } else if (number % 7 === 0 && number % 5 !== 0 && number % 3 !== 0) {
    return `Plong`;
  } else if (number % 3 === 0 && number % 5 === 0 && number % 7 !== 0) {
    return `PlingPlang`;
  } else if (number % 3 === 0 && number % 7 === 0 && number % 5 !== 0) {
    return `PlingPlong`;
  } else if (number % 5 === 0 && number % 7 === 0 && number % 3 !== 0) {
    return `PlangPlong`;
  } else if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
    return `PlingPlangPlong`;
  } else {
    return `${number}`;
  };
};

console.log(rainDrop(34));
console.log(rainDrop(1755));
console.log(rainDrop(1281828128128));
console.log(rainDrop(21));
console.log(rainDrop(105));
console.log(rainDrop(9));
console.log(rainDrop(14));
console.log(rainDrop(10));

const rainDrops = function(number) {
  let result = "";
  if (number % 3 === 0) {
    result = `Pling`;
  }
  if (number % 5 === 0) {
    result = result + `Plang`;
  }
  if (number % 7 === 0) {
    result = result + `Plong`;
  }
  if (result.length === 0) {
    result = `${number}`;
  }
  return result;
};

console.log(rainDrops(34));
console.log(rainDrops(105));
console.log(rainDrops(-105));
console.log(rainDrops(-34));
console.log(rainDrops(0));
