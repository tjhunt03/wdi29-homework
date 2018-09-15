// console.log('I\'m in!');
//
// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).

// const MTA = {
//   lines :{
//     'N' : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
//     'L' : ['8th', '6th', 'Union Square', '3rd', '1st'],
//     '6' : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
//   },  //end lines object
//   unionIndex :{
//     'N' : 4,
//     'L' : 2,
//     '6' : 4
//   } //end unionIndex object
// } //end MTA object

const MTA = {
  'N': {
    stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    unionIndex : 4
  },  //end of N line object
  'L': {
    stops: ['8th', '6th', 'Union Square', '3rd', '1st'],
    unionIndex : 2
  }, //end of L line object
  '6': {
    stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    unionIndex : 4
  }//end of 6 line ojbect
} //end of MTA object


const planTrip = function(line1, start, line2, end){
  if (line1===line2 && start===end){
    return `You are already at your destination.`
  }

  if (line1 === line2){
    let getLine = MTA[line1].stops;   //gets array of chosen line
    let startIndex = MTA[line1].stops.indexOf(start);
    if (startIndex === -1){
      return 'Invalid starting station';
    };
    let endIndex = MTA[line1].stops.indexOf(end);
    if (endIndex=== -1){
      return 'Invalid ending station';
    };
    let stops = startIndex - endIndex;
    let stopNames = [];
    if (stops<0){  //going forward
      stops = stops * (-1);
      stopNames = getLine.slice(startIndex+1,endIndex+1).join(', ');
    }else{  //end stops is negative
      stopNames = getLine.slice(endIndex,startIndex).reverse().join(', ');
    }   // end stops is positive
    return `You're travels on the ${line1} line, from ${start} to ${end} is through the following stops: ${stopNames}.  There are ${stops} stops.`;

  }else{      //end single line, for multi lines
    //travel to union station
    let getLine1 = MTA[line1].stops;  //array of stops on line1
    let startIndex = MTA[line1].stops.indexOf(start);
    if (startIndex=== -1){
      return 'Invalid start station';
    };
    let stopsToUnion = startIndex - MTA[line1].unionIndex;
    let stopsToUnionArray = [];
    if (stopsToUnion<0){  //negative stops, going forward
      stopsToUnion = stopsToUnion * (-1);
      stopsToUnionArray = getLine1.slice(startIndex+1, MTA[line1].unionIndex+1).join(', ');
    }else{    //positive stops, going backwards
      stopsToUnionArray = getLine1.slice(MTA[line1].unionIndex, startIndex).reverse().join(', ');
    }
    //travel from union station
    let getLine2 = MTA[line2].stops;  //array of stops on line2
    let endIndex = MTA[line2].stops.indexOf(end);
    if (endIndex === -1){
      return 'Invalid ending station';
    };
    let stopsFromUnion = MTA[line2].unionIndex - endIndex;
    let stopsFromUnionArray = [];
    if (stopsFromUnion<0){  //negative stops, going forward
      stopsFromUnion = stopsFromUnion * (-1);
      stopsFromUnionArray = getLine2.slice(MTA[line2].unionIndex+1, endIndex+1).join(', ');
    }else{    //positive stops, going backwards
      stopsFromUnionArray = getLine2.slice(endIndex,MTA[line2].unionIndex).reverse().join(', ');
    }

    return `You must travel through the following stops on the ${line1} line: ${stopsToUnionArray}.  Change at Union Square.  Your journey continues through the following stops: ${stopsFromUnionArray}.  There are ${stopsToUnion+stopsFromUnion} stops in total.`;
  }  //end multiple lines
};
