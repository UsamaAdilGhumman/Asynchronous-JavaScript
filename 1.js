// synchronous programming vs asynchronous programming

// synchronous programming

// line by line code run how ga
// synchronous programming and single threaded
console.log("script start");

for(let i=0;i<10000;i++){
    console.log("inside for loop");
}

console.log("script end");

// asynchronous programming
// setTimeout
console.log("script start");

// mininum delay
const id = setTimeout(()=>{
    console.log("hello world !!!");
},0)

for(let i = 0;i<100;i++){
    console.log("......");
}

console.log("setTimeout id: ",id);
console.log("clearTimeout");
clearTimeout(id)
console.log("script end");


// asynchronous programming
// ma mara function queue ka andar a gy ga lakin run tb how ga jb hamri 
// call stack empty how gi

