// callbacks, callbacks hell, pyramid of dom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
const heading11 = document.querySelector(".heading11");
const heading12 = document.querySelector(".heading12");
const heading13 = document.querySelector(".heading13");
const heading = document.querySelector(".heading");

console.log(heading1);
console.log(heading2);
console.log(heading3);
console.log(heading4);
console.log(heading5);
console.log(heading6);
console.log(heading7);

// settimeout ka andar settimeout use kr skta ha order ma cheeza chalna ka liya
// setTimeout(()=>{
//     heading1.textContent = "heading1"
//     setTimeout(()=>{
//         heading2.textContent = "heading2"
//     },1000)
// },1000)

// setTimeout(()=>{
//     heading3.textContent = "heading3"
// },3000)

// setTimeout(()=>{
//     heading4.textContent = "heading4"
// },4000)

// setTimeout(()=>{
//     heading5.textContent = "heading5"
// },5000)

// setTimeout(()=>{
//     heading6.textContent = "heading6"
// },6000)

// setTimeout(()=>{
//     heading7.textContent = "heading7"
// },7000)

// task
// Violet 1s
// purple 2s
// red    2s
// pink   1s
// green  2s
// blue   3s
// brown  1s

// callback ka andar nested callback ko callback hell khta ha
// setTimeout(() => {
//   heading1.textContent = "heading1";
//   heading1.style.color = "violet";
//   heading7.textContent = "heading7";
//   heading7.style.color = "brown";
//   heading4.textContent = "heading4";
//   heading4.style.color = "pink";
//   setTimeout(() => {
//     heading2.textContent = "heading2"
//     heading2.style.color = "purple";
//     heading3.textContent = "heading3"
//     heading3.style.color = "red";
//     heading5.textContent = "heading5"
//     heading5.style.color = "green";
//     setTimeout(() => {
//         heading6.textContent = "heading6"
//         heading6.style.color = "blue";
//       }, 1000);
//   }, 1000);
// }, 1000);


function change(element,text,color,time,onSuccess,onFail){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        }else{
            if(onFail){
                onFail();
            }
        }
    },time)

}

change(heading1,"one","violet",1000,()=>{
    change(heading2,"two","pink",1000,()=>{
        change(heading3,"three","green",1000,()=>{
            change(heading4,"four","red",1000,()=>{
                change(heading5,"five","brown",1000,()=>{
                    change(heading6,"six","purple",1000,()=>{
                        change(heading7,"seven","blue",1000,()=>{
                            change(heading8,"eight","DarkBlue",1000,()=>{
                                change(heading9,"nine","Magenta",1000,()=>{
                                    change(heading10,"ten","Cyan",1000,()=>{
                                        change(heading11,"eleven","	Orange",1000,()=>{
                                            change(heading12,"twelve","Olive",1000,()=>{
                                                change(heading13,"thirteen","Aquamarine",1000,()=>{
                                                },()=>{console.log("you element does not exist");})
                                            },()=>{console.log("you element does not exist");})
                                        },()=>{console.log("you element does not exist");})
                                    },()=>{console.log("you element does not exist");})
                                },()=>{console.log("you element does not exist");})
                            },()=>{console.log("you element does not exist");})
                        },()=>{console.log("you element does not exist");})
                    },()=>{console.log("you element does not exist");})
                },()=>{console.log("you element does not exist");})
            },()=>{console.log("you element does not exist");})
        },()=>{console.log("you element does not exist");})
    },()=>{console.log("you element does not exist");})
},()=>{console.log("you element does not exist");})








