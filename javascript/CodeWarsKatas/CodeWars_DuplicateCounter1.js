
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the 
// input string. The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {

    let uniqueLetters = [...new Set(text.toUpperCase())]
    let duplicatesCounter = 0

    for (let j = 0; j < uniqueLetters.length; j++) {

        let numberOfTimesPresentInString = 0

        for (let i = 0; i < text.length; i++) {

            text[i].toUpperCase() == uniqueLetters[j].toUpperCase() && numberOfTimesPresentInString++
        }

        numberOfTimesPresentInString > 1 && duplicatesCounter++
    }
    return duplicatesCounter
}

var assert = require('assert');

assert.equal(duplicateCount(""), 0);
assert.equal(duplicateCount("abcde"), 0);
assert.equal(duplicateCount("aabbcde"), 2);
assert.equal(duplicateCount("aabBcde"), 2, "should ignore case");
assert.equal(duplicateCount("Indivisibility"), 1)
assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")