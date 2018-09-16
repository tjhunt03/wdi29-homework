// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at
// and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
//-- There are 3 subway lines:
//-- The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//-- The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//-- The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//-- All 3 subway lines intersect at Union Square, but there are no other intersection points.
//-- (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
//    so you might need to differentiate this when you name your stops in the arrays.)
//-- Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//-- Your trip planner must work in either direction,
//   i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square)
//   should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
//
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations,
// you might have to make sure the stops that are the same for different lines have different names
// (i.e. 23rd on the N and on the 6 need to be differentiated)


// ***************** CODE FOR JUST LINE N *****************
// const  nTrip = function (startStop, endStop) {
//   const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
//   let indexStart = lineN.indexOf(startStop);
//   let indexStop = lineN.indexOf(endStop);
//   let differenceIndex = Math.abs(indexStart - indexStop);
//
//   let stopArray = [];
//   if (indexStop > indexStart) {
//     for (let i = 0; i < differenceIndex; i++)
//       stopArray.push(lineN[(indexStart + i + 1)]);
//   } else if (indexStart > indexStop) {
//     for (let i = 0; i < differenceIndex; i++)
//       stopArray.push(lineN[(indexStart - i - 1)]);
//   }
//   console.log(`You must travel through the following stops on the N line: ${stopArray.join(", ")}.`);
// };
//**********************************************************

const MTA = {
  allLines: {
    'N': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    'L': ["8th", "6th", "Union Square", "3rd", "1st"],
    '6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
};

//finds index of a stop given line and stop
const findIndex = function(line,stop) {
  return MTA.allLines[line].indexOf(stop);
};

//get an array of stops between 2 given stops on same line
const singleTripArray = function (line, startStop, endStop) {
  let stopArray = [];
  let indexStart = findIndex(line, startStop);
  let indexEnd = findIndex(line, endStop);

  if (indexEnd > indexStart) {
    stopArray = MTA.allLines[line].slice((indexStart + 1), (indexEnd + 1));
  } else if (indexStart > indexEnd) {
    stopArray = MTA.allLines[line].slice(indexEnd, indexStart);
    stopArray = stopArray.reverse();
  }
  return stopArray;
};

// "stop" returns plural if greater than 1. otherwise not plural if = 1.
const totalLengthStops = function (array) {
  if (array.length === 1) {
    return `${array.length} stop in total.`;
  } else if (array.length > 1) {
    return `${array.length} stops in total.`;
  }
};

const planTrip = function(startLine, startStop, endLine, endStop) {
  // checking valid line
  if (!Object.keys(MTA.allLines).includes(startLine) || !Object.keys(MTA.allLines).includes(endLine)) {
    return console.log(`Invalid line. Please enter line 'N', 'L' or '6'.`);
  }
  // checking valid stops
  if (!MTA.allLines[startLine].includes(startStop) || !MTA.allLines[endLine].includes(endStop)) {
    return console.log(`Invalid stop. Please enter a valid stop on their corresponding line 'N', 'L' or '6'.`)
  }
  // entering same starting/ending stops and lines
  if (startLine === endLine && startStop === endStop) {
    return console.log(`No travel required to get to ${endStop} on line ${startLine}.`);
  }

  // entering union square on start and end stops. catches case if start and end lines different.
  if (startStop === "Union Square" && endStop === "Union Square") {
    return console.log('No travel required to get to Union Square.');
  }

  let stopArray1 = [];
  let stopArray2 = [];

  //if on same line
  if (startLine === endLine) {
    stopArray1 = singleTripArray(startLine, startStop, endStop);
    console.log(`You must travel through the following stops on the ${endLine} line: ${stopArray1.join(", ")}.`);
    console.log(`${totalLengthStops(stopArray1)}`);
  }

  //if not on same line and starting on union square
  if (startLine !== endLine && startStop === "Union Square") {
    stopArray2 = singleTripArray(endLine, startStop, endStop);
    console.log('Change at Union Square.');
    console.log(`You must travel through the following stops on the ${endLine} line: ${stopArray2.join(", ")}.`);
    console.log(totalLengthStops(stopArray2));
  }

  //if not on same line and not starting on union square
  if (startLine !== endLine && startStop !== "Union Square") {
    stopArray1 = singleTripArray(startLine, startStop, "Union Square")
    console.log(`You must travel through the following stops on the ${startLine} line: ${stopArray1.join(", ")}.`);
    console.log('Change at Union Square.');

    stopArray2 = singleTripArray(endLine, "Union Square", endStop);
    console.log(`Your journey continues through the following stops on the ${endLine} line: ${stopArray2.join(", ")}.`)
    let totalStops = stopArray1.length + stopArray2.length;
    console.log(`${totalStops} stops in total.`)
  }

};


// format string so that words are capitalised at first letter.
const formatString = function (string) {
    let firstWord = string.charAt(0).toUpperCase() + string.substr(1,5);
    let secondWord = string.charAt(6).toUpperCase() + string.substr(7);
    return `${firstWord}${secondWord}`;
};

//prompt commands
let startLine = prompt("On which line does your trip start?").toUpperCase();
let startStop = prompt(`On line ${startLine}, which stop does your trip start?`);
startStop = formatString(startStop);
let endLine = prompt("Which line are you headed to?").toUpperCase();
let endStop = prompt(`On line ${endLine}, which stop are you headed to?`);
endStop = formatString(endStop);

if (startLine && startStop && endLine && endStop) {
  planTrip(startLine, startStop, endLine, endStop);
};
