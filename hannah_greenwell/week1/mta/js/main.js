// MTA Lab
//
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
//
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
//
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
//
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const mta = {
  lines: {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  },

  // Gets a station's index. Takes an array of stations and a string containing the station's name as arguments. Returns the index of the station.
  getStationIndex: function(stationsArray, station){
    return stationsArray.indexOf(station);
  },

  // Checks that the user's input line is an existing line. Takes two strings as arguments (the prompt message and whether the function is checking for departure or arrivals). Returns the line as an object with keys lineName and station.
  getLineInput(promptText, departOrArrive){
    let line = prompt(promptText).toUpperCase();

    if(line in this.lines){
      return {
        lineName: line,
        stations: this.lines[line]
      };
    } else {
      line = this.getLineInput(`Sorry, that line does not exist. \nPlease enter the correct ${departOrArrive} line (e.g. N).`, departOrArrive);
      return line;
    }
  },

  // Checks that the user's input station is an existing station. Takes two strings as arguments (the prompt message and whether the function is checking for departure or arrivals) and an object containing line information. Returns the station as a string.
  // CASE SENSITIVE
  getStationInput(line, promptText, departOrArrive){
    const stationsArray = line.stations;
    let station = prompt(promptText);

    if(stationsArray.includes(station)){
      return station;
    } else {
      station = this.getStationInput(line, `Sorry, that station does not exist. \nPlease enter the correct ${departOrArrive} station (e.g. 34th).`, departOrArrive);
      return station;
    }
  },

  // Gets all the single line trip variables. Updates the variables if the trip is going in the reverse direction. Takes an object (line) and two strings (startStation and endStation) as arguments. Returns an object containing the single line trip information.
  getSingleLineTrip: function(line, startStation, endStation){
    let stationsArray = line.stations;
    let startStationIndex = this.getStationIndex(stationsArray, startStation);
    let endStationIndex = this.getStationIndex(stationsArray, endStation);

    if(startStationIndex > endStationIndex){
      stationsArray = stationsArray.reverse();
      startStationIndex = this.getStationIndex(stationsArray, startStation);
      endStationIndex = this.getStationIndex(stationsArray, endStation);
    }
    return {lineName: line.lineName, stations: stationsArray, startStationIndex, endStationIndex};
  },

  // Prints all the stops on a single line trip. Takes an object (singleLineTrip) as an argument.
  printSingleLineTrip: function(singleLineTrip){
    const stops = singleLineTrip.stations.slice(singleLineTrip.startStationIndex + 1, singleLineTrip.endStationIndex + 1);
    console.log(`You must travel through the following stops on the ${singleLineTrip.lineName} line: ${stops.join(', ')}.`);
  },

  // Calculates and returns the number of stops on a single line trip. Takes an object (singleLineTrip) as an argument.
  getNumberOfStops: function(singleLineTrip){
    const numberOfStops = singleLineTrip.endStationIndex - singleLineTrip.startStationIndex;
    return numberOfStops;
  },

  // ...
  planSingleLineTrip: function(line, startStation, endStation){
    const trip = this.getSingleLineTrip(line, startStation, endStation);
    this.printSingleLineTrip(trip);
    const numberOfStops = this.getNumberOfStops(trip);
    return numberOfStops;
  },

  // ...
  planTrip: function(){
    const departLine = this.getLineInput('Please enter the departure line (e.g. N).', 'departure');
    const departStation = this.getStationInput(departLine, 'Please enter the departure station (e.g. 34th).', 'departure');
    const arrivalLine = this.getLineInput('Please enter the arrival line (e.g. N).', 'arrival');
    const arrivalStation = this.getStationInput(arrivalLine, 'Please enter the arrival station (e.g. 34th).', 'arrival');

    let totalStops = 0;

    if(departLine.lineName !== arrivalLine.lineName){
      totalStops += this.planSingleLineTrip(departLine, departStation, 'Union Square');
      console.log('Change at Union Square.');
      totalStops += this.planSingleLineTrip(arrivalLine, 'Union Square', arrivalStation);
    } else {
      totalStops += this.planSingleLineTrip(departLine, departStation, arrivalStation);
    }

    console.log(`${totalStops} stops in total.`);
  }, // planTrip
}; // mta
