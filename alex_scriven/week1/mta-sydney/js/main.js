console.log("JS loaded!");



const trackwork = {

  reason : [
    'Trackwork',
    'Lightning',
    '...Whups!',
    'We honestly have no idea what',
    'Doug lost a train',
    'Pigeon',
    'Multiple Pigeons',
    'Driving into the belly of dragon',
    'A cookie spontaneously combusted out of boredom',
  ],

  place : [
    'Bankstown',
    'Leppington',
    'We honestly have no idea where',
    'Saturn',
    'Redfern',
    'Somewhere....?'
  ],
  generateRandomInt : function(max){
    const random = Math.random()*max;
    return Math.floor(random)
  },

  getRandomElementFromArray : function(array) {
    const randomIndex = this.generateRandomInt( array.length);
    return array[randomIndex]
  }, //generateRandomInt

  generateReason : function(){ //Note the 1 default here
    const excuse = this.getRandomElementFromArray(this.reason);
    const place = this.getRandomElementFromArray(this.place);
    console.log(`Apologies, the trains are not running today due to "${excuse}" at: ${place}. Please try again later.`)
  },
}

const planTripSydney = function(currentStop, currentLine, finalStop, finalLine) {
  trackwork.generateReason();
}
