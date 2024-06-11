let promise =Promise((resolve,reject)=>{
    let a=4
    if(a==5){
        resolve('promise is achieved')
    }
    else{
        reject('promise is achieved')
    }
})
promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})