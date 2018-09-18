// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// * Track how many times each student in the class has clapped this week (just make up the numbers);
// * Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// * Pick a random student to deliver the solution to Friday's warmup.
// * If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

// const claps = [
//   ['Alex', 3],
//   ['Fred', 1]
// ]
//
// const currentStudent = claps[i];
// const name = currentStudent[0];
// const clap = currentStudent[1];

const revengeOfBadger = {
  students: {
    "Alex": 1,
    "Bob": 2,
    "Charlie": 3,
    "Daisy": 4,
    "Ella": 5
  },

  shortList: [],

  getStudentList: function(){
    this.shortList = [];
    for(let key in this.students){
      // console.log(this.students[key]);
      if (this.students[key] > 2) {
        this.shortList.push(key);
      }
    } // for in

    // console.log(this.shortList);
    return this.shortList.length;
  },

  draw: function(){
    let winner = "Badger";
    let numberOfCandidates = this.getStudentList();
    // console.log(numberOfCandidates);
    if (numberOfCandidates > 0) {
      let random = Math.floor(Math.random() * numberOfCandidates);
      winner = this.shortList[random];
    }

    console.log(`${winner}`);
  }
};
