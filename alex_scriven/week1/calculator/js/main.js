const squareNumber = function(number) {
    const numberSquared = number**2;
    console.log(`The result of squaring ${number} is ${numberSquared}`);
    return numberSquared;
}

squareNumber(3);

const halfNumber = function(number) {
    const numberHalf = number/2;
    console.log(`Half of ${number} is ${numberHalf}`);
    return numberHalf;
}

halfNumber(10);

const percentOf = function(firstNumber, secondNumber) {
    const percent = firstNumber/secondNumber*100;
    console.log(`${firstNumber} is ${percent}% of ${secondNumber}`);
    return percent;
}

percentOf(25,50);

const areaOfCircle = function(radius){
    const area = Math.PI*(radius**2);
    console.log(`The area for a circle with radis ${radius} is ${area}`);
    return area.toFixed(2);
}

areaOfCircle(2);

const manyFuncs = function(number){
    const halfNum = halfNumber(number);
    const squareNum = squareNumber(halfNum);
    const areaNum = areaOfCircle(squareNum);
    const percentage = percentOf(areaNum,squareNum);
}

manyFuncs(12);
