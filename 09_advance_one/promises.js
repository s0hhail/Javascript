//PROMISE 1
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("First async task is complete")
        resolve()
    },1000)
})
promise1.then(()=>{
    console.log("First promise consumed")
})

//PROMISE 2
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second async task is complete")
        resolve()
    },1000)
}).then(()=>{
    console.log("Second promise consumed")
})

//PROMISE 3
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            username : "s0hhail",
            email : "armansohail01@gmail.com"
        })
    }, 1000)
})
promise3.then((user)=>{
    console.log(user)
})

//PROMISE 4
const promise4 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({
                username : "s0hhail", password : "123xyz"
            })
        }
        else {
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})
promise4.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

//PROMISE 5
const promise5 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({
                username : "javascript", password : "qrst12"
            })
        }
        else {
            reject("ERROR:JS went wrong")
        }
    }, 1000)
})
async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise5()


//Implementation by async await
async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/s0hhail')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }
}
getAllUsers()

//Implementation by .then() .catch() .finally()
fetch('https://api.github.com/users/s0hhail').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    console.log(data.bio)
}).catch((error)=>{
    console.log(error)
})