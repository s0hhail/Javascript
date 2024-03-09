const marvelHeros = ["Thor","Ironman","Spiderman"]
const dcHeros = ["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allHeros = [...marvelHeros,...dcHeros]
// console.log(allHeros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const finalArr = anotherArr.flat(Infinity)
// console.log(finalArr)

// console.log(Array.isArray("Sohail"))
// console.log(Array.from("Sohail"))
// console.log(Array.from({ name: " Sohail" }))  //Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))