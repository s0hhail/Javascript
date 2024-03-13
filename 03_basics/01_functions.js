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
// console.log(userLoginMessage("Sohail"))


function calculateCartPrice (...num1) {
    let sum = 0
    for (let index = 0; index < num1.length; index++) {
        sum = sum + num1[index] 
    }
    return sum
}
// console.log(calculateCartPrice(300,400,700,600,500,500))

const user = {
    username : "Sohail",
    price : 199
}

function handleObjects (anyObject) {
    console.log(`User is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObjects(user)
// handleObjects ({
//     username : "Afridi",
//     price : 399
// })

const arr = [100,200,400,500,600,900]

function returnSecondValue (array) {
    return array[1]
}
// console.log(returnSecondValue(arr))
console.log(returnSecondValue([10,20,40,80,70]))