// XHR using promise

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300)
        resolve(JSON.parse(xhr.response));
      else reject(new Error("Something Wrong"));
    };
  });
}

sendRequest("GET", URL)
    .then((result) => {
        console.log(result);
        const id = result[5].id;
        return sendRequest('GET',`${URL}/${id}`)
    })
    .then((result)=>console.log(result))
    .catch(error=>console.log(error))
