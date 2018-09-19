// Scrabble Score
// Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage")
// # => 14

// Letter Values
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions
// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.



// APPROACH
//  - create a general object which holds scrabble logic
//  - create an object containing letterScore (structure = LETTER : SCORE)
//  - create score method:
//      convert input word into upper/ lowerCase (to match the data)
//  - LOOP: isolate each letter of the word
//     For each letter, give us the value (i.e. if we get A, give us 1)
//     Once we get the value, we want to add it to our running score

const scrabble = {
  letterScore: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
    2: ["D", "G" ],
    3: ["B", "C", "M", "P" ],
    4: ["F", "H", "V", "W", "Y" ],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  score: function(word){
    word = word.toUpperCase();
    let sum = 0;

    //get individual letter from the string
    for (var i = 0; i < word.length; i++) {
      let letter = word[i]

      //loop throught everything in this object letterScore
      for(let key in this.letterScore){
        // console.log(this.letterScore[key]);
        // console.log(typeof key);

        //find the match
        if (this.letterScore[key].includes(letter)) {
          // sum += Number(key);
          sum += parseInt(key);

          break;
        }
      }//for in

    }//for

    console.log(sum);
    return sum;

  }
};


const scrabbleAlt = {
  letterScore: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
     'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
     's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
     'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
     'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
     'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
     'q' : 10, 'z' : 10
  },

  scoreAlt: function(word){
    word = word.toLowerCase();
    let sum = 0;

    for (var i = 0; i < word.length; i++) {
      let letter = word[i];
      // console.log(letter);

      // console.log(this.letterScore[letter]);
      let score = this.letterScore[letter]
      sum += score;
    }
    return sum;
  }
};
