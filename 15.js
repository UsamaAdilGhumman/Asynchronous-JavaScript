// Fetch API

const URL = "https://jsonplaceholder.typicode.com/posts";

// by default get request
fetch(URL)
    .then(res=>{
        if(res.ok){
            return res.json();
        }else{
            throw new Error("Something Wrong!!!!")
        }
    })
    .then(res=>{
        console.log(res);
    })
    .catch(error=>console.log(error))


// post request

fetch(URL, {
  method: 'POST',
  body: JSON.stringify({
    title: 'usama tariq',
    body: 'my data sample',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then(res=>{
        if(res.ok){
            return res.json();
        }else{
            throw new Error("Something Wrong!!!!")
        }
    })
    .then(res=>{
        console.log(res);
    })
    .catch(error=>console.log(error))

