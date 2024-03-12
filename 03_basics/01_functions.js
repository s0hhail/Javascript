function sayMyName () {
    console.log("S")
    console.log("O")
    console.log("H")
    console.log("A")
    console.log("I")
    console.log("L")
}

// sayMyName()

// function addTwoNumbers (number1, number2) {               
//     console.log(number1 + number2)
// }

function addTwoNumbers (number1, number2) {               
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const res = addTwoNumbers(3,7)               
// console.log("Result: ", res)  

// console.log("Result: ",addTwoNumbers(3,7))

function userLoginMessage (username = "Mohammad") {
    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(userLoginMessage("Sohail"))