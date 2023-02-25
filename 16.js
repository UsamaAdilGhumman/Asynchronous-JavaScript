// async await

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    const response = await fetch(URL)
    if(!response.ok){
        throw new Error("Something went wrong!!")
    }
    const data = await response.json();
    console.log( data );
    return data;
    
}

getPosts()
    .then(data=>console.log(data))
    .catch(error=>console.log(error))