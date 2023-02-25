// promise.resolve
// promise chaining


// promise.resolve => return a promise
const myPromise = Promise.resolve(5);
console.log(myPromise);

// consume promise
myPromise.then((result)=>{
    console.log(result);
})


// then() method always return a Promise
// example
// promise chaining

function promiseChaining(){
    return new Promise(function(resolve,reject){
        resolve('foo');
    })
}


promiseChaining().then((value)=>{
    console.log(value);
    value += " bar";
    return value // equal to Promise.resolve(value)
    // when no return something js return undefined
}).then((value)=>{
    console.log(value);
    value += " store";
    return Promise.resolve(value);
}).then((value)=>{
    console.log(value);
})