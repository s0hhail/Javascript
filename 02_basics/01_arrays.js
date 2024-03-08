//Array

const myArr = [2,5,3,7,8]
const myNames = ["Md","Sohail","Afridi","Arman","Jilani"]
const myArr2 = new Array (2,6,3,8,5)

// console.log(myArr[2])

//Array methods

// myArr.push(11)
// myArr.push(16)

// console.log(myArr)

// myArr.pop()

// myArr.unshift(39)
// myArr.shift()

// console.log(myArr.includes(88))
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(88))
// console.log(myArr.indexOf(5))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)


//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr)