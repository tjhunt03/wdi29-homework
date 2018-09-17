const trainNetwork = {
  "Line N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "Line L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "Line 6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};


const planTrip = function (line1, stop1, line2, stop2) {
  let arrOfLines = Object.keys(trainNetwork);
  let firstLineIndex = arrOfLines.indexOf(line1);
  let secondLineIndex = arrOfLines.indexOf(line2);
  let firstLine = arrOfLines[firstLineIndex];
  let secondLine = arrOfLines[secondLineIndex];
  let firstStop = trainNetwork[line1].indexOf(stop1);
  let secondStop = trainNetwork[line2].indexOf(stop2);
  let travelForward1 = trainNetwork[line1];
  let travelForward2 = trainNetwork[line2];

  if (line1 === line2) { //one line travel
    const tripCallShort = function () {
      console.log (`"You must travel through the following stops on ${firstLine}: ${stopsTravelled.join(", ")}`)
      console.log (`You will need to travel through ${noOfStops} stops`);
      return noOfStops;
    }
    if (firstStop < secondStop) { //Travel forward. Stop1 index < stop2 Index
      let stopsTravelled = travelForward1.slice(firstStop, secondStop+1);
      let noOfStops = secondStop - firstStop;
      return tripCallShort;

    } else if (firstStop > secondStop) { //Travel Backward. Stop 1 index > stop2 index
      let travelBackward = trainNetwork[line1].reverse();
      firstStop = travelBackward.indexOf(stop1);
      secondStop = travelBackward.indexOf(stop2);
      stopsTravelled = travelBackward.slice(firstStop, secondStop+1);
      noOfStops = secondStop - firstStop;
      return tripCallShort;

    } else {
      console.log(`Error. Choose a valid trip`)
      return 0;
    }
  } else if (firstLine !== secondLine) { //two line travel
    let toUnion = trainNetwork[line1].indexOf("Union Square"); // Index number of Union Square via the first line
    let fromUnion = trainNetwork[line2].indexOf("Union Square"); // Index number of Union Square via the second line

    const tripCallLong = function () {
      console.log(`You must travel through the following stops on ${firstLine}: ${travelToUnion.join(", ")}`);
      console.log(`Change at Union Square and get on ${secondLine}`);
      console.log(`Your journey continues through to the following stops: ${travelFromUnion.join(", ")}`);
      console.log (`You will need to travel through ${noOfStops} stops`);
      return noOfStops;
    }

    if (firstStop < toUnion) { // This is to travel forward to Union Square. Line1Stop1 index < USq
      let travelToUnion = travelForward1.slice(firstStop, toUnion+1);
      let noOfStopsToUnion = toUnion - firstStop;


      if (secondStop > fromUnion) { // This is to travel forward from Union Square. Line1Stop2 index > USq
        let travelFromUnion = travelForward2.slice(fromUnion, secondStop+1);
        let noOfStopsFromUnion = secondStop - fromUnion;
        noOfStops = noOfStopsFromUnion + noOfStopsToUnion;
        return tripCallLong();


      } else if (secondStop < fromUnion) { // This is to travel backward from Union Square. Line1Stop2 index < USQ
        let travelBackward2 = trainNetwork[line2].reverse();
        fromUnion = travelBackward2.indexOf("Union Square");
        secondStop = travelBackward2.indexOf(stop2);
        travelFromUnion = travelBackward2.slice(fromUnion, secondStop+1);
        noOfStopsFromUnion = secondStop - fromUnion;
        noOfStops = noOfStopsFromUnion + noOfStopsToUnion;
        return tripCallLong();
      }


    } else if (firstStop > toUnion) { // This is to travel backward to Union Square. Line1Stop1 index < USq
      let travelBackward1 = trainNetwork[line1].reverse()
      firstStop = travelBackward1.indexOf(stop1);
      toUnion = travelBackward1.indexOf("Union Square");
      let travelToUnion = travelBackward1.slice(firstStop, toUnion+1)
      console.log(travelToUnion)
      let noOfStopsToUnion =  toUnion - firstStop


      if (secondStop > fromUnion) { // This is to travel forward from Union Square. Line1Stop2 index > USq
        let travelFromUnion = travelForward2.slice(fromUnion, secondStop+1);
        noOfStopsFromUnion = secondStop - fromUnion;
        noOfStops = noOfStopsToUnion + noOfStopsFromUnion;
        return tripCallLong();



      } else if (secondStop < fromUnion) { // This is to travel backward from Union Square
        travelBackward2 = trainNetwork[line2].reverse();
        fromUnion = travelBackward2.indexOf("Union Square");
        secondStop = travelBackward2.indexOf(stop2);
        travelFromUnion = travelBackward2.slice(fromUnion, secondStop+1);
        noOfStopsFromUnion = secondStop - fromUnion;
        noOfStops = noOfStopsFromUnion + noOfStopsToUnion;
        return tripCallLong();
      }

    }

  }


};
