
let textToOutput = "This is the first sentence."

let name = 'chka-chka Slim Shady.'
// need to use the back-tick, not a single quote.  ` vs '
let introduction = ` Hi! my name is ${name} `

textToOutput = textToOutput + ' Second sentence here!'
textToOutput += introduction

console.log(textToOutput)


