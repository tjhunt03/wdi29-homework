// MTA Lab
console.log("MTA Lab:");
console.log("--------");
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
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

/* example of a train line object
line: {
  stops: {
    name: num //etc...
  },
  name: "L",
}*/

const railway = {

  //Hardcoding "Union Square" only because we know it is the only intersection station
  intersection: "Union Square",

  //Object to hold the 3 lines on the railway
  lines: {},

  //// Factories and Methods to actually create the railway ////

  // Factory to create a stop
  Stop: function (name, num) {
    //Shorthand way to create an object, e.g. name: name, is same as > name
    return {name, num};
  },

  // Factory to create a Line
  Line: function (name, stops) {
    //Shorthand way to create an object, e.g. name: name, is same as > name
    return {name, stops};
  },

  //add a new Line to the Railway
  addLine: function (lineName, names) {
    let stops = this.createLine(names);
    this.lines[lineName] = stops;
  },

  //Create a new line by returning an array of Stop objects
  createLine: function (names) {
    let stops = {};
    for (let i=0; i<names.length; i+=1) {
      const stop = new this.Stop(names[i], i);
      stops[stop.name] = stop.num;
    }
    return stops;
  },

  //// Methods to calculate the journey ////

  Journey: function (ln1, stat1, ln2, stat2) {
    return{
      startLine: ln1,
      endLine: ln2,
      startStation: stat1,
      endStation: stat2,
      singleLineJourneys: [],
      validJourney: true
    };
  },

  //Calculates the route through a single line journey
  //Returns an array of stations
  singleLineJourney: function (ln1, stat1, stat2) {
    //Empty array to store stations required
    let stationsRequired = [];
    //Get the keys associated with the two requested stations
    const key1 = this.lines[ln1][stat1];
    const key2 = this.lines[ln1][stat2];
    //Figure out the largest and smallest indices for the stations requested
    const largest = Math.max(key1, key2);
    const smallest = Math.min(key1, key2);
    //Loop through the stations and push to the stations required array if within the range
    for (let key in this.lines[ln1]) {
      if(this.lines[ln1][key] <= largest && this.lines[ln1][key] >= smallest) {
        stationsRequired.push(key);
        //console.log(key);
      }
    }
    //Reverese the order if the starting station is not the 0th index in the array
    if(stat1 !== stationsRequired[0]) {
      stationsRequired.reverse();
    }
    //return the array of stations
    //console.log(stationsRequired);
    return stationsRequired;
  },

  //Function to simulate a trip
  fullJourney: function (ln1, stat1, ln2, stat2) {
    console.log(`Requested journey: From ${stat1} on the ${ln1} line to ${stat2} on the ${ln2} line.`);
    //Check the journey validity first
    const journey = new this.Journey(ln1, stat1, ln2, stat2);
    //console.log(journey);
    journey.validJourney = this.journeyValidityChecker(journey).validJourney;

    //console.log(`line ${ln1}, station ${stat1} going to line ${ln2}, station ${stat2}`);
    //If the line is the same for both stations
    if (journey.validJourney) {
      if (journey.startLine === journey.endLine) {
        let stationsRequired = this.singleLineJourney(journey.startLine, journey.startStation, journey.endStation);
        journey.singleLineJourneys.push(stationsRequired);
        this.journeyLogger(journey);
      } else {
        //Here the journey must be split into two journeys with a change at Union Square
        let stationsRequired = this.singleLineJourney(journey.startLine, journey.startStation, this.intersection);
        journey.singleLineJourneys.push(stationsRequired);
        stationsRequired = this.singleLineJourney(journey.endLine, this.intersection, journey.endStation);
        journey.singleLineJourneys.push(stationsRequired);
        this.journeyLogger(journey);
      }
    }
  },

  journeyValidityChecker: function (journey) {
    const ln1 = journey.startLine;
    const stat1 = journey.startStation;
    const ln2 = journey.endLine;
    const stat2 = journey.endStation;
    //Check lines exist
    if(!Object.keys(this.lines).includes(ln1)) {
      console.log(`The "${ln1}" line does not exist!`);
      journey.validJourney = false;
      return journey;
    } else if (!Object.keys(this.lines).includes(ln2)) {
      console.log(`The "${ln2}" line does not exist!`);
      journey.validJourney = false;
      return journey;
    }
    //Check stations exist
    if(!Object.keys(this.lines[ln1]).includes(stat1)) {
      console.log(`The station "${stat1}" does not exist on the ${ln1} line!`);
      journey.validJourney = false;
      return journey;
    } else if (!Object.keys(this.lines[ln2]).includes(stat2)) {
      console.log(`The station "${stat2}" does not exist on the ${ln2} line!`);
      journey.validJourney = false;
      return journey;
    }
    //Check the station isn't the same
    if(ln1 === ln2 && stat1 === stat2) {
      console.log(`There is no need to travel. You are already at ${stat1} on the ${ln1} line.`);
      journey.validJourney = false;
      return journey;
    }
    //Check Union Square isn't quoted on another line
    if (ln1 !== ln2 && (stat1 === this.intersection || stat2 === this.intersection)) {
      console.log(`${this.intersection} also exists on the ${ln1} line.`);
      journey.endLine = ln1;
    }
    return journey;
  },

  //accepts array required stations, line travelled, whether passenger is changing line, whether start of journey
  journeyLogger: function (journey) {
    const stationsRequired = journey.singleLineJourneys;
    let stationsTravelled = 0;
    //console.log(stationsRequired);
    for (let i=0; i<stationsRequired.length; i+=1) {
      let statement = "Continue";
      if(i === 0) {
        //Log starting location if not a change of lines
        console.log(`Starting at ${journey.startStation} on the ${journey.startLine} line.`);
        statement = "You must travel";
      }
      //We don't need to mention the starting station
      stationsRequired[i].shift();
      console.log(`${statement} through the following stops on the ${journey.startLine} line: ${stationsRequired[i].join(", ")}.`);
      stationsTravelled += stationsRequired[i].length;
      if (i < (stationsRequired.length - 1)) {
        //Change is required
        console.log(`Change at ${stationsRequired[i][stationsRequired[i].length - 1]}.`);
      }
    }
    //Log if passenger has arrived at final station
    console.log(`You will arrive at your destination ${journey.endStation}.`);
    console.log(`${stationsTravelled} stop(s) in total.`);
  },

};

//buildRailway Lines first
// add (lineName, stopsContained)
// as (str, arr)
railway.addLine("N", ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]);
railway.addLine("L", ["8th", "6th", "Union Square", "3rd", "1st"]);
railway.addLine("6", ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]);
//Log to check the railway object is as expected
//console.log(railway);

//simulate a few trips
console.log("Valid journeys:");
console.log("--------");
railway.fullJourney("N","34th","N","8th");
console.log("--------");
railway.fullJourney("N","Union Square","N","Times Square");
console.log("--------");
railway.fullJourney("L","8th","6","Astor Place");
console.log("--------");
railway.fullJourney("N","28th","6","Grand Central");
console.log("--------");
console.log("--------");
console.log("Handling invalid cases:");
console.log("--------");
// Station doesn't exist on the line
railway.fullJourney("L","Leicester Square","6","Astor Place");
console.log("--------");
// Line doesn't exist
railway.fullJourney("L","8th","K","Astor Place");
console.log("--------");
//Same station on the same line
railway.fullJourney("N","34th","N","34th");
console.log("--------");
//Quoting destination as Union Square on a separate line
railway.fullJourney("N","28th","6","Union Square");
console.log("--------");

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
