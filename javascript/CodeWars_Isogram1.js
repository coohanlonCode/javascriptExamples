// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an
//  isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {

    let isIso = true;

    let uniqueLetters = []

    for (let i = 0; i < str.length; i++) {

        let examinedChar = str.charAt(i).toUpperCase();

        if (i == 0) {
            uniqueLetters.push(examinedChar)
        } else {

            let letterAlreadyInList = uniqueLetters.find(letterInList => letterInList.toUpperCase() == examinedChar)

            letterAlreadyInList ? isIso = false : uniqueLetters.push(examinedChar)

            if(!isIso) break;
        }
    }

    isIso = str.length == uniqueLetters.length

    return isIso;
}

var assert = require('assert');

assert.equal(isIsogram("Dermatoglyphics"), true);
assert.equal(isIsogram("isogram"), true);
assert.equal(isIsogram("aba"), false);
assert.equal(isIsogram("moOse"), false);
assert.equal(isIsogram("isIsogram"), false);
assert.equal(isIsogram(""), true);