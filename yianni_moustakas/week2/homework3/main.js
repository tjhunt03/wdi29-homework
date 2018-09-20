// <!-- # Exercises: Animation
//
// ## The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html -->
//
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.
//
// ## [Here is some inspiration](https://gist.github.com/ga-wolf/ae7d0e1df214e45213c5) -->


console.log("JS Loaded!");

// let screenwidth = document.body.querySelector("body").clientwidth;
let screenWidth = window.innerWidth;


//This kitty will walk left to right
const kitty = document.getElementById("catGif");
kitty.style.position = 'absolute';
kitty.style.left = '0';
kitty.style.top = '50%';

//this kitty will walk right to left
const kitty2 = document.getElementById("catGif2");
kitty2.style.position = 'absolute';
kitty2.style.left = '1200px';
kitty2.style.top = '10%';

const catWalkRight = function() {
  const startPosition = parseInt(kitty.style.left);
  let endPosition = startPosition + 5;
  kitty.style.left = endPosition + 'px';
  if (startPosition > window.innerWidth){
    kitty.style.left = '-800px';
  }

};
window.setInterval(catWalkRight, 10);

const catWalkLeft = function() {
  const startPosition = parseInt(kitty2.style.left);
  let endPosition = startPosition - 5;
  kitty2.style.left = endPosition + 'px';
  if (startPosition < parseInt("-300px")){
    kitty2.style.left = '1500px';
  }

};
window.setInterval(catWalkLeft, 10);
