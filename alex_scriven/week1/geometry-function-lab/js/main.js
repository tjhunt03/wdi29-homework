/*
Part 1, Rectangle
Given a rectangle object like the one below, write the following functions:

isSquare(rect) - Returns whether the rectangle is a square or not
area(rect) - Returns the area of the rectangle
perimeter(rect) - Returns the perimeter of the rectangle



In other words, these functions should take as their only argument
a single object with the same keys (length, width) as the rectangle object above,
and use that object to make the calculations.

*/
const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(rect) {
  if (rect.length === rect.width) {
    return true
  }
  return false
}

const areaRect = function(rect) {
  return rect.length * rect.width
}

const perimeter = function(rect){
  return (rect.length*2) + (rect.width*2)
}


/*
Part 2, Triangle
Given a triangle object like the one below, write the following functions:

isEquilateral(tri) - Returns whether the triangle is equilateral or not
isIsosceles(tri) - Returns whether the triangle is isosceles or not
area(tri) - Returns the area of the Triangle
isObtuse(tri) - Returns whether the triangle is obtuse or not

As above, these functions should take a single object as an argument,
which will have the same keys as the triangle above, and which you will use for your calcuations.
*/

const triangle = {
  sideA: 5,
  sideB: 5,
  sideC: 4
};

const isEquilateral = function(tri){
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return true
  }
}

const isIsosceles = function(tri) {
  if (isEquilateral(tri)) {
    return false
  }
  if (tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideC === tri.sideA) {
    return true
  }
}

//use heron's formula https://en.wikipedia.org/wiki/Heron%27s_formula

const areaTri = function(tri) {
  semiP = (tri.sideA + tri.sideB + tri.sideC)/2;
  area = Math.sqrt(semiP*(semiP-tri.sideA)*(semiP-tri.sideB)*(semiP-tri.sideC))
  return area
}

const isObtuse = function(tri) {
  if (isEquilateral(tri) || isIsosceles(tri)) {
    return false
  }
  return true
}

console.log(isObtuse(triangle))
