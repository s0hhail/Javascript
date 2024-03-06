//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//**************************************MEMORY**************************************/

let realName = "Sohail"
let socialMediaName = realName
socialMediaName = "Arman"
console.log(realName)
console.log(socialMediaName)

let student1 = {
    name:"Mohhammad",
    roll: 123
}
let student2 = student1
student2.roll = 321
console.log(student1.roll)
console.log(student2.roll)