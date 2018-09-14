
// Geometry Function Lab
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
// In other words, these functions should take as their only argument a single object with the same keys (length, width)
// as the rectangle object above, and use that object to make the calculations.
//

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(rect) {
  if (rectangle.length === rectangle.width) {
    return "It is a square";
  } else {
    return "It is a rectangle";
  }
};

const areaSquare = function(rect) {
  console.log(`The area is ${rectangle.length * rectangle.width}`);
};

const perimeter = function(rect) {
  console.log(`The perimeter is ${(2*rectangle.length) + (2 * rectangle.width)}`);
};


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
// As above, these functions should take a single object as an argument,
// which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (tri) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return "It is an equilateral triangle";
  } else {
    return "It is not an equilateral triangle";
  }
};

const isIsosceles = function(tri) {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    return "It is an isosceles triangle";
  } else {
    return "It is not an isosceles triangle";
  }
};

const areaTriangle = function(tri) {
  let s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2
  return Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
}

const isObtuse = function(tri) {
  if (Math.pow(triangle.sideA, 2) > Math.pow(triangle.sideB, 2) + Math.pow(triangle.sideC, 2)) {
    return "Triangle is obtuse";
  } else if (Math.pow(triangle.sideB, 2) > Math.pow(triangle.sideC, 2) + Math.pow(triangle.sideA, 2)) {
    return "Triangle is obtuse";
  } else if (Math.pow(triangle.sideC, 2) > Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2)) {
    return "Triangle is obtuse";
  } else {
    return "Triangle is not obtuse";
  }

};
