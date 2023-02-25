const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();


// Ready State Value
// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.
// console.log(xhr);

// console.log(xhr.readyState);
xhr.open('GET',URL);
// console.log(xhr.readyState);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        // console.log(xhr.response);
        const response = xhr.response;
        const data = JSON.parse(response)
        console.log(data);
    } 
}

// ya tab hi chala ga jb ready state 4 how gy gi
xhr.onload = function(){
        // console.log(xhr.response);
        const response = xhr.response;
        const data = JSON.parse(response)
        console.log(data);
}

xhr.send();
