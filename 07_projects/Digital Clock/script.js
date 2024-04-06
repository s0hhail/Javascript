const clock = document.getElementById('clock')
setInterval(()=>{
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},2000)


//100 means 1sec
//200 maens 2sec 
//and so on.....