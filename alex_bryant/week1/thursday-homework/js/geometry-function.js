// Geometry Function Lab
console.log("Geometry Function Lab");
console.log("--------");
// Part 1, Rectangle
console.log("Part 1, Rectangle");
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
const rectangle = {
  length: 4,
  width: 4
};
const rectangle2 = {
  length: 4,
  width: 6
};

const isSquare = function (rect) {
  if (rect.length === rect.width) {
    return true;
  }
  return false;
};

const area = function (rect) {
  return rect.length * rect.width;
};

const perimeter = function (rect) {
  return 2*(rect.length + rect.width);
};

console.log(`Is square  = ${isSquare(rectangle)}`);
console.log(`Is square  = ${isSquare(rectangle2)}`);
console.log(`area  = ${area(rectangle)}`);
console.log(`area  = ${area(rectangle2)}`);
console.log(`perimeter  = ${perimeter(rectangle)}`);
console.log(`perimeter  = ${perimeter(rectangle2)}`);

console.log("--------");
// Part 2, Triangle
console.log("Part 2, Triangle");
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
const triangle = {
  sideA: 1,
  sideB: 6,
  sideC: 7
};
const triangle2 = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};

const isEquilateral = function (tri) {
  const aAndBEqual = tri.sideA === tri.sideB ? true : false;
  return (tri.sideA === tri.sideC && aAndBEqual);
}

const isIsosceles = function (tri) {
  const aAndBEqual = tri.sideA === tri.sideB ? true : false;
  const aAndCEqual = tri.sideA === tri.sideC ? true : false;
  return (tri.sideB === tri.sideC || aAndBEqual || aAndCEqual);
}

const areaTri = function (tri) {
  //Using semiperimeter equation s = sum(sides)/2
  //area = root(s(s-a)(s-b)(s-c))
  const semiPerim = (tri.sideA + tri.sideB + tri.sideC)/2
  return Math.sqrt((semiPerim*(semiPerim - tri.sideA)*(semiPerim - tri.sideB)*(semiPerim - tri.sideC)))
}

const isObtuse = function (tri) {
  let largest = Math.max(tri.sideA,tri.sideB,tri.sideC);
  let smallest = [];
  for (var v in tri) {
    if (tri[v] < largest) {
      smallest.push(tri[v]);
    }
  }

  //return false if two sides are the same
  if(smallest.length < 2){
    return false
  }

  //using pythagoras
  // if sum of squares of smaller sides is less, it is obtuse
  if((smallest[0]**2 + smallest[1]**2) > largest**2) {
    return false;
  }

  return true;
}

console.log(`Is Equilateral  = ${isEquilateral(triangle)}`);
console.log(`Is Equilateral  = ${isEquilateral(triangle2)}`);
console.log(`Is Isosceles  = ${isIsosceles(triangle)}`);
console.log(`Is Isosceles  = ${isIsosceles(triangle2)}`);
console.log(`area  = ${areaTri(triangle)}`);
console.log(`area  = ${areaTri(triangle2)}`);
console.log(`Is Obtuse  = ${isObtuse(triangle)}`);
console.log(`Is Obtuse  = ${isObtuse(triangle2)}`);

// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
