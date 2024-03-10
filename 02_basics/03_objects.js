//Singleton
// Object.create

//object literals

const mySym = Symbol("myKey1")

const jsUser = {
    [mySym] : "myKey1",
    name : "Sohail",
    "full name" : "Md Sohail Afridi",
    age : 22,
    location : "Asansol",
    email : "armansohail01@gmail.com",
    IsLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])

// console.log(jsUser[mySym])

jsUser.email = "abcd@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "wxyz@gmail.com"
// console.log(jsUser)

jsUser.greetings = function() {
    console.log("Hello JS user")
}
jsUser.greetingsTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())