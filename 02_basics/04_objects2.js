// const tinderUser = Object()   //Singleton
const tinderUser = {}         //Non-Singleton

tinderUser.id = "123rgs"
tinderUser.name = "Sohail"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "armansohail01@gmail.com",
    fullname : {
        userFullName : {
            fisrtName : "Md",
            secondName : "Sohail",
            lastName : "Afridi"
        }
    }
}

// console.log(regularUser.fullname.userFullName.secondName)

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}

// const finalObj = {obj1,obj2}
// const finalObj = Object.assign({}, obj1, obj2)
const finalObj = {...obj1, ...obj2}  //Spread Operator (Mostly used)

// console.log(finalObj)

const user= [
    {
        id : "1243XFW",
        email : "armansohail01@gmail.com"
    },
    {
        id : "7529XFW",
        email : "afridihussain01@gmail.com"
    }
]

// console.log(user[0].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    courseName : "JS in hindi",
    courseInstructor : "Hitesh",
    coursePrice : 999
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// {
//     "name" : "Hitesh",
//     "courseName" : "JS in hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]