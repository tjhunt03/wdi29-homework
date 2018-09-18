//
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
// ------------->>> DONE DONE DONE WORKS
// const rectangle = {
//   length: 4,
//   width: 2}
//
// // const isSquare = function () {
// // determine if rectangle is square of not
//   if (rectangle.length === rectangle.width){
//               console.log(`It's a square!`);
//         } else { console.log(`It's a rectangle`);
// }
//

//
// const area = function (rect) {
// // determine the area of the functin
// }
// ----------------->>> DONE DONE DONE WORKS
// const rectangle = {
//   length: 4,
//   width: 4}
//
// let rectArea = (rectangle.length * rectangle.width)
// console.log(`Area of the rectangle is ${rectArea} metres square `);

// const perimeter = function (rect) {
// // determine the perimmeter of the function
// }
// // perimeter(rect) - Returns the perimeter of the rectangle
const rectangle = {
  length: 4,
  width: 4}

let rectPerimeter = ((rectangle.length * 2)+(rectangle.width * 2));
console.log(`The perimeter of the rectangle is ${rectPerimeter} meters.`);


const perimeter = function( rect ){
  // do the calculation using rect 
  // return the result
};

perimeter( rectangle );


const rectangle2 = {
  length: 4,
  width: 4}

let rectArea = (rectangle2.length * rectangle2.width)
console.log(`Area of the rectangle is ${rectArea} metres square `);



const rectangle3 = {
  length: 4,
  width: 2}

// const isSquare = function () {
// determine if rectangle is square of not
  if (rectangle3.length === rectangle3.width){
              console.log(`It's a square!`);
        } else { console.log(`It's a rectangle`);
}



// ______________________________________________________________________________


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
  // _____________________________________________________________________________

//   The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55



// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

//________________________________________________________________________________
