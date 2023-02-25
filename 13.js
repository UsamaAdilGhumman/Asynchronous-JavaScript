// http request and error handling
const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();

xhr.open('GET', URL);

xhr.send();

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        const res = xhr.response;
        const data = JSON.parse(res)
        console.log(data);
    }else{
        console.log("Something Wrong!!!");
    }
}


// onError Method run when you have run network error
xhr.onerror = ()=>{
    console.log("network error");
}