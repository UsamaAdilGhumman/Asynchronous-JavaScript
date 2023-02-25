// return promise 

function ricePromise(){
    const bucket = ['coffee','chip','vegetable','salt','rice']
    return new Promise(function(resolve,reject){
        if(bucket.includes('vegetable') && bucket.includes('salt') && bucket.includes('rice')){
            resolve('Fried Rice ready')
        }else{
            reject("Couldn't do it.")
        }
    })
}

ricePromise().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
