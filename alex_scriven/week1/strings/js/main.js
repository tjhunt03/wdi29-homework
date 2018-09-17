const DrEvil = function(number){
    const numberDollars = number + ' dollars';
    if (numbera === 1000000) {
        return numberDollars + ' (pinky)'
    }
    return numberDollars;
}

const mixUp = function(wordOne, wordTwo){
    const lettersOne = wordOne[0] + wordOne[1];
    const lettersTwo = wordTwo[0] + wordTwo[1];
    console.log(`${lettersTwo+wordOne.slice(2)} ${lettersOne+wordTwo.slice(2)}`);
}

mixUp("rabbit", "face");
mixUp('mix', 'pod');
mixUp('dog', 'dinner');

const fixStart = function(word){
    const letterReplace = RegExp(word[0],"g");
    const newWord =word[0]+word.slice(1).replace(letterReplace,"*");
    return newWord;
}

fixStart("babble");
fixStart("rabbit of roap in randle roarrr");

const verbing = function(word) {
    if (word.length >= 3 && word.slice(-3) === "ing"){
        return word +"ly";
    };
    if (word.length >=3) {
        return word + "ing";
    };
    return word;
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

const notBad = function(sentence) {
    const notIndex = sentence.indexOf("not");
    const badIndex = sentence.indexOf("bad");
    if (notIndex <0 ||badIndex <0 || notIndex>badIndex){
        return sentence;
    }
    const replaceLetters = RegExp(sentence.slice(notIndex,badIndex+3));
    return sentence.replace(replaceLetters,"good");
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so terribly bad!'));
console.log(notBad('This dinner is bad!'));
console.log(notBad('This not bad is bad not'));
