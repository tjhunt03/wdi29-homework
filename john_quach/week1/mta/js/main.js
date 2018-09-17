//The MTA - Plan your trip.
//Description: A program that models a simple subway system.
//The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//Author: John Quach
//Date: 14th September
//Version :1.0.0

const  subwayMTA = {

'N': ['Times Square','34th','28th', '23rd', 'Union Square', '8th'],
'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
'6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

}

let planTrip = function( getLineOn, getOnStation, getLineOff, getOffStation ) {

  let getOnIndexUnionSquare = subwayMTA[ getLineOn ].indexOf( 'Union Square' );
  let getOnIndex = subwayMTA[ getLineOn ].indexOf( getOnStation ) + 1;
  let getOffIndex = subwayMTA[ getLineOff ].indexOf( getOffStation ) + 1;

// Going forward and From/To line same.
  if ( getLineOn === getLineOff && getOffIndex > getOnIndex ) {

    let stationList = subwayMTA[ getLineOn ].slice(getOnIndex,getOffIndex);

    let numberOfStation = getOffIndex - getOnIndex;
    console.log(`You must travel through the following stops on the ${ getLineOn } line: ${ stationList }.`);
    console.log(` ${ numberOfStation } stops in total.`);
  }

  // The line from/To is different.
    else if (getLineOn != getLineOff) {

        stationList = subwayMTA[ getLineOn ].slice(getOnIndex,getOnIndexUnionSquare + 1);
        stationList2 = subwayMTA[ getLineOff ].slice(0,getOffIndex);
        numberOfStation = (getOnIndexUnionSquare + 1) - getOnIndex;
        numberOfStation += getOffIndex;
        console.log(`You must travel through the following stops on the ${ getLineOn } line: ${ stationList }.`);
        console.log('Change at Union Square.');
        console.log(`Your journey continues through the following stops: ${ stationList2 }`);
        console.log(`${ numberOfStation } stops in total.`);

  }

//When On line and Off are same and going reverse.
  if  (getOnIndex > getOffIndex && getLineOn === getLineOff) {

    let reverseStation = subwayMTA[ getLineOn ].reverse();
    //console.log(`${reverseStation}`)
    getOnIndex = reverseStation.indexOf( getOnStation ) + 1;
    getOffIndex = reverseStation.indexOf( getOffStation ) + 1;
    numberOfStation = getOffIndex - getOnIndex;
    stationList = reverseStation.slice( getOnIndex,getOffIndex );
    console.log(`You must travel through the following stops on the ${ getLineOn } line: ${ stationList }.`);
    console.log(` ${ numberOfStation } stops in total.`);
    //console.log(`Get On Index is ${ getOnIndex }`);
    //console.log(`Get Off Index is ${ getOffIndex }`);
  }

} //planTrip function

// Testing

planTrip('N','28th','6','Grand Central');
//planTrip('6','Grand Central','N','28th');
//planTrip('N','Times Square','N','34th');
//planTrip('N','34th','N','Times Square');
