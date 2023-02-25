// intro to promise

// abi hama value ni pata magar future ma pata how gi

const bucket = ['coffee','chip','vegetable','salt','rice']


// produce promise
const friedRicePromise = new Promise(function(resolve,reject){
    if(bucket.includes('vegetable') && bucket.includes('salt') && bucket.includes('rice')){
        resolve('Fried Rice ready')
    }else{
        reject("Couldn't do it.")
    }
})


// consume promise
friedRicePromise.then(
    // jab promise resolve how ga
    result=>console.log(result),
    // jab promise reject how ga
    error=>console.log(error)
    )

// only care reject
friedRicePromise.then(
    // jab promise resolve how ga
    null,
    // jab promise reject how ga
    error=>console.log(error)
    )


// then and catch 

friedRicePromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


// promise and setTimeout
// settimeout take more time to primse

setTimeout(()=>{
    console.log('hello world');
},1000)


friedRicePromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})