// Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw.
// On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this,
// but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

// const revengeOfBadger = {
//   Bob: [10, 2, 1, 4],
//   Richard: [4, 2, 0, 1],
//   Gary: [2, 0, 0, 0],
//   Will: [1, 3, 4, 0],
//   Pat: [0, 0, 0, 0],
//   Terry: [1, 0, 1, 8],
//   Zack: [1, 0, 1, 0],
// };
//
// const pickStudent = function(object) {
//   let arrayOfKeys = Object.keys(object);
//   let randomiser = arrayOfKeys.length * Math.random();
//   let indexOfChosen = Math.floor(randomiser);
//   let name = arrayOfKeys[indexOfChosen];
//   let total = 0;
//   for (i = 0; i < 4; i++) {
//     total = (total) + (object[name])[i];
//     let arrayOfWinners = [];
//     if (total > 2) {
//       arrayOfWinners = arrayOfWinners.push[name];
//     }
//   }
//   if (total > 2) {
//     console.log(`${name} has clapped ${total} times this week.`);
//     console.log(`${name} is the winner!`);
//   } else {
//     console.log(`${name} has not clapped enough times this week.`);
//     console.log(`Do your own damned warmup Badger.`);
//   }
// };
//
// pickStudent(revengeOfBadger);

const revengeOfBadger = {
  students: {
    "Alex": 1,
    "Bob": 2,
    "Charlie": 3,
    "Daisy": 4,
    "Ella": 5
  },

  shortList: [],

  getStudentList: function() {
    this.shortlist = [];
    for(let key in this.students) {
      if (this.students[key] > 2) {
        this.shortlist.push(key);
      }
    }
    return this.shortList.length;
  },

  draw: function() {
    let winner = "Badger";
    let numberOfCandidates = this.getStudentList();
    if (numberOfCandidates > 0) {
      let random = Math.floor(Math.random() * numberOfCandidates);
      winner = this.shortlist[random];
    }

    console.log(`${winner}`);
  }
};
