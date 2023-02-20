// understand callbacks

function func(callbacks){
    console.log("function is doing task 1");
    callbacks();
}

func(()=>{
    console.log("function is doing task 2");

})


// example

function getTwoNumber(num1,num2,onSuccess,onError){
    console.log(num1,num2);
    if(typeof num1 === "number" && typeof num2 === "number")
    onSuccess(num1,num2);
    else
    onError()
}

function addTwoNumber(num1,num2){
    console.log(num1+num2);
}

getTwoNumber(4,5,(num1,num2)=>{
    console.log(num1+num2);
},()=>{
    console.log("Wrong Data type");
})


