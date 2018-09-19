// Badger's Revenge
console.log("Badger's Revenge");
console.log("--------");
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.

// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.

// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = {
  //Array to hold the list of students
  students: [],
  //Thresold for max number of claps allowed
  clapThreshold: 2,
  //Constructor used to create the students
  Student: function (name, clapCount) {
    return {name, clapCount};
  },
  //Add random list of students with clap count each assigned
  addStudents: function (list) {
    for (let i=0; i<list.length; i+=1) {
      revengeOfBadger.students.push(list[i]);
    }
  },
  //Function to check who has clapped past the threshold and is added as a candidate
  clapChecker: function () {
    const candidates = [];
    for (let i=0; i<this.students.length; i+=1) {
      if (this.students[i].clapCount > this.clapThreshold) {
        candidates.push(this.students[i]);
      }
    }
    //console.log(candidates);
    return candidates;
  },
  //Randomly select a person to do the task
  randomSelector: function () {
    const candidates = this.clapChecker()
    if (candidates.length === 0) {
      return "Badger had better do it himself.";
    }
    const randomChoice = Math.floor(Math.random() * candidates.length);
    return `${candidates[randomChoice].name} is doing it!`;
  },
};

revengeOfBadger.addStudents(
[new revengeOfBadger.Student("Stuart", 1),
new revengeOfBadger.Student("Paul", 10),
new revengeOfBadger.Student("Mary", 4),
new revengeOfBadger.Student("Nicole", 0),
new revengeOfBadger.Student("John", 3),
new revengeOfBadger.Student("Sam", 14),
new revengeOfBadger.Student("William", 2),
new revengeOfBadger.Student("Kyle", 5)]
);
//console.log(revengeOfBadger);
console.log(revengeOfBadger.randomSelector());
