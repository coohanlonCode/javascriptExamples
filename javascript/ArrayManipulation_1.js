const bjjBeltRanks = ['White', 'Grey', 'Yellow', 'Orange', 'Green', 'Blue', 'Purple', 'Brown', 'Black']

/////////////
/////// These two notations are functionally identical
let functionToShowAllBeltsLongForm = function (rank) {

    let rankProcessedText = ' belt'
    if (rank === '(if applicable) Kids\' level'){
        rankProcessedText = ' belts'
    } 
    console.log(rank + rankProcessedText);
}

let functionToShowAllBeltsFatArrow = (rank) => {

    let rankProcessedText = ' belt'
    if (rank === '(if applicable) Kids\' level') rankProcessedText = ' belts'
    console.log(rank + rankProcessedText);
}
/////////////
/////////////

function outputTwoEmptyLines() {
    console.log('\n' + '\n');
}


console.log('\n.' + '\n.' + '\n' + 'Initial state of BJJ ranks array, all possible levels' + '\n' + '-----------------')
bjjBeltRanks.forEach(functionToShowAllBeltsLongForm)
outputTwoEmptyLines();

console.log('POP to remove last item' + '\n' + '-----------------')
bjjBeltRanks.pop()  //removes from the end (removes position [length-1])
bjjBeltRanks.forEach(functionToShowAllBeltsFatArrow)
outputTwoEmptyLines();

console.log('PUSH to add item to end' + '\n' + '-----------------')
bjjBeltRanks.push('First degree BLACK')  // adds to the end (adds at position [length])
bjjBeltRanks.forEach(functionToShowAllBeltsFatArrow)
outputTwoEmptyLines();


console.log('SPLICE w/3args to remove the kids belts (grey/yellow/orange/green, [1] thru [4]) and replace with general info text' + '\n' + '-----------------')
//3 ARGS, <start at [1]>,<remove [1][2][3], and[4]>,<replacement>
bjjBeltRanks.splice(1, 4, '(If under 16 y/o) Kids\' levels') 
bjjBeltRanks.forEach(functionToShowAllBeltsFatArrow)
outputTwoEmptyLines();


console.log('SPLICE w/2args to entirely remove the kids belts text to present adult belts' + '\n' + '-----------------')
//2 ARGS, <start at [1]>,<remove [1]>    no replacement
bjjBeltRanks.splice(1, 1) // 
bjjBeltRanks.forEach(functionToShowAllBeltsFatArrow)
outputTwoEmptyLines();


console.log('SHIFT to move the [0] index up to a new item, effectively deleteting the first' + '\n' + 'element and making the initial second element the new first' + '\n' + '-----------------')
// start at [1], remove 5 elements starting with and including [1], add in "Midweek" where you removed the stuff
console.log(`Element to be shifted/implicitly removed is ${bjjBeltRanks.shift()}` + '\n' + '\n')
bjjBeltRanks.forEach(functionToShowAllBeltsFatArrow)
outputTwoEmptyLines();



console.log('Upper belts are universally considered:' + '\n' + '-----------------')
//shift again to create list of upper belts 
bjjBeltRanks.shift()

bjjBeltRanks.forEach(functionToShowAllBeltsFatArrow)
outputTwoEmptyLines();



console.log('\n.' + '\n.' + '\n.' + '\n.' + '\n.' + '\n.')