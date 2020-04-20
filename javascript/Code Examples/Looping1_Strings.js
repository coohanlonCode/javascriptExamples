function outputTwoEmptyLines() {
    console.log('\n' + '\n');
}

underlineHeader = () => '\n' + '-----------------'

console.log('\n.' + '\n.' + '\n.' + '\n')

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



console.log('Print out each day using a traditional function' + underlineHeader())
//
let printEachDayTraditional = function (dayCollection) {
    dayCollection.forEach(day => console.log(day))
}

printEachDayTraditional(daysOfWeek)
outputTwoEmptyLines()



console.log('Print out each day using a fat arrow function' + underlineHeader())
//
let printEachDayFatArrow = (dayCollection) => dayCollection.forEach(day => console.log(day))

printEachDayFatArrow(daysOfWeek)
outputTwoEmptyLines()



console.log('Print out each day that is not a weekend using forEach' + underlineHeader())
//
let printWeekdays = (daysCollection) => {
    daysCollection.forEach(day => {
        if ((day.toUpperCase() != 'SUNDAY') && (day.toUpperCase() != 'SATURDAY')) {
            console.log(day)
        }
    })
}
printWeekdays(daysOfWeek)
outputTwoEmptyLines()



console.log('Print out index for Wednesday using findIndex')
console.log('The method \'findIndex()\' loops through everything in the collection' +
    'It is a type of JS enhanced for-each' + underlineHeader())
//
const getIndexListForWeekdays1 = (dayCollection) => {
    return dayCollection.findIndex(day => (day === 'Wednesday')) // if using braces, requires RETURN keyword
}
console.log(getIndexListForWeekdays1(daysOfWeek) + underlineHeader())
//
const getIndexListForWeekdays2 = (dayCollection) => dayCollection.findIndex(day => (day === 'Wednesday')) // if no braces, not RETURN needed
let indexRecordNumber2 = console.log(getIndexListForWeekdays2(daysOfWeek))
outputTwoEmptyLines()



console.log('Print out the first index for a day that is not a weekend using findIndex' + underlineHeader())
//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
//Otherwise, it returns -1, indicating that no element passed the test.
let getFirstWeekdayIndex = (allDays) => allDays.findIndex(day => day.toUpperCase() != 'SUNDAY' && day.toUpperCase() != 'SATURDAY')

console.log(getFirstWeekdayIndex(daysOfWeek))
outputTwoEmptyLines()



console.log('Print out each index for weekdays' + underlineHeader())
//
let getAllWeekdayIndexes = (allDays) => {

    let allWeekdayIndexes = []

    let isWeekday = (inputText => inputText.toUpperCase() != 'SUNDAY' && inputText.toUpperCase() != 'SATURDAY')

    //                              if 'isWeekday' is true and then do this
    allDays.forEach((day, index) => isWeekday(day) && allWeekdayIndexes.push(index))

    return allWeekdayIndexes;
}
console.log(getAllWeekdayIndexes(daysOfWeek))
outputTwoEmptyLines()



console.log('Print out each weekday text by index reference'+ underlineHeader())
//
let allWeekdaysText = (allWeekdayIndexes => {

    let weekdayTexts = [];

    allWeekdayIndexes.forEach(indexNumber => weekdayTexts.push(daysOfWeek[indexNumber]))

    return weekdayTexts;
})

let allWeekdayIndexes = getAllWeekdayIndexes(daysOfWeek)
console.log(allWeekdaysText(allWeekdayIndexes))
outputTwoEmptyLines()




console.log('Print out each day that begins with a \'T\' using find'+ underlineHeader())
//
let extractDaysBeginingWithT = (days) => {

    let daysBeginningWithT = [];

    days.forEach(day => {

        let doesBeginWithT = () => day.charAt(0).toUpperCase() === 'T' // Works, is very wordy
        doesBeginWithT(day) && daysBeginningWithT.push(day)

        // day.charAt(0).toUpperCase() === 'T' && daysBeginningWithT.push(day) // Works, no Parentheses

        // (day.charAt(0).toUpperCase() === 'T')  && daysBeginningWithT.push(day) // DOES NOT Work, parentheses need an if

        // if (day.charAt(0).toUpperCase() === 'T') daysBeginningWithT.push(day) // Works, IF before Parentheses
    })

    return daysBeginningWithT;
}

console.log(extractDaysBeginingWithT(daysOfWeek))
outputTwoEmptyLines() 