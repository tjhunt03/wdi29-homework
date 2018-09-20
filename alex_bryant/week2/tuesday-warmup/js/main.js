console.log("Scrabble Score");
console.log("--------");
// Scrabble Score
// Write a program that, given a word, computes the scrabble score for that word.

// scrabble("cabbage")
// // => 14
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

const scrabbleCalculator = {
  scores : {},
  Score : function (letter, score) {
    return {letter, score};
  },
  addKeys : function (score, arr) {
    for (let i=0; i<arr.length; i+=1) {
      this.scores[arr[i]] = score;
    }
  },
  loadScores : function () {
    this.addKeys(1, ["A","E","I","O","U","L","N","R","S","T"]);
    this.addKeys(2, ["D", "G"]);
    this.addKeys(3, ["B", "C", "M", "P"]);
    this.addKeys(4, ["F", "H", "V", "W", "Y"]);
    this.addKeys(5, ["K"]);
    this.addKeys(8, ["J", "X"]);
    this.addKeys(10, ["Q", "Z"]);
    console.log(this.scores);
  },
  calculate : function (word) {
    let total = 0;
    const wordArr = word.split("");
    for (let i=0; i<wordArr.length; i+=1) {
      total += this.scores[wordArr[i].toUpperCase()];
    }
    return total;
  },
  doubleLetter: function (letter, word) {
    return this.calculate(letter) + this.calculate(word);
  },
  tripleLetter: function (letter, word) {
    return 2*this.calculate(letter) + this.calculate(word);
  },
  doubleWord: function (word) {
    return this.calculate(word)*2;
  },
  tripleWord: function (word) {
    return this.calculate(word)*3;
  }

}

//Load scores
scrabbleCalculator.loadScores();

//Testing
console.log(`hello scores ${scrabbleCalculator.calculate("hello")}`);
console.log(`GOODBYE scores ${scrabbleCalculator.calculate("GOODBYE")}`);
console.log(`Zelda scores ${scrabbleCalculator.calculate("Zelda")}`);

console.log("--------");

// Extensions
// You can play a :double or a :triple letter.
console.log("Double and Triple letters:");
console.log(`hello (double letter on h) scores ${scrabbleCalculator.doubleLetter("h","hello")}`);
console.log(`GOODBYE (double letter on G) scores ${scrabbleCalculator.doubleLetter("G","GOODBYE")}`);
console.log(`Zelda (triple letter on Z) scores ${scrabbleCalculator.tripleLetter("Z","Zelda")}`);
// You can play a :double or a :triple word.
console.log("--------");
console.log("Double and Triple word:");
console.log(`hello (double word) scores ${scrabbleCalculator.doubleWord("hello")}`);
console.log(`GOODBYE (triple word) scores ${scrabbleCalculator.tripleWord("GOODBYE")}`);
console.log(`Zelda (triple word) scores ${scrabbleCalculator.tripleWord("Zelda")}`);
