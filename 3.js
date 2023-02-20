// change color of body every second

const body = document.body;
console.log(body);

var intervalId;
function IntervalFunc(){
        intervalId = setInterval(()=>{
        const red = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const rgb = `rgb(${red},${green},${blue})`
        console.log(rgb);
        body.style.backgroundColor = rgb;
    },1000)
}


console.log(intervalId);
IntervalFunc();
const button = document.querySelector('button');
console.log(button);
button.addEventListener('mouseover',()=>{
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
})

button.addEventListener('mouseleave',()=>{
    button.textContent = "Stop Changing !!!";
    IntervalFunc();
})
