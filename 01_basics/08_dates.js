//Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 2, 8)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2024, 2, 8, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-03-08")
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("08-03-24")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// let myCreatedDate = new Date("08-03-20")
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));   //In Seconds



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString("default", {
    weekday: "long",
})