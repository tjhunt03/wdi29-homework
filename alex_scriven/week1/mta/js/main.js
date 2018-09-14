/*
Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at
and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).

*/

const railSystem = {
  railLine : {
    'N' : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L' : ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6' : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  },

  checkStopExists : function(stopName) {
    let exists = false;
    for (key in this.railLine){
      for (i=0; i<this.railLine[key].length; i++){
        if (this.railLine[key][i] === stopName){
          exists = true;
          return exists
        }
      }
    }
    return exists
  }, //checkStopExists

  checkLineExists : function(lineName) {
    let exists = false;
    for(key in this.railLine){
      if (lineName === key) {
        exists = true;
        return exists
      }
    }
    return exists
  },
  //Checks if they are at the station and stop they are asking to get to
  checkNoMovement: function() {
    let noMovement = false;
    if ((this.currentLine === this.finalLine) && (this.currentStop === this.finalStop)){
      noMovement = true;
    }
    return noMovement
  },
  needToChangeLines : function(){
    let needToChange = true;
    if (this.currentLine === this.finalLine) {
      needToChange = false;
      return needToChange
    }
    return needToChange
  }, //needToChangeLines


  listStopsOnLine: function(line, startStation, endStation){
    const relevantLineStations = this.railLine[line]
    const indexOfStartStation = relevantLineStations.indexOf(startStation)
    const indexOfEndStation = relevantLineStations.indexOf(endStation)
    let stopsList = relevantLineStations.slice(indexOfStartStation+1,indexOfEndStation+1)
    if (indexOfStartStation > indexOfEndStation) {
      stopsList = relevantLineStations.slice(indexOfEndStation,indexOfStartStation)
      stopsList.reverse();
    }
    return stopsList;
  },
  runAllFunctions: function(currentLine, currentStop, finalLine, finalStop){
    this.currentLine = currentLine;
    this.currentStop = currentStop;
    this.finalLine = finalLine;
    this.finalStop = finalStop;
    if ((this.checkLineExists(currentLine)===false) || (this.checkLineExists(finalLine)===false)){
      console.log(`Sorry one of the lines you entered does not exist. Try again`)
      return
    } //Check both lines exist
    if((this.checkStopExists(currentStop)===false) || (this.checkStopExists(finalStop)===false)){
      console.log(`Sorry one of the stops you entered does not exist. Try again`)
      return
    } //check both stops exist
    if (this.checkNoMovement()) {
      console.log('You are already at your destination!')
      return
    }
    if (this.currentStop === "Union Square") {
      let lineOneStops = this.listStopsOnLine(finalLine, currentStop, finalStop);
      console.log(`You must travel through the following stops on the ${finalLine} Line: ${lineOneStops.join(", ")}`);
      return
    } //Special case of starting at union square. Ignore whatever line they say they are on to start.
    if (this.needToChangeLines()){
      let lineOneStops = this.listStopsOnLine(currentLine, currentStop, 'Union Square');
      console.log(`You must travel through the following stops on the ${currentLine} Line: ${lineOneStops.join(", ")}`)
      console.log('Change at Union Square')
      let lineTwoStops = this.listStopsOnLine(finalLine, 'Union Square', finalStop);
      // lineTwoStops.push(finalStop);
      console.log(`Your journey continues through the following stops on the ${finalLine} Line: ${lineTwoStops.join(", ")}`);
      return
    }
    let lineOneStops = this.listStopsOnLine(currentLine, currentStop, finalStop);
    console.log(`You must travel through the following stops on the ${currentLine} Line: ${lineOneStops.join(", ")}`);
  }
};

const planTrip = function(currentLine, currentStop, finalLine, finalStop){
  railSystem.runAllFunctions(currentLine, currentStop, finalLine, finalStop);
}
