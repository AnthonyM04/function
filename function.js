// function decleration
function message(firstName) {
    console.log('Hello ' + firstName)
}

function getMeow() {
    console.log('Meow!')
}

function getSumTotal(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber
    console.log(result)
}

function makePie(quantity) {
    const pie = '🥧'.repeat(quantity)
    console.log(pie)
}

function makeAnimal(animal, quantity) {
    const happyResult = animal.repeat(quantity)
    console.log(happyResult)
    return happyResult 
}

//invoke the function
// getMeow()
// getSumTotal(2,5);
// getSumTotal(2900,16000000)
// getSumTotal("sym","phony")
// getSumTotal("Back","Forward")
// getSumTotal("Forward","Back")
// message("Jarvis")
// message("cat, who are you?")
// makePie(4000);
makeAnimal('🐼',953)