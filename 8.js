// promise and setTimeout

// I want to resolve/reject promise after 2 seconds


function myPromise(){
    const bucket = ['coffee','chip','vegetable','salt','rice']
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(bucket.includes('vegetable') && bucket.includes('salt') && bucket.includes('rice')){
                resolve('Fried Rice ready')
            }else{
                reject("Couldn't do it.")
            }
        },2000)
    })
}

myPromise().then(result=>{
    console.log(result);
})